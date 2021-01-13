export const formConfigWithSection = [
  {
    'name': 'Content Details',
    'fields': [
      {
        'code': 'appicon',
        'visible': true,
        'editable': true,
        'dataType': 'url',
        'renderingHints': {
          'class': 'col-start-1 col-end-2'
        },
        'name': 'Icon',
        'description': 'Icon',
        'index': 0,
        'inputType': 'file',
        'label': 'Icon',
        'placeholder': 'Icon',
        'required': true
      },
      {
        'code': 'name',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {
          'class': 'col-span-2'
        },
        'name': 'Name',
        'description': 'Name of the content',
        'inputType': 'text',
        'index': 1,
        'label': 'Name',
        'placeholder': 'Name',
        'required': true,
        'validation': [{
          'type': 'max',
          'message': 'Input is Exceded',
          'value': '120'
        }],
      },
      {
        'code': 'description',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {
          'class': 'col-span-2'
        },
        'name': 'Description',
        'index': 2,
        'description': 'Brief description',
        'inputType': 'textarea',
        'label': 'Description',
        'placeholder': 'Description',
        'required': false,
        'validation': [{
          'type': 'max',
          'message': 'Input is Exceded',
          'value': '1000'
        }]
      },
      {
        'code': 'keywords',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'name': 'Keywords',
        'renderingHints': {
          'class': 'col-span-2'
        },
        'index': 3,
        'description': 'Keywords for the content',
        'inputType': 'keywords',
        'label': 'keywords',
        'placeholder': 'Enter Keywords',
        'required': false
      },
      {
        'code': 'primaryCategory',
        'dataType': 'text',
        'description': 'Collection Type',
        'editable': false,
        'index': 4,
        'renderingHints': {

        },
        'inputType': 'text',
        'label': 'Collection Type',
        'name': 'Collection Type',
        'placeholder': '',
        'required': true,
        'visible': true
      },
      {
        'code': 'additionalCategories',
        'dataType': 'list',
        'description': 'Additonal Category of the Content',
        'editable': true,
        'index': 5,
        'inputType': 'multiselect',
        'label': 'Additional Category',
        'name': 'Additional Category',
        'placeholder': 'Select Additional Category',
        'renderingHints': {

        },
        'range': [
          {
              'value': 'andhra',
              'label': 'andhra'
          },
          {
              'value': 'karnataka',
              'label': 'karnataka'
          }
      ],
        'required': false,
        'visible': true
      },
      {
        'code': 'year',
        'visible': true,
        'editable': false,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'Year',
        'description': '',
        'index': 12,
        'inputType': 'select',
        'label': 'Year',
        'placeholder': 'Select Year',
        'required': false
      },
      {
        'code': 'publisher',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'description': 'Publication',
        'index': 12,
        'label': 'Publisher',
        'required': false,
        'name': 'Publisher',
        'inputType': 'text',
        'placeholder': 'Publication',
        'validation': [{
          'type': 'max',
          'message': 'Input is exceded',
          'value': '180'
        }]
      },
      {
        'code': 'audience',
        'visible': true,
        'editable': false,
        'dataType': 'list',
        'renderingHints': {},
        'description': '',
        'index': 14,
        'range': ['Student', 'Teacher', 'Administrator'],
        'label': 'Audience',
        'required': false,
        'name': 'Audience',
        'inputType': 'multiselect',
        'placeholder': 'Select Audience'
      },
      {
        'code': 'attributions',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'renderingHints': {},
        'name': 'attribution',
        'description': 'Attributions',
        'index': 16,
        'inputType': 'text',
        'label': 'Attributions',
        'placeholder': 'Attributions',
        'required': false
      },
      {
        'code': 'author',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'Author',
        'description': 'Original Author',
        'index': 15,
        'inputType': 'text',
        'label': 'Original Author',
        'placeholder': 'Author',
        'required': false
      },
      {
        'code': 'copyright',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'Copyright',
        'description': 'Copyright',
        'index': 17,
        'inputType': 'text',
        'label': 'Copyright',
        'placeholder': 'Copyright',
        'required': false
      },
      {
        'code': 'copyrightYear',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'renderingHints': {},
        'description': 'Year of Creation',
        'index': 18,
        'label': 'Year of Creation',
        'required': true,
        'name': 'Year of Creation',
        'inputType': 'number',
        'placeholder': 'Enter Year of Creation',
        'validation': [{
          'type': 'min',
          'message': 'Maximum length of the year should be 4',
          'value': '4'
        }, {
          'type': 'max',
          'message': 'Minimum length of the year should be 4',
          'value': '4'
        }]
      },
      {
        'code': 'license',
        'visible': true,
        'editable': true,
        'dataType': 'text',
        'renderingHints': {},
        'name': 'license',
        'description': 'License of the content',
        'index': 19,
        'inputType': 'licenses',
        'label': 'license',
        'placeholder': 'license',
        'required': true
      }, {
        'code': 'licenseterms',
        'visible': true,
        'editable': true,
        'defaultValue': 'By creating any type of content (resources, books, courses etc.) on DIKSHA, you consent to publish it under the Creative Commons License Framework. Please choose the applicable creative commons license you wish to apply to your content.',
        'dataType': 'text',
        'renderingHints': {
          'value': {
            'video/x-youtube': 'By linking or uploading YouTube videos on DIKSHA, you consent to publishing it as per the terms of the YouTube video license. DIKSHA accepts only videos with YouTube Standard License or Creative Commons License.'
          },
        },
        'description': 'licenseterms',
        'index': 20,
        'label': 'License Terms',
        'required': false,
        'name': 'licenseterms',
        'inputType': 'label',
        'placeholder': 'license'
      }
    ]
  },
  {
    'name': 'Org Framework Deatils',
    'fields': [
      {
        'code': 'board',
        'dataType': 'text',
        'description': 'Board',
        'editable': true,
        'index': 7,
        'inputType': 'select',
        'label': 'Board/Syllabus',
        'name': 'Board/Syllabus',
        'placeholder': 'Select Board/Syllabus',
        'depends': [
          'gradeLevel',
          'medium',
          'subject',
          'topic'
        ],
        'renderingHints': {
          'class': 'col-span-2'
        },
        'required': true,
        'visible': true
      },
      {
        'code': 'medium',
        'visible': true,
        'depends': ['gradeLevel', 'subject', 'topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': '',
        'index': 7,
        'label': 'Medium',
        'required': true,
        'name': 'Medium',
        'inputType': 'multiselect',
        'placeholder': 'Select Medium'
      },
      {
        'code': 'gradeLevel',
        'visible': true,
        'depends': ['subject', 'topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': 'Class',
        'index': 8,
        'label': 'Class',
        'required': true,
        'name': 'Class',
        'inputType': 'multiselect',
        'placeholder': 'Select Class'
      },
      {
        'code': 'subject',
        'visible': true,
        'depends': ['topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': '',
        'index': 9,
        'label': 'Subject',
        'required': true,
        'name': 'Subject',
        'inputType': 'multiselect',
        'placeholder': 'Select Subject'
      },
      {
        'code': 'topic',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'renderingHints': {},
        'name': 'Topic',
        'description': 'Choose a Topics',
        'index': 11,
        'inputType': 'topicselector',
        'label': 'Topics',
        'placeholder': 'Choose Topics',
        'required': false,
        'range': [
          'applee', 'orange', 'grapes'
        ]
      }
    ]
  },
  {
    'name': 'Target Framework Details',
    'fields': [
      {
        'code': 'board',
        'visible': true,
        'depends': ['gradeLevel', 'medium', 'subject', 'topic'],
        'editable': true,
        'dataType': 'text',
        'renderingHints': {

        },
        'description': 'Board',
        'index': 6,
        'label': 'Board/Syllabus',
        'required': true,
        'name': 'Board/Syllabus',
        'inputType': 'select',
        'placeholder': 'Select Board/Syllabus'
      },
      {
        'code': 'medium',
        'visible': true,
        'depends': ['gradeLevel', 'subject', 'topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': '',
        'index': 7,
        'label': 'Medium',
        'required': true,
        'name': 'Medium',
        'inputType': 'multiselect',
        'placeholder': 'Select Medium'
      },
      {
        'code': 'gradeLevel',
        'visible': true,
        'depends': ['subject', 'topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': 'Class',
        'index': 8,
        'label': 'Class',
        'required': true,
        'name': 'Class',
        'inputType': 'multiselect',
        'placeholder': 'Select Class'
      },
      {
        'code': 'subject',
        'visible': true,
        'depends': ['topic'],
        'editable': true,
        'dataType': 'list',
        'renderingHints': {

        },
        'description': '',
        'index': 9,
        'label': 'Subject',
        'required': true,
        'name': 'Subject',
        'inputType': 'multiselect',
        'placeholder': 'Select Subject'
      },
      {
        'code': 'topic',
        'visible': true,
        'editable': true,
        'dataType': 'list',
        'renderingHints': {},
        'name': 'Topic',
        'description': 'Choose a Topics',
        'index': 11,
        'inputType': 'topicselector',
        'label': 'Topics',
        'placeholder': 'Choose Topics',
        'required': false
      }
    ]
  }
];
