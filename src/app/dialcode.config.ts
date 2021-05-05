export const fullFormConfig = [
  {
    'name': 'First Section',
    'fields': [
      {
        'code': 'dialcodeRequired',
        'dataType': 'text',
        'description': 'QR CODE REQUIRED',
        'editable': true,
        'default': 'Yes',
        'index': 5,
        'inputType': 'radio',
        'label': 'QR CODE REQUIRED',
        'name': 'dialcodeRequired',
        'placeholder': 'QR CODE REQUIRED',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'range' : ['Yes', 'No'],
        'required': false,
        'visible': true
      },
      {
        'code': 'dialcodes',
        'depends': ['dialcodeRequired'],
        'dataType': 'list',
        'description': 'QR CODES',
        'editable': true,
        'inputType': 'dialcode',
        'label': 'QR CODES',
        'name': 'dialcode',
        'placeholder': 'Enter code here',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required'
        },
        'required': true,
        'visible': true,
        'validations': [
          {
            'type': 'minLength',
            'value': '5',
            'message': ''
          },
          {
            'type': 'maxLength',
            'value': '10',
            'message': ''
          }
        ],
      },
      {
        'code': 'name',
        'dataType': 'text',
        'description': 'Name of the content',
        'editable': true,
        'inputType': 'text',
        'label': 'Name',
        'name': 'Name',
        'placeholder': 'Name',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required'
        },
        'required': true,
        'visible': true,
        'validations': [
          {
            'type': 'max',
            'value': '120',
            'message': 'Input is Exceeded'
          },
          {
            'type': 'required',
            'message': 'Title is required'
          }
        ],
        'default': ''
      },
      {
        'code': 'description',
        'dataType': 'text',
        'description': 'Description of the content',
        'editable': true,
        'inputType': 'textarea',
        'label': 'Description',
        'name': 'Description',
        'placeholder': 'Description',
        'renderingHints': {
          'class': 'sb-g-col-lg-1 required'
        },
        'required': true,
        'visible': true,
        'validations': [
          {
            'type': 'max',
            'value': '120',
            'message': 'Input is Exceeded'
          },
          {
            'type': 'required',
            'message': 'Title is required'
          }
        ],
        'default': ''
      },
      {
        'code': 'keywords',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'name': 'Keywords',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'index': 3,
        'description': 'Keywords for the content',
        'inputType': 'keywords',
        'label': 'keywords',
        'placeholder': 'Enter Keywords',
        'required': false,
        'validations': [
          {
            'type': 'required',
            'message': 'Keyword is required'
          }
        ]
      }
    ]
  }
];
