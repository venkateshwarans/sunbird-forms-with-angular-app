import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject, Subscription, combineLatest, merge} from 'rxjs';
import {FieldConfig, FieldConfigOption, FieldConfigOptionsBuilder, DynamicFieldConfigOptionsBuilder,
CustomFormGroup } from '../common-form-config';
import {tap} from 'rxjs/operators';
import * as _ from 'lodash-es';
import {ValueComparator} from '../utilities/value-comparator';


@Component({
  selector: 'sb-dynamic-framework',
  templateUrl: './dynamic-framework.component.html',
  styleUrls: ['./dynamic-framework.component.css']
})
export class DynamicFrameworkComponent implements OnInit, AfterViewInit {

  ValueComparator = ValueComparator;
  @Input() field: FieldConfig<String>;
  @Input() disabled?: boolean;
  @Input() options: any;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() isMultiple?: boolean;
  @Input() context?: FormControl;
  @Input() contextTerms?: any;
  @Input() formControlRef?: FormControl;
  @Input() formGroup?: CustomFormGroup;
  @Input() default?: any;
  @Input() contextData: any;
  @Input() dataLoadStatusDelegate: Subject<'LOADING' | 'LOADED'>;
  @Input() type?: string;
  @Input() styleClass?: string;
  @Output() onChangeFilter: EventEmitter<any> = new EventEmitter();
  @Input() validations?: any;
  @Input() dependencyContext: any;


  @Input() depends?: FormControl[];
  @Input() dependencyTerms?: any = [];

  options$?: Observable<FieldConfigOption<any>[]>;
  contextValueChangesSubscription?: Subscription;



  constructor() { }


  ngOnInit() {

    if (!this.options) {
      this.options = _.isEmpty(this.field.options) ? this.isOptionsClosure(this.field.options) && this.field.options : [];
    }

    if (this.isOptionsClosure(this.options)) {
      // tslint:disable-next-line:max-line-length
      this.options$ = (this.options as DynamicFieldConfigOptionsBuilder<any>)(this.formControlRef, this.depends, this.formGroup, () => this.dataLoadStatusDelegate.next('LOADING'), () => this.dataLoadStatusDelegate.next('LOADED')) as any;

      this.options$.subscribe();
    }

  }

  ngAfterViewInit() {
    if (this.default) {
      this.handleIfDefaultExists();
    }
  }

  handleIfDefaultExists() {
    this.formControlRef.patchValue(this.default);
    this.formControlRef.updateValueAndValidity({onlySelf: false, emitEvent: true});
  }

  getOptionValueForTerms(option) {
    if (this.field.output) {
      if (this.field.dataType === 'list') {
        return [option[this.field.output]];
      }
      return option[this.field.output];
    } else {
      return this.field.dataType === 'list' ? [option.name] : option.name;
    }
  }


  isOptionsClosure(options: any) {
    return typeof options === 'function';
  }

}
