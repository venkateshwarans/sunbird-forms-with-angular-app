import { NgControl } from '@angular/forms';
import { Directive, Input} from '@angular/core';

@Directive({
  selector: '[libDisableControl]'
})


export class DisableControlDirective {

  @Input() set libDisableControl( condition: boolean ) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }

  constructor( private ngControl: NgControl ) {
  }

}
