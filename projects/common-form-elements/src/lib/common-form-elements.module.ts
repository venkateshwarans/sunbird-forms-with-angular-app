import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { FormComponent } from './form/form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { TextareaComponent } from './textarea/textarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [TextareaComponent, TextboxComponent, DropdownComponent],
  declarations: [CommonFormElementsComponent, FormComponent, TextboxComponent, TextareaComponent, DropdownComponent, DynamicFieldDirective],
  exports: [CommonFormElementsComponent, FormComponent, TextboxComponent, TextareaComponent, DropdownComponent, DynamicFieldDirective]
})
export class CommonFormElementsModule { }
