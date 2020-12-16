import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sb-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.css']
})
export class FormWrapperComponent implements OnInit {
  @Input() config;
  @Output() initialize = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  output(data) {
    this.initialize.emit(data);
  }

}
