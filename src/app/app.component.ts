import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash-es';
// import { formConfigCurriculumCourse, formConfigProfessionalDevelopmentCourse, fullFormConfig} from './formConfig';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import {tap, switchMap, delay, distinctUntilChanged} from 'rxjs/operators';
import {of, merge } from 'rxjs';
import { map, forEach } from 'lodash-es';
import { timer } from './timerConfig';
// import { formConfigProfessionalDevelopmentCourse } from './formConfig copy';
import { cbseFW } from './ekstep-framework'

const fK12 = {
  'id': 'api.framework.read',
  'ver': '1.0',
  'ts': '2021-03-23T12:50:57.800Z',
  'params': {
      'resmsgid': '69ba2080-8bd6-11eb-b139-bf6450d03cca',
      'msgid': '69b84bc0-8bd6-11eb-8eca-f974a0cf1199',
      'status': 'successful',
      'err': null,
      'errmsg': null
  },
  'responseCode': 'OK',
  'result': {
      'framework': {
          'identifier': 'K-12',
          'code': 'K-12',
          'name': 'K-12',
          'description': 'K-12',
          'categories': [
              {
                  'identifier': 'k-12_medium',
                  'code': 'medium',
                  'terms': [
                      {
                          'identifier': 'k-12_medium_hindi',
                          'code': 'hindi',
                          'translations': null,
                          'name': 'Hindi',
                          'description': 'hindi',
                          'index': 1,
                          'category': 'medium',
                          'status': 'Live'
                      },
                      {
                          'identifier': 'k-12_medium_english',
                          'code': 'english',
                          'translations': null,
                          'name': 'English',
                          'description': 'english',
                          'index': 2,
                          'category': 'medium',
                          'status': 'Live'
                      }
                  ],
                  'translations': null,
                  'name': 'Medium',
                  'description': 'Medium',
                  'index': 1,
                  'status': 'Live'
              },
              {
                  'identifier': 'k-12_gradelevel',
                  'code': 'gradeLevel',
                  'terms': [
                      {
                          'identifier': 'k-12_gradelevel_class1',
                          'code': 'class1',
                          'translations': null,
                          'name': 'Class1',
                          'description': 'class1',
                          'index': 1,
                          'category': 'gradeLevel',
                          'status': 'Live'
                      },
                      {
                          'identifier': 'k-12_gradelevel_class2',
                          'code': 'class2',
                          'translations': null,
                          'name': 'Class2',
                          'description': 'class2',
                          'index': 2,
                          'category': 'gradeLevel',
                          'status': 'Live'
                      }
                  ],
                  'translations': null,
                  'name': 'GradeLevel',
                  'description': 'gradeLevel',
                  'index': 2,
                  'status': 'Live'
              },
              {
                  'identifier': 'k-12_subject',
                  'code': 'subject',
                  'terms': [
                      {
                          'identifier': 'k-12_subject_hindi',
                          'code': 'hindi',
                          'translations': null,
                          'name': 'Hindi',
                          'description': 'hindi',
                          'index': 1,
                          'category': 'subject',
                          'status': 'Live'
                      },
                      {
                          'identifier': 'k-12_subject_english',
                          'code': 'english',
                          'translations': null,
                          'name': 'English',
                          'description': 'english',
                          'index': 2,
                          'category': 'subject',
                          'status': 'Live'
                      }
                  ],
                  'translations': null,
                  'name': 'Subject',
                  'description': 'subject',
                  'index': 3,
                  'status': 'Live'
              },
              {
                  'identifier': 'k-12_topic',
                  'code': 'topic',
                  'terms': [
                      {
                          'identifier': 'k-12_topic_toicp1',
                          'code': 'toicp1',
                          'translations': null,
                          'name': 'Topic1',
                          'description': 'topic1',
                          'index': 1,
                          'category': 'topic',
                          'status': 'Live'
                      },
                      {
                          'identifier': 'k-12_topic_toicp2',
                          'code': 'toicp2',
                          'translations': null,
                          'name': 'Topic2',
                          'description': 'topic2',
                          'index': 2,
                          'category': 'topic',
                          'status': 'Live'
                      }
                  ],
                  'translations': null,
                  'name': 'Topic',
                  'description': 'topic',
                  'index': 4,
                  'status': 'Live'
              }
          ],
          'type': 'K-12',
          'objectType': 'Framework'
      }
  }
};

