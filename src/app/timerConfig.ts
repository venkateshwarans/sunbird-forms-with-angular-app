export const timer = [
  {
    'name': '',
    fields: [
      {
        'code': 'ShowTimer',
        'visible': false,
        'editable': true,
        'dataType': 'list',
        'depends': ['maxTime'],
        'name': 'Show Timer',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required'
        },
        'description': 'Show Timer',
        'inputType': 'checkbox',
        'label': 'Show Timer',
        'placeholder': 'Show Timer',
        'required': false,
        'validations': [
          {
            'type': 'required',
            'message': 'Keyword is required'
          }
        ],
      },
      {
        'code': 'maxTime',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'name': 'MaxTimer',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required'
        },
        'description': 'MaxTime for the content',
        'inputType': 'timer',
        'label': 'Max timer',
        'placeholder': 'HH:MM:SS',
        'required': true,
        'validations': [
          {
            'type': 'required',
            'message': 'Maxtime is required'
          },
          {
            'type': 'time',
            'message': 'Please enter in hh:mm:ss',
            'value': 'mm:ss'
          },
          {
            'type': 'max',
            'value': '59:59', // specify in seconds
            'message': 'max time should be less than 05:59:59'
          },
        ]
      },
      {
        'code': 'warningTime',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'name': 'Warning Time',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required',
        },
        'depends': ['maxTime'],
        'description': 'warning for the content',
        'inputType': 'timer',
        'label': 'Warning Time',
        'placeholder': 'mm:ss',
        'required': true,
        'validations': [
          {
            'type': 'time',
            'message': 'Please enter hh:mm:ss',
            'value': 'mm:ss'
          },
          {
            'type': 'compare',
            'criteria': {
              '<=': ['maxTime'],
            },
            'message': 'warning time should be less than max timer'
          }
        ]
      }
    ]
  }
];
