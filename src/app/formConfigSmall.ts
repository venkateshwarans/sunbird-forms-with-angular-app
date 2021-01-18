export const formConfig = [
  {
    'name': 'First Section',
    'fields': [{
        'code': 'title',
        'dataType': 'text',
        'description': 'Name of the content',
        'default': 'fasdad',
        'editable': false,
        'inputType': 'text',
        'label': 'Title',
        'name': 'Title',
        'placeholder': 'Title',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
        'validations': [{
          'type': 'max',
          'value': '120',
          'message': 'Input is Exceeded'
        }, {
          'type': 'required',
          'message': 'Title is required'
        }]
      },
      {
        'code': 'description',
        'dataType': 'text',
        'description': 'Description of the content',
        'default': 'asdadad',
        'editable': false,
        'inputType': 'textarea',
        'label': 'Description',
        'name': 'Description',
        'placeholder': 'Description',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
        'validations': [{
          'type': 'max',
          'value': '120',
          'message': 'Input is Exceeded'
        }, {
          'type': 'required',
          'message': 'Title is required'
        }]
      },
      {
        'code': 'keywords',
        'visible': true,
        'editable': false,
        'dataType': 'list',
        'default': ['one', 'two'],
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
        'validations': [{
          'type': 'required',
          'message': 'Keyword is required'
        }]
      },
      {
        'code': 'primaryCategory',
        'dataType': 'text',
        'description': 'Type',
        'editable': true,
        'index': 4,
        'renderingHints': {

        },
        'range': [
          {
            'label': 'karnataka1',
            'value': 'karnataka1'
          },
          {
            'label': 'karnataka2',
            'value': 'karnataka2'
          }
        ],
        'inputType': 'select',
        'label': 'Type',
        'name': 'Type',
        'placeholder': '',
        'required': true,
        'visible': true,
        'validations': [{
          'type': 'required',
          'message': 'Board is required'
        }]
      },
      {
        'code': 'additionalCategories',
        'dataType': 'list',
        'depends': ['title', 'primaryCategory'],
        'description': 'Additonal Category of the Content',
        'editable': true,
        'index': 5,
        'default': ['Classroom Teaching Video',
          'Concept Map'
        ],
        'inputType': 'nestedselect',
        'label': 'Additional Category',
        'name': 'Additional Category',
        'placeholder': 'Select Additional Category',
        'renderingHints': {

        },
        'range': ['Classroom Teaching Video',
          'Concept Map',
          'Curiosity Question Set',
          'Experiential Resource',
          'Explanation Video',
          'Focus Spot',
          'Learning Outcome Definition',
          'Lesson Plan',
          'Marking Scheme Rubric',
          'Pedagogy Flow',
          'Previous Board Exam Papers',
          'TV Lesson',
          'Textbook'
        ],
        'required': false,
        'visible': true
      },
      {
        'code': 'board',
        'visible': true,
        'depends': ['gradeLevel', 'medium', 'subject', 'topic'],
        'editable': false,
        'dataType': 'text',
        'renderingHints': {

        },
        'range': [],
        'description': 'Board',
        'index': 6,
        'label': 'Board/Syllabus',
        'required': true,
        'name': 'Board/Syllabus',
        'inputType': 'select',
        'placeholder': 'Select Board/Syllabus',
        'validations': [{
          'type': 'required',
          'message': 'Board is required'
        }]
      }, {
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
        'placeholder': 'Select Medium',
        'validations': [{
          'type': 'required',
          'message': 'Medium is required'
        }]
      }, {
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
      }, {
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
        'editable': false,
        'dataType': 'list',
        'default': ['ONE', 'TWO'],
        'renderingHints': {},
        'name': 'Topic',
        'description': 'Choose a Topics',
        'index': 11,
        'inputType': 'topicselector',
        'label': 'Topics',
        'placeholder': 'Choose Topics',
        'required': false,
        'range': '',
        'validations': [{
          'type': 'required',
          'message': 'Topic is required'
        }]
      },
      {
        'code': 'audience',
        'dataType': 'list',
        'description': 'Audience',
        'editable': true,
        'inputType': 'select',
        'label': 'Audience',
        'name': 'Audience',
        'placeholder': 'Select Audience',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
        'range': ['Student', 'Teacher', 'Administrator'],
      },
      {
        'code': 'showFeedback',
        'dataType': 'boolean',
        'description': 'Show Feedback',
        'editable': false,
        'default': true,
        'index': 5,
        'inputType': 'checkbox',
        'label': 'Show Feedback',
        'name': 'showFeedback',
        'placeholder': 'Show Feedback',
        'renderingHints': {},
        'required': false,
        'visible': true
      },
      {
        'code': 'shuffleQuestions',
        'dataType': 'text',
        'description': 'Shuffle Questions',
        'editable': true,
        'default': '',
        'index': 5,
        'inputType': 'checkbox',
        'label': 'Shuffle Questions',
        'name': 'Shuffle Questions',
        'placeholder': 'Shuffle Questions',
        'renderingHints': {},
        'required': false,
        'visible': true
      },
      {
        'code': 'showQuestions',
        'dataType': 'text',
        'description': 'Show Questions',
        'editable': true,
        'index': 5,
        'inputType': 'select',
        'label': 'Show Questions',
        'name': 'showQuestions',
        'placeholder': 'Show Questions',
        'renderingHints': {},
        'required': false,
        'visible': true,
        'range': ''
      },
      {
        'code': 'author',
        'dataType': 'text',
        'description': 'Author of the content',
        'editable': true,
        'inputType': 'text',
        'label': 'Author',
        'name': 'Author',
        'placeholder': 'Author',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
      },
      {
        'code': 'attributions',
        'dataType': 'text',
        'description': 'Attributions',
        'editable': true,
        'inputType': 'text',
        'label': 'Attributions',
        'name': 'Attributions',
        'placeholder': 'Attributions',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
      },
      {
        'code': 'copyright',
        'dataType': 'text',
        'description': 'Copyright & year',
        'editable': true,
        'inputType': 'text',
        'label': 'Copyright & year',
        'name': 'Copyright & year',
        'placeholder': 'Copyright & year',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
      },
      {
        'code': 'license',
        'dataType': 'text',
        'description': 'license',
        'editable': true,
        'inputType': 'select',
        'label': 'license',
        'name': 'license',
        'placeholder': 'Select license',
        'renderingHints': {
          'class': 'sb-g-col-lg-1'
        },
        'required': true,
        'visible': true,
        'range': ''
      }
    ]
  },
];
