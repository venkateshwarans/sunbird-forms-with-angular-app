import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
  Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
  import {AsyncValidatorFactory, FieldConfig, FieldConfigInputType, FieldConfigValidationType} from '../common-form-config';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {distinctUntilChanged, map, scan, tap} from 'rxjs/operators';
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

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const formGroupData = {};
    this.config.forEach((element: any, index) => {
      // if (element.type !== FieldConfigInputType.LABEL) {
        // }
      const formValueList = this.prepareFormValidationData(element, index);
      formGroupData[element.code] = formValueList;
    });

    this.formGroup = this.formBuilder.group(formGroupData);
    // this.initialize.emit(this.formGroup);
    this.formGroup.valueChanges.pipe(
      tap((data) => {
        this.initialize.emit(data);
        console.log(data);
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

}
