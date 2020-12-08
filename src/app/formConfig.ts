export const formConfig = [
  {
    'code': 'name',
    'dataType': 'text',
    'description': 'Name of the content',
    'editable': true,
    'inputType': 'text',
    'label': 'Name',
    'name': 'Name',
    'placeholder': 'Name',
    'renderingHints': {},
    'required': true,
    'visible': true,
    'validation': [{
      'type': 'max',
      'value': '120',
      'message': 'Input is Exceded'
    }]
  },
  {
    'code': 'description',
    'dataType': 'text',
    'description': 'Brief description',
    'editable': true,
    'inputType': 'textarea',
    'label': 'Description',
    'name': 'Description',
    'placeholder': 'Description',
    'renderingHints': {},
    'required': false,
    'visible': true,
    'validation': [{
      'type': 'max',
      'value': '1000',
      'message': 'Input is Exceded'
    }]
  },
  {
    'code': 'primaryCategory',
    'dataType': 'text',
    'description': 'Collection Type',
    'editable': false,
    'index': 0,
    'inputType': 'text',
    'label': 'Collection Type',
    'name': 'Collection Type',
    'placeholder': '',
    'required': true,
    'visible': true
  },
  {
    'code': 'board',
    'dataType': 'text',
    'depends': [
        'gradeLevel',
        'medium',
        'subject',
        'topic'
    ],
    'description': 'Board',
    'editable': true,
    'index': 2,
    'inputType': 'select',
    'label': 'Board/Syllabus',
    'name': 'Board/Syllabus',
    'placeholder': 'Select Board/Syllabus',
    'renderingHints': {},
    'required': true,
    'visible': true,
    'type': 'select',
    'templateOptions': {
      'placeHolder': 'Select Board',
      'multiple': false,
      'hidden': false,
    },
    'validations': [{
      'type': 'required'
    }],
    'identifier': 'ekstep_ncert_k-12_board',
    'terms': [
      {
      'associations': [
        {
          'identifier': 'ekstep_ncert_k-12_medium_sanskrit',
          'code': 'sanskrit',
          'translations': null,
          'name': 'Sanskrit',
          'description': 'Sanskrit',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_medium_urdu',
          'code': 'urdu',
          'translations': null,
          'name': 'Urdu',
          'description': 'Urdu',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_medium_hindi',
          'code': 'hindi',
          'translations': null,
          'name': 'Hindi',
          'description': 'Hindi',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_medium_english',
          'code': 'english',
          'translations': null,
          'name': 'English',
          'description': 'English',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class1',
          'code': 'class1',
          'translations': null,
          'name': 'Class 1',
          'description': 'Class 1',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class2',
          'code': 'class2',
          'translations': null,
          'name': 'Class 2',
          'description': 'Class 2',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class3',
          'code': 'class3',
          'translations': null,
          'name': 'Class 3',
          'description': 'Class 3',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class4',
          'code': 'class4',
          'translations': null,
          'name': 'Class 4',
          'description': 'Class 4',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class5',
          'code': 'class5',
          'translations': null,
          'name': 'Class 5',
          'description': 'Class 5',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class6',
          'code': 'class6',
          'translations': null,
          'name': 'Class 6',
          'description': 'Class 6',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class7',
          'code': 'class7',
          'translations': null,
          'name': 'Class 7',
          'description': 'Class 7',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class8',
          'code': 'class8',
          'translations': null,
          'name': 'Class 8',
          'description': 'Class 8',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class9',
          'code': 'class9',
          'translations': null,
          'name': 'Class 9',
          'description': 'Class 9',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        }
      ],
      'identifier': 'ekstep_ncert_k-12_board_cbse',
      'code': 'cbse',
      'translations': null,
      'name': 'CBSE',
      'description': 'CBSE',
      'index': 1,
      'category': 'board',
      'status': 'Live'
    },
    {
      'associations': [
        {
          'identifier': 'ekstep_ncert_k-12_medium_hindi',
          'code': 'hindi',
          'translations': null,
          'name': 'Hindi',
          'description': 'Hindi',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_medium_english',
          'code': 'english',
          'translations': null,
          'name': 'English',
          'description': 'English',
          'index': 0,
          'category': 'medium',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class6',
          'code': 'class6',
          'translations': null,
          'name': 'Class 6',
          'description': 'Class 6',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class7',
          'code': 'class7',
          'translations': null,
          'name': 'Class 7',
          'description': 'Class 7',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class8',
          'code': 'class8',
          'translations': null,
          'name': 'Class 8',
          'description': 'Class 8',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class9',
          'code': 'class9',
          'translations': null,
          'name': 'Class 9',
          'description': 'Class 9',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class10',
          'code': 'class10',
          'translations': null,
          'name': 'Class 10',
          'description': 'Class 10',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class11',
          'code': 'class11',
          'translations': null,
          'name': 'Class 11',
          'description': 'Class 11',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
        {
          'identifier': 'ekstep_ncert_k-12_gradelevel_class12',
          'code': 'class12',
          'translations': null,
          'name': 'Class 12',
          'description': 'Class 12',
          'index': 0,
          'category': 'gradeLevel',
          'status': 'Live'
        },
      ],
      'identifier': 'ekstep_ncert_k-12_board_ncert',
      'code': 'ncert',
      'translations': null,
      'name': 'NCERT',
      'description': 'NCERT',
      'index': 1,
      'category': 'board',
      'status': 'Live'
    }
  ],
    'translations': null,
    'status': 'Live'
  },
  {
    'code': 'medium',
    'dataType': 'list',
    'description': '',
    'editable': true,
    'index': 3,
    'depends': [
        'gradeLevel',
        'subject',
        'topic'
    ],
    'inputType': 'select',
    'label': 'medium',
    'name': 'medium',
    'placeholder': 'Select Medium',
    'renderingHints': {},
    'required': true,
    'visible': true,
    'identifier': 'ekstep_ncert_k-12_medium',
    'terms': [
      {
        'associations': [
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class1',
            'code': 'class1',
            'translations': null,
            'name': 'Class 1',
            'description': 'Class 1',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class2',
            'name': 'Class 2',
            'status': 'Live',
            'code': 'class2',
            'description': 'Class 2',
            'translations': null,
            'index': 0,
            'category': 'gradeLevel'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class3',
            'code': 'class3',
            'translations': null,
            'name': 'Class 3',
            'description': 'Class 3',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          }
        ],
        'identifier': 'ekstep_ncert_k-12_medium_english',
        'code': 'english',
        'translations': null,
        'name': 'English',
        'description': 'English',
        'index': 1,
        'category': 'medium',
        'status': 'Live'
      },
      {
        'associations': [
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class4',
            'code': 'class4',
            'translations': null,
            'name': 'Class 4',
            'description': 'Class 4',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class5',
            'code': 'class5',
            'translations': null,
            'name': 'Class 5',
            'description': 'Class 5',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class6',
            'code': 'class6',
            'translations': null,
            'name': 'Class 6',
            'description': 'Class 6',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          }
        ],
        'identifier': 'ekstep_ncert_k-12_medium_hindi',
        'code': 'hindi',
        'translations': null,
        'name': 'Hindi',
        'description': 'Hindi',
        'index': 2,
        'category': 'medium',
        'status': 'Live'
      },
      {
        'associations': [
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class7',
            'code': 'class7',
            'translations': null,
            'name': 'Class 7',
            'description': 'Class 7',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class8',
            'code': 'class8',
            'translations': null,
            'name': 'Class 8',
            'description': 'Class 8',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class9',
            'code': 'class9',
            'translations': null,
            'name': 'Class 9',
            'description': 'Class 9',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
        ],
        'identifier': 'ekstep_ncert_k-12_medium_sanskrit',
        'code': 'sanskrit',
        'translations': null,
        'name': 'Sanskrit',
        'description': 'Sanskrit',
        'index': 12,
        'category': 'medium',
        'status': 'Live'
      },
      {
        'associations': [
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class10',
            'code': 'class10',
            'translations': null,
            'name': 'Class 10',
            'description': 'Class 10',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class11',
            'code': 'class11',
            'translations': null,
            'name': 'Class 11',
            'description': 'Class 11',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          },
          {
            'identifier': 'ekstep_ncert_k-12_gradelevel_class12',
            'code': 'class12',
            'translations': null,
            'name': 'Class 12',
            'description': 'Class 12',
            'index': 0,
            'category': 'gradeLevel',
            'status': 'Live'
          }
        ],
        'identifier': 'ekstep_ncert_k-12_medium_urdu',
        'code': 'urdu',
        'translations': null,
        'name': 'Urdu',
        'description': 'Urdu',
        'index': 13,
        'category': 'medium',
        'status': 'Live'
      }
    ],
    'translations': null,
    'association': true,
    'status': 'Live',
    'type': 'select',
    'templateOptions': {
      'placeHolder': 'Select Category',
      'multiple': false,
    },
    'validations': [{
      'type': 'required'
    }]
  },
  {
    'code': 'gradeLevel',
    'dataType': 'list',
    'description': 'Class',
    'editable': true,
    'index': 4,
    'depends': [
        'subject',
        'topic'
    ],
    'inputType': 'select',
    'label': 'Class',
    'name': 'Class',
    'placeholder': 'Select Class',
    'renderingHints': {},
    'required': true,
    'visible': true,
    'identifier': 'ekstep_ncert_k-12_gradelevel',
    'terms': [
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class1',
        'code': 'class1',
        'translations': null,
        'name': 'Class 1',
        'description': 'Class 1',
        'index': 1,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class2',
        'code': 'class2',
        'translations': null,
        'name': 'Class 2',
        'description': 'Class 2',
        'index': 2,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class3',
        'code': 'class3',
        'translations': null,
        'name': 'Class 3',
        'description': 'Class 3',
        'index': 3,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class4',
        'code': 'class4',
        'translations': null,
        'name': 'Class 4',
        'description': 'Class 4',
        'index': 4,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class5',
        'code': 'class5',
        'translations': null,
        'name': 'Class 5',
        'description': 'Class 5',
        'index': 5,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class6',
        'code': 'class6',
        'translations': null,
        'name': 'Class 6',
        'description': 'Class 6',
        'index': 6,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class7',
        'code': 'class7',
        'translations': null,
        'name': 'Class 7',
        'description': 'Class 7',
        'index': 7,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class8',
        'code': 'class8',
        'translations': null,
        'name': 'Class 8',
        'description': 'Class 8',
        'index': 8,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class9',
        'code': 'class9',
        'translations': null,
        'name': 'Class 9',
        'description': 'Class 9',
        'index': 9,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class10',
        'code': 'class10',
        'translations': null,
        'name': 'Class 10',
        'description': 'Class 10',
        'index': 10,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class11',
        'code': 'class11',
        'translations': null,
        'name': 'Class 11',
        'description': 'Class 11',
        'index': 11,
        'category': 'gradeLevel',
        'status': 'Live'
      },
      {
        'identifier': 'ekstep_ncert_k-12_gradelevel_class12',
        'code': 'class12',
        'translations': null,
        'name': 'Class 12',
        'description': 'Class 12',
        'index': 12,
        'category': 'gradeLevel',
        'status': 'Live'
      }
    ],
    'translations': null,
    'status': 'Live',
    'association': true,
    'validation': [{
      'type': 'max',
      'message': 'Input is Exceeded',
      'value': '1000'
    }]
  }
];
