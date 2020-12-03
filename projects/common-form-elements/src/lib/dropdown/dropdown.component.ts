import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject, Subscription} from 'rxjs';
import {tap} from 'rxjs/operators';


@Component({

  selector: 'sb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() options: any = [];
  @Input() disabled?: boolean;
  @Input() context?: FormControl;
  @Input() formControlRef?: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
