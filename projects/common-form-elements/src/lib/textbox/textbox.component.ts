import {Component, Input, OnInit, AfterViewInit, OnChanges, ViewChild, ElementRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import { FieldConfigAsyncValidation } from '../common-form-config';

@Component({
  selector: 'sb-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() asyncValidation?: FieldConfigAsyncValidation;
  @Input() label: String;
  @Input() labelHtml: any;
  @Input() placeholder: String;
  @Input() validations?: any;
  @Input() formControlRef?: FormControl;
  @Input() prefix?: String;
  @Input() default: String;
  @ViewChild('validationTrigger') validationTrigger: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log('default ', this.default);
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    if (this.asyncValidation && this.asyncValidation.asyncValidatorFactory && this.formControlRef) {
      if (this.formControlRef.asyncValidator) {
        return;
      }

      this.formControlRef.setAsyncValidators(this.asyncValidation.asyncValidatorFactory(
        this.asyncValidation.marker,
        this.validationTrigger.nativeElement
      ));
    }
  }

}
