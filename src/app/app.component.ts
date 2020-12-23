import { Component } from '@angular/core';
import {tap, switchMap} from 'rxjs/operators';
import {of, merge, from} from 'rxjs';
import { map } from 'lodash-es';


import { formConfig, formConfigWithClass, formConfigWithSection } from './formConfig';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // config = [
    // {
    //     'code': 'contentname',
    //     'type': 'input',
    //     'context': null,
    //     'templateOptions': {
    //         'placeHolder': 'Enter Content Name'
    //     },
    //     'validations': [
    //         {
    //             'type': 'required'
    //         }
    //     ]
    // },
    // {
    //     'code': 'details',
    //     'type': 'textarea',
    //     'context': null,
    //     'templateOptions': {
    //         'label': 'Tell us more about the problem you faced',
    //         'placeHolder': 'Enter Details'
    //     },
    //     'validations': [
    //         {
    //             'type': 'maxLength',
    //             'value': 1000
    //         }
    //     ]
    // },
  //   {
  //       'code': 'name',
  //       'visible': true,
  //       'editable': true,
  //       'dataType': 'text',
  //       'renderingHints': {},
  //       'name': 'Name',
  //       'description': 'Name of the content',
  //       'inputType': 'text',
  //       'index': 1,
  //       'label': 'Name',
  //       'placeholder': 'Name',
  //       'required': true,
  //       'validation': [
  //           {
  //               'type': 'max',
  //               'message': 'Input is Exceded',
  //               'value': '120'
  //           }
  //       ]
  //   },
  //   {
  //       'code': 'description',
  //       'visible': true,
  //       'editable': true,
  //       'dataType': 'text',
  //       'renderingHints': {},
  //       'name': 'Description',
  //       'index': 2,
  //       'description': 'Brief description',
  //       'inputType': 'textarea',
  //       'label': 'Description',
  //       'placeholder': 'Description',
  //       'required': false,
  //       'validation': [
  //           {
  //               'type': 'max',
  //               'message': 'Input is Exceded',
  //               'value': '1000'
  //           }
  //       ]
  //   }, {
  //     'code': 'description',
  //     'visible': true,
  //     'editable': true,
  //     'dataType': 'text',
  //     'renderingHints': {},
  //     'name': 'Description',
  //     'index': 2,
  //     'description': 'Brief description',
  //     'inputType': 'textarea',
  //     'label': 'Description',
  //     'placeholder': 'Description',
  //     'required': false,
  //     'validation': [
  //         {
  //             'type': 'max',
  //             'message': 'Input is Exceded',
  //             'value': '1000'
  //         }
  //     ]
  // },
//  {
//     'code': 'board',
//     'type': 'select',
//     'label': 'Board',
//     'inputType': 'select',
//     'options': [{
//       'value': 'andhra',
//       'label': 'andhra'
//     },
//     {
//       'value': 'karnataka',
//       'label': 'karnataka'
//     }
//     ],
//     'templateOptions': {
//       'placeHolder': 'Select Board',
//       'multiple': false,
//       'hidden': false,
//     },
//     'validations': [{
//       'type': 'required'
//     }]
//   }, {
//     'type': 'select',
//     'inputType': 'select',
//     'code': 'medium',
//     'label': 'Medium',
//     'context': 'board',
//     'options': {
//       'andhra': [{
//           'value': 'andhra1',
//           'label': 'andhra1'
//         },
//         {
//           'value': 'andhra2',
//           'label': 'andhra2'
//         }
//       ],
//       'karnataka': [{
//           'value': 'karnataka1',
//           'label': 'karnataka1'
//         },
//         {
//           'value': 'karnataka2',
//           'label': 'karnataka2'
//         }
//       ],
//     },
//     'templateOptions': {
//       'placeHolder': 'Select Category',
//       'multiple': false,
//     },
//     'validations': [{
//       'type': 'required'
//     }]
//   }, {
//     'code': 'subject',
//     'visible': true,
//     'context': 'medium',
//     'editable': true,
//     'dataType': 'text',
//     'renderingHints': {},
//     'name': 'subject',
//     'index': 2,
//     'description': 'Subject',
//     'inputType': 'select',
//     'label': 'Subject',
//     'placeholder': 'Subject',
//     'required': false,
//     'options': [
//       'subject1', 'subject2', 'subject3', 'subject4',
//     ],
//     'validation': [
//         {
//             'type': 'max',
//             'message': 'Input is Exceded',
//             'value': '1000'
//         }
//     ]
//   },
//   {
//     'code': 'gradeLevel',
//     'visible': true,
//     'association': true,
//     'context': 'subject',
//     'editable': true,
//     'dataType': 'text',
//     'renderingHints': {},
//     'name': 'subject',
//     'index': 2,
//     'description': 'Class',
//     'inputType': 'select',
//     'label': 'Class',
//     'placeholder': 'Class',
//     'required': false,
//     'options': [
//       {
//         'value': 'class1',
//         'label': 'class1',
//         'association': 'subject1'
//       },
//       {
//         'value': 'class2',
//         'label': 'class2',
//         'association': 'subject1'
//       },
//       {
//         'value': 'class3',
//         'label': 'class3',
//         'association': 'subject2'
//       }, {
//         'value': 'class4',
//         'label': 'class4',
//         'association': 'subject2'
//       }
//     ],
//     'validation': [
//         {
//             'type': 'max',
//             'message': 'Input is Exceded',
//             'value': '1000'
//         }
//     ]
//   }
// ];

// 'subject2', 'subject3', 'subject4',


  config = map(formConfigWithClass, field => {
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

  onChange(control, depends, loading, loaded) {

    const response = merge(...map(depends, depend => depend.valueChanges)).pipe(

      switchMap((value) => {
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

}

