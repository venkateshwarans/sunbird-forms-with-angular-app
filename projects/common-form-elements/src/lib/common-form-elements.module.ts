import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
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
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTextboxComponent } from './dynamic-textbox/dynamic-textbox.component';
import { DynamicTextareaComponent } from './dynamic-textarea/dynamic-textarea.component';
import { DynamicDropdownComponent } from './dynamic-dropdown/dynamic-dropdown.component';
import { DynamicMultipleDropdownComponent } from './dynamic-multiple-dropdown/dynamic-multiple-dropdown.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
  ],
  entryComponents: [DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent, DynamicDropdownComponent,
    DynamicMultipleDropdownComponent, DynamicCheckboxComponent,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent,
    FileComponent, TopicpickerComponent, KeywordsComponent, MultiSelectComponent],
  declarations: [CommonFormElementsComponent,
     CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent,
    RedExclamationComponent, DynamicFieldDirective, FileComponent, TopicpickerComponent, KeywordsComponent,
    MultiSelectComponent,
    DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent,
    DynamicDropdownComponent, DynamicMultipleDropdownComponent, DynamicCheckboxComponent],
  exports: [DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent, DynamicDropdownComponent,
    DynamicMultipleDropdownComponent, DynamicCheckboxComponent, CommonFormElementsComponent,
    DynamicFieldDirective,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent, FileComponent,
    TopicpickerComponent, KeywordsComponent, MultiSelectComponent ]
})
export class CommonFormElementsModule { }
