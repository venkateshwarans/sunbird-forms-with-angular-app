import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges, HostListener, ViewChild } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {from, Subject, merge} from 'rxjs';
import {FieldConfig, FieldConfigOptionsBuilder} from '../common-form-config';
import {takeUntil, tap} from 'rxjs/operators';
import {fromJS, List, Map, Set} from 'immutable';
import * as _ from 'lodash-es';
@Component({
  selector: 'sb-dynamic-multiple-dropdown',
  templateUrl: './dynamic-multiple-dropdown.component.html',
  styleUrls: ['./dynamic-multiple-dropdown.component.css']
})
export class DynamicMultipleDropdownComponent implements OnInit, OnChanges, OnDestroy {

  @Input() disabled?: boolean;
  @Input() field: FieldConfig<String>;
  @Input() options: any;
  @Input() label?: string;
  @Input() labelHtml: any;
  @Input() placeHolder?: string;
  @Input() isMultiple = true;
  @Input() context?: FormControl;
  @Input() formControlRef?: FormControl;
  @Input() formGroup?: FormGroup;
  @Input() platform: any = 'web';
  @Input() default?: any;
  @Input() contextData: any;
  @Input() dataLoadStatusDelegate: Subject<'LOADING' | 'LOADED'>;
  @Input() depends?: FormControl[];
  @Input() dependencyTerms?: any = [];

  showModal = false;
  tempValue = Set<any>();
  resolvedOptions = List<Map<string, string>>();
  optionValueToOptionLabelMap = Map<any, string>();

  fromJS = fromJS;

  private dispose$ = new Subject<undefined>();

  @HostListener('document:click')
  docClick() {
    if (this.showModal) {
      this.showModal = false;
    }
  }
  constructor(
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    if (this.field && this.field.range) {
      this.options = this.field.range;
    }

    if (!_.isEmpty(this.depends)) {
      merge(..._.map(this.depends, depend => depend.valueChanges)).pipe(
        tap(() => {
          this.formControlRef.patchValue(null);
          this.resetTempValue();
        }),
        takeUntil(this.dispose$)
      ).subscribe();
    }

    this.formControlRef.valueChanges.pipe(
      tap((value) => {
        this.setTempValue(value);
        this.changeDetectionRef.detectChanges();
      }),
      takeUntil(this.dispose$)
    ).subscribe();
    this.setupOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['options'] || !changes['options'].currentValue) {
      return;
    }
  }

  onSubmit() {
    const finalValue = this.tempValue.toList().toJS();
    this.formControlRef.patchValue(this.isMultiple ? finalValue : finalValue[0]);
    this.formControlRef.markAsDirty();
    this.showModal = false;
  }

  openModal(event) {
    if (this.context && this.context.invalid) {
      return;
    }

    this.setTempValue(this.formControlRef.value);
    const htmlCollection = document.getElementsByClassName('sb-modal-dropdown-web');
    const modalElements = Array.from(htmlCollection);
    const isModalAlreadyOpened = modalElements.some((element: HTMLElement) => element.hidden === false );

    if (this.platform === 'web' && isModalAlreadyOpened && !this.showModal) {
      modalElements.forEach((item: HTMLElement) => {
        item.hidden = true;
      });
    }

    if (this.platform === 'web' && this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }

    event.stopPropagation();
  }

  addSelected(option: Map<string, string>) {
    if (this.isMultiple) {
      if (this.tempValue.includes(option.get('value'))) {
        this.tempValue = this.tempValue.remove(option.get('value'));
      } else {
        this.tempValue = this.tempValue.add(option.get('value'));
      }
    } else {
      this.tempValue = this.tempValue.clear();
      this.tempValue = this.tempValue.add(option.get('value'));
    }
  }
  onCancel() {
    this.formControlRef.markAsDirty();
    this.showModal = false;
  }

  ngOnDestroy(): void {
    this.dispose$.next(null);
    this.dispose$.complete();
  }

  private isOptionsArray() {
    return Array.isArray(this.options);
  }

  private isOptionsClosure() {
    return typeof this.options === 'function';
  }

  private isOptionsMap() {
    return !Array.isArray(this.options) && typeof this.options === 'object';
  }

  private setTempValue(value: any) {
    if (value) {
      if (Array.isArray(value)) {
        this.tempValue = Set(fromJS(value));
      } else {
        this.tempValue = Set(fromJS([value]));
      }
      // this.onSubmit();
    }
  }

  private resetTempValue() {
    this.tempValue = Set(null);
  }

  private setupOptions() {
    if (!this.options) {
      this.options = [];
      this.resolvedOptions = this.resolvedOptions.clear();
    }

    if (this.isOptionsArray()) {
      this.resolvedOptions = fromJS(this.options);
    } else if (this.isOptionsMap()) {
      this.resolvedOptions = (this.context && this.context.value) ?
        fromJS(this.options[this.context.value]) :
        this.resolvedOptions;
    } else if (this.isOptionsClosure()) {
      from((this.options as FieldConfigOptionsBuilder<any>)(
        this.formControlRef,
        this.depends,
        this.formGroup,
        () => this.dataLoadStatusDelegate.next('LOADING'),
        () => this.dataLoadStatusDelegate.next('LOADED')
      )).pipe(
        tap((options = []) => {
          this.resolvedOptions = fromJS(options);

          this.resolvedOptions.forEach((option) => {
            this.optionValueToOptionLabelMap = this.optionValueToOptionLabelMap.set(option.get('value'), option.get('label'));
          });

          this.setTempValue(this.default);

          this.changeDetectionRef.detectChanges();
        }),
        takeUntil(this.dispose$)
      ).subscribe();
    }

    this.resolvedOptions.forEach((option) => {
      this.optionValueToOptionLabelMap = this.optionValueToOptionLabelMap.set(option.get('value'), option.get('label'));
    });

    this.setTempValue(this.default);
  }

}
