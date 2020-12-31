import { Component } from '@angular/core';
import {tap, switchMap} from 'rxjs/operators';
import {of, merge, from} from 'rxjs';
import { map } from 'lodash-es';
import * as _ from 'lodash-es';

import { formConfig, formConfigWithClass, formConfigWithSection } from './formConfig';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  config = map(formConfig, field => {
    if (field.code === 'additionalCategories') {
        field.range = this.onChange;
    }
    if (field.code === 'licenseTerms') {
      field.range = this.loadLicenseTerms;
    }
      return field;
  });


  output(event) {
      console.log(event);
  }

  onChange(control, depends, formGroup, loading, loaded) {

    const response = merge(...map(depends, depend => depend.valueChanges)).pipe(

      switchMap((value) => {
        console.log(formGroup.value);
        if (value === 'andhra') {
          return of([{
              label: 'andhra1',
              value: 'andhra1'
            },
            {
              label: 'andhra2',
              value: 'andhra2'
            }
          ]);
        } else if (value === 'karnataka') {
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
    return from(fetch('https://api.jsonbin.io/b/5fe1970847ed0861b36a715c', {
      headers: {
        'secret-key': '$2b$10$0Z5ZDRd9x3Y8dDRsO4fKJO.GbDf/QCamiaNtBmD51lPoBMNUP6F7a'
      }
    })).pipe(switchMap(res => {
      loaded();
      return res.json();
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

