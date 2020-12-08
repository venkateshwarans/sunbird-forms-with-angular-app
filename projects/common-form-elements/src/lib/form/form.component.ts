import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
  Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
  import {AsyncValidatorFactory, FieldConfig, FieldConfigInputType, FieldConfigValidationType} from '../common-form-config';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {distinctUntilChanged, map, scan, tap} from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() config;
  @Output() initialize = new EventEmitter();

  formGroup: FormGroup;
  FieldConfigInputType = FieldConfigInputType;
  fieldDependency: {};

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const formGroupData = {};
    const dependency = [];
    this.config.forEach((element: any, index) => {
      // if (element.type !== FieldConfigInputType.LABEL) {
        // }
    const formValueList = this.prepareFormValidationData(element, index);
      if (!_.isEmpty(element.depends)) {
        dependency.push({code: element.code, depends: element.depends});
      }
      formGroupData[element.code] = formValueList;
    });

    this.mapDependency(dependency);
    this.formGroup = this.formBuilder.group(formGroupData);
    // this.initialize.emit(this.formGroup);
    this.formGroup.valueChanges.pipe(
      tap((data) => {
        this.initialize.emit(data);
      })
    ).subscribe();
  }


  private prepareFormValidationData(element: any, index) {
    const formValueList = [];
    const validationList = [];

    let defaultVal: any = '';
    switch (element.type) {
      case 'select':
        defaultVal = element.templateOptions.multiple ?
          (element.default && Array.isArray(element.default) ? element.default : []) : (element.default || null);
        break;
    }

    formValueList.push(defaultVal);

    if (element.validations && element.validations.length) {
      element.validations.forEach((data, i) => {
        switch (data.type) {
          case 'required':
            if (element.type === 'select' || element.type === 'nested_select') {
              validationList.push((c) => {
                if (element.templateOptions.multiple) {
                  return c.value && c.value.length ? null : 'error';
                }
                return !!c.value ? null : 'error';
              });
            } else {
              validationList.push(Validators.required);
            }
            break;
        }
      });
    }

    formValueList.push(Validators.compose(validationList));

    return formValueList;
  }

  mapDependency(dependency) {
    const configCode = _.map(this.config, 'code');
    const fieldDependency = {};
    _.forEach(configCode, code => {
        _.forEach(this.config, field => {
            if (_.includes(field.depends, code)) {
                if (_.has(fieldDependency, code)) {
                  fieldDependency[code].push(field.code);
                } else {
                  fieldDependency[code] = [];
                  fieldDependency[code].push(field.code);
                }
            }
        });
    });
    this.fieldDependency = fieldDependency;
  }


  fetchContextTerms(config: FieldConfig<any>, context) {
    return _.get(_.find(config, {'code': context}), 'terms') || null;
  }

  getAllDependsFormControl(code) {
    const depends = _.get(this.fieldDependency, code);
    const fieldDepends =  _.map(depends, depend => {
      return this.formGroup.get(depend);
    });
    return _.compact(fieldDepends);
  }

  fetchDependencyTerms(code) {
    const depends = _.get(this.fieldDependency, code);
    const dependsTerms = _.map(_.filter(this.config, c => {
      return _.includes(depends, c.code);
    }), 'terms');
    return _.flatten(dependsTerms);
  }

}
