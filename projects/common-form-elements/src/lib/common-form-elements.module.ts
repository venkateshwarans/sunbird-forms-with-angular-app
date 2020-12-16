import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { FormComponent } from './form/form.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { TextareaComponent } from './textarea/textarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CaretDownComponent } from './icon/caret-down/caret-down.component';
import { DropdownIconComponent } from './icon/dropdown/dropdownIcon.component';
import { EmptyCircleComponent } from './icon/empty-circle/empty-circle.component';
import { GreenTickComponent } from './icon/green-tick/green-tick.component';
import { RedExclamationComponent } from './icon/red-exclamation/red-exclamation.component';
import { FileComponent } from './file/file.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [TextareaComponent, TextboxComponent, DropdownComponent,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent,
    FileComponent, FormWrapperComponent],
  declarations: [CommonFormElementsComponent, FormComponent,
    TextboxComponent, TextareaComponent,CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent,
    RedExclamationComponent, DropdownComponent, DynamicFieldDirective, FileComponent, FormWrapperComponent],
  exports: [CommonFormElementsComponent, FormComponent, TextboxComponent, TextareaComponent, DropdownComponent, DynamicFieldDirective,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent,
    FileComponent, FormWrapperComponent ]
})
export class CommonFormElementsModule { }
