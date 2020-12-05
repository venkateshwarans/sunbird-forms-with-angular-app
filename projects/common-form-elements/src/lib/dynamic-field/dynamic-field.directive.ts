import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { FieldConfig } from '../interfaces/field.interface';
// import { InputComponent } from '../input/input.component';
// import { ButtonComponent } from '../button/button.component';
// import { SelectComponent } from '../select/select.component';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { TextareaComponent } from '../textarea/textarea.component';


const componentMapper = {
  textarea: TextareaComponent,
  text: TextboxComponent,
  select: DropdownComponent,
};

@Directive({
  selector: '[libDynamicField]'
})
export class DynamicFieldDirective implements OnInit {



  @Input() field: FieldConfig;
  @Input() formGroup: FormGroup;
  @Input() formControlRef?: FormControl;
  @Input() label: String;
  @Input() options?: any = [];
  @Input() context?: FormControl;


  componentRef: any;


  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef

  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.inputType]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    console.log(this.field);
    console.log(this.formGroup);
    this.componentRef.instance.formGroup = this.formGroup;
    this.componentRef.instance.formControlRef = this.formControlRef;
    this.componentRef.instance.label = this.label;
    this.componentRef.instance.options = this.options;
    this.componentRef.instance.context = this.context;

    // this.componentRef.instance = {
    //   field : this.field,
    //   formGroup : this.formGroup,
    //   formControlRef : this.formControlRef,
    //   label : this.label,
    //   options : this.options,
    //   context : this.context
    // };
  }



}
