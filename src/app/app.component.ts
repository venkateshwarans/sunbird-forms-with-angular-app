import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
import { formConfigCurriculumCourse, formConfigProfessionalDevelopmentCourse, fullFormConfig} from './formConfig';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  config: any;


 ngOnInit() {
   this.config = formConfigCurriculumCourse;
 }

  output(event) {
      console.log(event);
  }

  valueChanges(event) {
    console.log(event);
  }


  switchConfig(number) {
    switch (number) {
      case 'one':
        this.config = formConfigCurriculumCourse;
        break;
      case 'two':
        this.config = formConfigProfessionalDevelopmentCourse;
        break;
        case 'three':
          this.config = fullFormConfig;
          break;
      default:
        break;
    }
  }

}

