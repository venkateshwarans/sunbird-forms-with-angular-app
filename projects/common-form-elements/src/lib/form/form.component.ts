import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
  Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
  import {AsyncValidatorFactory, FieldConfig, FieldConfigInputType, FieldConfigValidationType, SectionConfig} from '../common-form-config';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {distinctUntilChanged, map, scan, tap} from 'rxjs/operators';
import * as _ from 'lodash-es';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() config;
  @Output() initialize = new EventEmitter();
  @Output() finalize = new EventEmitter();

  @Input() dataLoadStatusDelegate = new Subject<'LOADING' | 'LOADED'>();

  @Output() valueChanges = new EventEmitter();
  @Output() statusChanges = new EventEmitter();

  private statusChangesSubscription: Subscription;
  private valueChangesSubscription: Subscription;


  _: any = _;

  formGroup: FormGroup;
  FieldConfigInputType = FieldConfigInputType;
  fieldDependency: {};
  isSection = false;
  flattenSectionFields;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    const formGroupData = {};
    const dependency = [];

    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }

    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }

    // this.config.forEach((element: any, index) => {
    //   // if (element.type !== FieldConfigInputType.LABEL) {
    //     // }
    // const formValueList = this.prepareFormValidationData(element, index);
    //   if (!_.isEmpty(element.depends)) {
    //     dependency.push({code: element.code, depends: element.depends});
    //   }
    //   formGroupData[element.code] = formValueList;
    // });

    this.isSection = !_.isEmpty(_.find(this.config, 'fields'));
    if (this.isSection) {
      this.config.forEach((sections) => {
          sections.fields.forEach((element: any, index) => {
            const formValueList = this.prepareFormValidationData(element, index);
          if (!_.isEmpty(element.depends)) {
            dependency.push({code: element.code, depends: element.depends});
          }
          formGroupData[element.code] = formValueList;
          });
      });
    } else {
      let defaultSection: any = [];
      defaultSection = [
        {
          'name': '',
          'fields': _.cloneDeep(this.config)
        }
      ];

      this.config = _.cloneDeep(defaultSection);
      defaultSection.forEach((sections) => {
        sections.fields.forEach((element: any, index) => {
          const formValueList = this.prepareFormValidationData(element, index);
        if (!_.isEmpty(element.depends)) {
          dependency.push({code: element.code, depends: element.depends});
        }
        formGroupData[element.code] = formValueList;
        });
    });
    }
    this.flattenSectionFields = this.getFlattenedSectionFields();
    this.mapDependency(dependency);
    this.formGroup = this.formBuilder.group(formGroupData);
    // this.initialize.emit(this.formGroup);

    this.statusChangesSubscription = this.formGroup.valueChanges.pipe(
      tap((v) => {
        this.statusChanges.emit({
          isPristine: this.formGroup.pristine,
          isDirty: this.formGroup.dirty,
          isInvalid: this.formGroup.invalid,
          isValid: this.formGroup.valid,
          controls: this.getFormValidationErrors()
        });
      })
    ).subscribe();

    this.valueChangesSubscription =  this.formGroup.valueChanges.pipe(
      tap((data) => {
        this.initialize.emit(data);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.finalize.emit();

    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }

    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  getFormValidationErrors() {
    const errors = [];
    _.keys(this.formGroup.controls).forEach(key => {
      const controlErrors = this.formGroup.get(key).errors;
      if (controlErrors != null) {
        _.keys(controlErrors).forEach(keyError => {
          errors.push({
            control_name: key,
            error_name: keyError,
            error_value: controlErrors[ keyError ]
          });
        });
      }
    });
    return errors;
  }


  private prepareFormValidationData(element: any, index) {
    const formValueList = [];
    const validationList = [];

    let defaultVal: any = '';
    switch (element.inputType) {
      case 'text':
        defaultVal = element.default || null;
        break;
      case 'select':
      case 'nested_select':
        defaultVal = element.templateOptions && element.templateOptions.multiple ?
          (element.default && Array.isArray(element.default) ? element.default : []) : (element.default || null);
        break;
      case 'checkbox':
        defaultVal = false || !!element.default;
        break;
    }

    formValueList.push(defaultVal);

    if (element.validations && element.validations.length) {
      element.validations.forEach((data, i) => {
        switch (data.type) {
          case 'required':
            if (element.inputType === 'select' || element.inputType === 'nested_select') {
              validationList.push(Validators.required);
            } else if (element.type === 'checkbox') {
              validationList.push(Validators.requiredTrue);
            } else {
              validationList.push(Validators.required);
            }
            break;
          case 'pattern':
            validationList.push(Validators.pattern(element.validations[i].value as string));
            break;
          case 'min':
            validationList.push(Validators.minLength(element.validations[i].value as number));
            break;
          case 'max':
            validationList.push(Validators.maxLength(element.validations[i].value as number));
            break;
        }
      });
    }

    formValueList.push(Validators.compose(validationList));

    return formValueList;
  }

  mapDependency(dependency) {
    const configCode = _.map(this.flattenSectionFields, 'code');
    const fieldDependency = {};
    _.forEach(configCode, code => {
        _.forEach(this.config, config => {
          _.forEach(config.fields, field => {
            if (_.includes(field.depends, code)) {
                if (_.has(fieldDependency, code)) {
                  fieldDependency[code].push(field.code);
                } else {
                  fieldDependency[code] = [];
                  fieldDependency[code].push(field.code);
                }
            }
          })
        });
    });
    this.fieldDependency = fieldDependency;
  }


  fetchContextTerms(config: FieldConfig<any>, context) {
    return _.get(_.find(config, {'code': context}), 'terms') || null;
  }

  getAllDependsFormControl(code) {
    const depends = _.get(this.fieldDependency, code);
    const fieldDepends: any = {};
    _.forEach(depends, depend => {
        fieldDepends[depend] = this.formGroup.get(depend);
    });
    return fieldDepends || null;
  }

  fetchDependencyTerms(code) {
    const depends = _.get(this.fieldDependency, code);
    const dependsTerms = _.map(_.filter(this.flattenSectionFields, c => {
      return _.includes(depends, c.code);
    }), 'terms');
    return _.flatten(dependsTerms);
  }

  getAppIcon(config, val) {
    if (val) {
      return config.filter(field => {
        return field.code === 'appicon';
      });
    } else {
       return config.filter(field => {
        return field.code !== 'appicon';
      });
    }
  }

  groupBySection(config) {
    const fields = this.getAppIcon(config, false);
    return _.groupBy(fields, 'section.index');
  }

  getFlattenedSectionFields() {
    return _.flatten(_.map(this.config, 'fields'));
  }

}
