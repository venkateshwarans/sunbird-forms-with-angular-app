import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { DynamicMultiSelectComponent } from './dynamic-multi-select/dynamic-multi-select.component';
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
import { DynamicTimerComponent } from './dynamic-timer/dynamic-timer.component';
import { DynamicFrameworkComponent } from './dynamic-framework/dynamic-framework.component';
import { DynamicFrameworkCategorySelectComponent } from './dynamic-framework-category-select/dynamic-framework-category-select.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { DynamicDialcodeComponent } from './dynamic-dialcode/dynamic-dialcode.component';
import { DynamicRichtextComponent } from './dynamic-richtext/dynamic-richtext.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
  ],
  entryComponents: [DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent, DynamicDropdownComponent,
    DynamicMultipleDropdownComponent, DynamicCheckboxComponent, DynamicRadioComponent, DynamicDialcodeComponent, DynamicRichtextComponent,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent,
    FileComponent, TopicpickerComponent, KeywordsComponent, DynamicMultiSelectComponent, DynamicTimerComponent,
    DynamicFrameworkCategorySelectComponent, DynamicFrameworkComponent],
  declarations: [CommonFormElementsComponent,
     CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent,
    RedExclamationComponent, DynamicFieldDirective, FileComponent, TopicpickerComponent, KeywordsComponent,
    DynamicMultiSelectComponent,
    DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent, DynamicRichtextComponent,
    DynamicDropdownComponent, DynamicMultipleDropdownComponent, DynamicCheckboxComponent, DynamicRadioComponent, DynamicDialcodeComponent,
    DynamicTimerComponent, DynamicFrameworkComponent, DynamicFrameworkCategorySelectComponent],
  exports: [DynamicFormComponent, DynamicTextboxComponent, DynamicTextareaComponent, DynamicDropdownComponent,
    DynamicMultipleDropdownComponent, DynamicCheckboxComponent, DynamicRadioComponent, CommonFormElementsComponent,
    DynamicDialcodeComponent, DynamicFieldDirective, DynamicRichtextComponent,
    CaretDownComponent, DropdownIconComponent, EmptyCircleComponent, GreenTickComponent, RedExclamationComponent, FileComponent,
    TopicpickerComponent, KeywordsComponent, DynamicMultiSelectComponent,
    DynamicTimerComponent, DynamicFrameworkComponent, DynamicFrameworkCategorySelectComponent ]
})
export class CommonFormElementsModule { }
