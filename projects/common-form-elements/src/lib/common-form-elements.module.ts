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
import { TopicpickerComponent } from './topicpicker/topicpicker.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  entryComponents: [TextareaComponent, TextboxComponent, DropdownComponent,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent,
    FileComponent, TopicpickerComponent, KeywordsComponent],
  declarations: [CommonFormElementsComponent, FormComponent,
    TextboxComponent, TextareaComponent, CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent,
    RedExclamationComponent, DropdownComponent, DynamicFieldDirective, FileComponent, TopicpickerComponent, KeywordsComponent],
  exports: [CommonFormElementsComponent, FormComponent, TextboxComponent, TextareaComponent, DropdownComponent, DynamicFieldDirective,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent, FileComponent,
    TopicpickerComponent, KeywordsComponent ]
})
export class CommonFormElementsModule { }
