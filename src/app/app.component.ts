import { Component } from '@angular/core';
import {switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  config = [
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
    {
        'code': 'name',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'Name',
        'description': 'Name of the content',
        'inputType': 'text',
        'index': 1,
        'label': 'Name',
        'placeholder': 'Name',
        'required': true,
        'validation': [
            {
                'type': 'max',
                'message': 'Input is Exceded',
                'value': '120'
            }
        ]
    },
    {
        'code': 'description',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'Description',
        'index': 2,
        'description': 'Brief description',
        'inputType': 'textarea',
        'label': 'Description',
        'placeholder': 'Description',
        'required': false,
        'validation': [
            {
                'type': 'max',
                'message': 'Input is Exceded',
                'value': '1000'
            }
        ]
    }, {
      'code': 'description',
      'visible': true,
      'editable': true,
      'dataType': 'text',
      'renderingHints': {},
      'name': 'Description',
      'index': 2,
      'description': 'Brief description',
      'inputType': 'textarea',
      'label': 'Description',
      'placeholder': 'Description',
      'required': false,
      'validation': [
          {
              'type': 'max',
              'message': 'Input is Exceded',
              'value': '1000'
          }
      ]
  }, {
    'code': 'board',
    'type': 'select',
    'label': 'Board',
    'inputType': 'select',
    'templateOptions': {
      'placeHolder': 'Select Board',
      'multiple': false,
      'hidden': false,
      'options': [{
          'value': 'andhra',
          'label': 'andhra'
        },
        {
          'value': 'karnataka',
          'label': 'karnataka'
        }
      ]
    },
    'validations': [{
      'type': 'required'
    }]
  }, {
    'type': 'select',
    'inputType': 'select',
    'code': 'medium',
    'label': 'Medium',
    'context': 'board',
    'templateOptions': {
      'placeHolder': 'Select Category',
      'multiple': false,
      'options': {
        'andhra': [{
            'value': 'andhra1',
            'label': 'andhra1'
          },
          {
            'value': 'andhra2',
            'label': 'andhra2'
          }
        ],
        'karnataka': [{
            'value': 'karnataka1',
            'label': 'karnataka1'
          },
          {
            'value': 'karnataka2',
            'label': 'karnataka2'
          }
        ],
      }
    },
    'validations': [{
      'type': 'required'
    }]
  }];


    output(event) {
        console.log(event);
    }


}
