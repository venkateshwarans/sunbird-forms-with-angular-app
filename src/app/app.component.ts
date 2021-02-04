import { Component, OnInit } from '@angular/core';
import {tap, switchMap, startWith, pairwise} from 'rxjs/operators';
import {of, merge, from, concat, Observable} from 'rxjs';
import { map } from 'lodash-es';
import * as _ from 'lodash-es';
import { ObjectDifference } from './helpers/helpers';
import { formConfig} from './formConfigSmall';
import { formConfigWithClass } from './formConfig';
import { formConfigWithSection } from './formConfigSection';
// import { formConfigFramework } from './formConfigFrameWork';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  // config = map(formConfig, field => {
  //   if (field.code === 'additionalCategories') {
  //       // field.range = this.onChange;
  //   }
  //   if (field.code === 'licenseTerms') {
  //     // field.range = this.loadLicenseTerms;
  //   }
  //   if (field.code === 'gradeLevel') {
  //     field.range = _.map(field.terms, r => {
  //       return {
  //         value: r.identifier,
  //         label: r.name
  //       };
  //     });
  //   }
  //   if (field.code === 'showQuestions') {
  //     field.range = _.range(1, 5);
  //   }
  //     return field;
  // });

  config: any


 ngOnInit() {
   this.config = formConfig;
 }

  output(event) {
      console.log(event);
  }

  valueChanges(event) {
    console.log(event);
  }

  onChange(control, depends: FormControl[], formGroup, loading, loaded) {
    let oldValue = {};
    _.forEach(depends, (depend, key) => {
      oldValue[key] = depend.value;
    });
    const response = merge(
      ...map(depends, (depend) => {
        return depend.valueChanges;
      })
      ).pipe(
      switchMap((value: any): any => {
        const newValue = {};
        _.forEach(depends, (depend, key) => {
          newValue[key] = depend.value;
        });
        console.log(ObjectDifference(oldValue, newValue));
        oldValue = newValue;
        if (_.includes(value, 'andhra')) {
          return of([{
              label: 'andhra1',
              value: 'andhra1'
            },
            {
              label: 'andhra2',
              value: 'andhra2'
            }
          ]);
        } else if (_.includes(value, 'karnataka')) {
          loading();
          return from(fetch('https://api.jsonbin.io/b/5fe1970847ed0861b36a715c', {
            headers: {
              'secret-key': '$2b$10$0Z5ZDRd9x3Y8dDRsO4fKJO.GbDf/QCamiaNtBmD51lPoBMNUP6F7a'
            }
          })).pipe(switchMap(res => {
            loaded();
            return res.json();
          }));
        }
      })
    );
    return response;
  }

  loadLicenseTerms (control, depends, loading, loaded) {
    return from(fetch('https://api.jsonbin.io/b/5fe1970847ed0861b36a715c/2', {
      headers: {
        'secret-key': '$2b$10$0Z5ZDRd9x3Y8dDRsO4fKJO.GbDf/QCamiaNtBmD51lPoBMNUP6F7a'
      }
    })).pipe(switchMap(async res => {
      loaded();
      const licenses = await res.json();
      try {
        return _.map(licenses, l => {
          return {
            value: l.name,
            label: l.name
          };
        });
      } catch (error) {
        console.log(error);
      }
    }));
  }

  switchConfig(number) {
    switch (number) {
      case 'one':
        this.config = formConfig;
        break;
      case 'two':
        this.config = formConfigWithClass;
        break;
      case 'three':
        this.config = formConfigWithSection;
        break;
      default:
        break;
    }
  }

}

