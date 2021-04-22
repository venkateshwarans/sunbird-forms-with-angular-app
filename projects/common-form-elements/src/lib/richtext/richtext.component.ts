import {Component, Input, OnInit, AfterViewInit, OnChanges, ViewChild, ElementRef, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import { FieldConfigAsyncValidation, CustomFormControl } from '../common-form-config';
import ClassicEditor from 'v-ckeditor';
import * as _ from 'lodash-es';

@Component({
  selector: 'sb-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RichtextComponent implements OnInit, AfterViewInit {
    @ViewChild('EDITOR', {static: false}) public editorRef: ElementRef;
    @Input() asyncValidation?: FieldConfigAsyncValidation;
    @Input() label: String;
    @Input() labelHtml: any;
    @Input() field: any;
    @Input() placeholder: String;
    @Input() validations?: any;
    @Input() formControlRef?: CustomFormControl;
    @Input() prefix?: String;
    @Input() default: String;
    @Input() disabled: Boolean;
    @Input() visible: Boolean;
    @ViewChild('validationTrigger', {static: false}) validationTrigger: ElementRef;
    showEditor = false;
    editorConfig: any;
    editorInstance: any;
    characterCount: any;
  constructor() { }

  ngOnInit() {
    this.editorConfig = {
        toolbar: ['bold', '|', 'italic', '|', 'underline', '|', 'insertTable',
            '|', 'numberedList', '|', 'BulletedList', '|', 'fontSize', '|',
        ],
        fontSize: {
            options: [
                9,
                11,
                13,
                15,
                17,
                19,
                21,
                23,
                25
            ]
        },
        isReadOnly: this.disabled,
        removePlugins: ['ImageCaption', 'mathtype', 'ChemType']
    };
    this.showEditor = true;
}
ngAfterViewInit() {
  if(this.visible) {
    this.initializeEditors();
  }
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

  initializeEditors() {
    ClassicEditor.create(this.editorRef.nativeElement, {
      extraPlugins: ['Font', 'Table'],
      toolbar: this.editorConfig.toolbar,
      fontSize: this.editorConfig.fontSize,
      isReadOnly: this.editorConfig.isReadOnly,
      removePlugins: this.editorConfig.removePlugins,
      wordCount: {
        onUpdate: stats => {
          this.characterCount = stats.characters;
        },
      }
    })
      .then(editor => {
        this.editorInstance = editor;

        editor.isReadOnly = this.disabled;
        this.onChangeEditor(this.editorInstance);
      })
      .catch(error => {
        console.error(error.stack);
      });
  }
  onChangeEditor(editor) {
    editor.model.document.on('change', (eventInfo, batch) => {
        this.formControlRef.markAsTouched();
        this.formControlRef.richTextCharacterCount  = this.characterCount;
        this.formControlRef.patchValue(editor.getData());
    });
  }

  }