const cbsetpd = {
  'framework': {
      'identifier': 'cbse-tpd',
      'code': 'cbse-tpd',
      'name': 'CBSE-TPD',
      'description': 'TPD framework created for CBSE channel',
      'categories': [
          {
              'identifier': 'cbse-tpd_subject',
              'code': 'subject',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_subject_hindi',
                      'code': 'hindi',
                      'translations': null,
                      'name': 'Hindi',
                      'description': 'Hindi',
                      'index': 1,
                      'category': 'subject',
                      'status': 'Live'
                  },
                  {
                      'identifier': 'cbse-tpd_subject_english',
                      'code': 'english',
                      'translations': null,
                      'name': 'English',
                      'description': 'Class2',
                      'index': 2,
                      'category': 'subject',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Subject',
              'description': 'Subject',
              'index': 1,
              'status': 'Live'
          },
          {
              'identifier': 'cbse-tpd_medium',
              'code': 'medium',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_medium_english',
                      'code': 'english',
                      'translations': null,
                      'name': 'English',
                      'description': 'English',
                      'index': 1,
                      'category': 'medium',
                      'status': 'Live'
                  },
                  {
                      'identifier': 'cbse-tpd_medium_hindi',
                      'code': 'hindi',
                      'translations': null,
                      'name': 'Hindi',
                      'description': 'Hindi',
                      'index': 2,
                      'category': 'medium',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Medium',
              'description': 'Medium',
              'index': 2,
              'status': 'Live'
          },
          {
              'identifier': 'cbse-tpd_gradelevel',
              'code': 'gradeLevel',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_gradelevel_class1',
                      'code': 'class1',
                      'translations': null,
                      'name': 'Class1',
                      'description': 'Class1',
                      'index': 1,
                      'category': 'gradeLevel',
                      'status': 'Live'
                  },
                  {
                      'identifier': 'cbse-tpd_gradelevel_class2',
                      'code': 'class2',
                      'translations': null,
                      'name': 'Class2',
                      'description': 'Class2',
                      'index': 2,
                      'category': 'gradeLevel',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Classes',
              'description': 'Classes',
              'index': 3,
              'status': 'Live'
          },
          {
              'identifier': 'cbse-tpd_board',
              'code': 'board',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_board_cbse',
                      'code': 'cbse',
                      'translations': null,
                      'name': 'CBSE',
                      'description': 'CBSE',
                      'index': 1,
                      'category': 'board',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Board',
              'description': 'Board',
              'index': 4,
              'status': 'Live'
          },
          {
              'identifier': 'cbse-tpd_topic',
              'code': 'topic',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_topic_science',
                      'code': 'science',
                      'translations': null,
                      'name': 'Science',
                      'description': 'Science',
                      'index': 1,
                      'category': 'topic',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Topics',
              'description': 'Topics',
              'index': 5,
              'status': 'Live'
          },
          {
              'identifier': 'cbse-tpd_purpose',
              'code': 'purpose',
              'terms': [
                  {
                      'identifier': 'cbse-tpd_purpose_broad_overview',
                      'code': 'broad_overview',
                      'translations': null,
                      'name': 'Broad Overview',
                      'description': 'Broad Overview',
                      'index': 1,
                      'category': 'purpose',
                      'status': 'Live'
                  }
              ],
              'translations': null,
              'name': 'Purpose',
              'description': 'Purpose',
              'index': 6,
              'status': 'Live'
          }
      ],
      'type': 'K-12',
      'objectType': 'Framework'
  }
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: any;
  config: any  = forEach(timer, section => {
    forEach(section.fields, field => {
      if (_.includes(['framework'], field.code)) {
        field.options = this.getFramework;
    }
    return field;
    });
  });

  // config: any;

 ngOnInit() {
  //  this.config = formConfigCurriculumCourse;
 }

 getFramework(control, depends: FormControl[], formGroup: FormGroup, loading, loaded, cb) {
  const response =  control.valueChanges.pipe(
    delay(2000),
    switchMap((value: any) => {
      if (value[0] === 'K-12') {
        return of(fK12.result);
      } else if (value[0] === 'cbse-tpd') {
        return of(cbsetpd);
      } else if (value[0] === 'ekstep_ncert_k-12') {
        return of(cbseFW);
      } else {
        return of(null);
      }
    })
  );
  return response;
}

  output(event) {
      // console.log(event);
  }

  valueChanges(event) {
    console.log(event);
    this.result = event;
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


  populateFrameworkDependantFields(control, depends: FormControl[], formGroup: FormGroup, loading, loaded, instance) {

    const response = merge(..._.map(depends, depend => depend.valueChanges)).pipe(
      switchMap((value: any) => {
        if (value) {
          return of(fK12.result.framework);
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

}
