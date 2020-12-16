import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef, Renderer2} from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { FieldConfig } from '../interfaces/field.interface';
// import { InputComponent } from '../input/input.component';
// import { ButtonComponent } from '../button/button.component';
// import { SelectComponent } from '../select/select.component';
import * as _ from 'lodash-es';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { FileComponent } from '../file/file.component';


const componentMapper = {
  textarea: TextareaComponent,
  text: TextboxComponent,
  select: DropdownComponent,
  multiselect: DropdownComponent,
  file: FileComponent,
  keywordsuggestion: TextboxComponent,
  dialcode: TextboxComponent,
  topicselector: TextboxComponent,
  licenses: TextboxComponent,
  label: TextboxComponent,
  number: TextboxComponent,
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
  @Input() contextTerms?: any = [];
  @Input() depends?: FormControl[];
  @Input() dependencyTerms?: any = [];


  componentRef: any;


  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private renderer2: Renderer2

  ) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.inputType]);
    this.componentRef = this.container.createComponent(factory);
    if (this.field.renderingHints && this.field.renderingHints.class) {
      this.setClassListOnElement(this.field.renderingHints.class);
    }
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.formGroup = this.formGroup;
    this.componentRef.instance.formControlRef = this.formControlRef;
    this.componentRef.instance.label = this.label;
    this.componentRef.instance.options = this.options;
    this.componentRef.instance.context = this.context;
    this.componentRef.instance.contextTerms = this.contextTerms;
    this.componentRef.instance.depends = this.depends;
    this.componentRef.instance.dependencyTerms = this.dependencyTerms;

    // this.componentRef.instance = {
    //   field : this.field,
    //   formGroup : this.formGroup,
    //   formControlRef : this.formControlRef,
    //   label : this.label,
    //   options : this.options,
    //   context : this.context
    // };
  }

  setClassListOnElement (cssClasses) {
    const classList = cssClasses.split(' ');
    _.forEach(classList, cssClass => {
      this.renderer2.addClass(this.componentRef.location.nativeElement, cssClass);
    });
  }

}
