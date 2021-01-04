import { Component } from '@angular/core';
import {tap, switchMap, startWith, pairwise} from 'rxjs/operators';
import {of, merge, from, concat, Observable} from 'rxjs';
import { map } from 'lodash-es';
import * as _ from 'lodash-es';
import { ObjectDifference } from './helpers/helpers';
import { formConfig, formConfigWithClass, formConfigWithSection } from './formConfig';
import { cr } from '@angular/core/src/render3';
import { FormControl } from '@angular/forms';
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
      // console.log(event);
  }

  onChange(control, depends: FormControl[], formGroup, loading, loaded) {
    const instance = this;
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
        } else if (value.includes('karnataka')) {
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

