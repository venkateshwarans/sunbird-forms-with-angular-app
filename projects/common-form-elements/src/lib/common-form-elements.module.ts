import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { FormComponent } from './form/form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [CommonFormElementsComponent, FormComponent, TextboxComponent, DropdownComponent],
  exports: [CommonFormElementsComponent, FormComponent, TextboxComponent, DropdownComponent]
})
export class CommonFormElementsModule { }
