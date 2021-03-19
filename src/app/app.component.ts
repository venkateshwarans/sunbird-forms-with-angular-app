import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
// import { formConfigCurriculumCourse, formConfigProfessionalDevelopmentCourse, fullFormConfig} from './formConfig';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import {tap, switchMap} from 'rxjs/operators';
import {of, merge } from 'rxjs';
import { map } from 'lodash-es';
import { timer } from './timerConfig';
import { formConfigProfessionalDevelopmentCourse } from './formConfig copy';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  config: any  = map(timer[0].fields, field => {
    if (field.code === 'ShowTimer') {
        field.options = this.showTimer;
    }
    return field;
  });


 ngOnInit() {
  //  this.config = timer;
 }

  output(event) {
      console.log(event);
  }

  valueChanges(event) {
    console.log(event);
  }


  showTimer(control, depends: FormControl[], formGroup: FormGroup, loading, loaded) {
    const oldValue = {};
    const response = merge(..._.map(depends, depend => depend.valueChanges)).pipe(
      switchMap((value: any) => {
        const isDependsInvalid = _.includes(_.map(depends, depend => depend.invalid), true);
        if (!isDependsInvalid) {
          return of(true);
        } else {
          return of(false);
        }
      })
    );
    return response;
  }

  validateWarningTime(control, depends: FormControl[], formGroup: FormGroup, loading, loaded) {
    const response = merge(..._.map(depends, depend => depend.valueChanges)).pipe(
      switchMap((value: any) => {
        const maxTimer = value;
        if (maxTimer) {
          return of(maxTimer);
        } else {
          return of(null);
        }
      })
    );
    return response;
  }


  compareMaxTimeWarningTime(dependsValue, formGroup, control: AbstractControl): ValidationErrors | null {
    const maxVal = dependsValue;
    const minVal = control.value;
    console.log(minVal > maxVal);
    return minVal >= maxVal ? { function: true} : null;
  }

  // switchConfig(number) {
  //   switch (number) {
  //     case 'one':
  //       this.config = formConfigCurriculumCourse;
  //       break;
  //     case 'two':
  //       this.config = formConfigProfessionalDevelopmentCourse;
  //       break;
  //       case 'three':
  //         this.config = fullFormConfig;
  //         break;
  //     default:
  //       break;
  //   }
  // }


}

