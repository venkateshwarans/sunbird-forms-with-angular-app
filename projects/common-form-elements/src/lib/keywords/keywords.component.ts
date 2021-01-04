import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldConfig } from '../common-form-config';

@Component({
  selector: 'sb-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {
  @Input() label: String;
  @Input() placeholder: String;
  @Input() formControlRef: FormControl;
  @Input() field: FieldConfig<String>;
  @Input() validations?: any;

  public items: any;
  inputText = '';
  constructor() { }

  ngOnInit() {
  }

}
