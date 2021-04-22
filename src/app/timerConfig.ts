export const timer = [
  {
      name: 'First Section',
      fields: [
          {
              code: 'name',
              dataType: 'text',
              description: 'Name of the content',
              editable: true,
              inputType: 'text',
              label: 'Name',
              name: 'Name',
              placeholder: 'Name',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true,
              validations: [
                  {
                      'type': 'pattern',
                      'value': /\d/,
                      'message': 'Only number is allowed'
                  },
                  {
                      type: 'max',
                      value: '120',
                      message: 'Input is Exceeded'
                  },
                  {
                      type: 'required',
                      message: 'Title is required'
                  }
              ]
          },
          {
              code: 'description',
              dataType: 'text',
              description: 'Description of the content',
              editable: true,
              inputType: 'textarea',
              label: 'Description',
              name: 'Description',
              placeholder: 'Description',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true,
              validations: [
                  {
                      type: 'max',
                      value: '120',
                      message: 'Input is Exceeded'
                  },
                  {
                      type: 'required',
                      message: 'Title is required'
                  }
              ]
          },
          {
              code: 'keywords',
              visible: true,
              editable: true,
              dataType: 'list',
              name: 'Keywords',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: 'Keywords for the content',
              inputType: 'keywords',
              label: 'keywords',
              placeholder: 'Enter Keywords',
              required: false,
              validations: [
                  {
                      type: 'required',
                      message: 'Keyword is required'
                  }
              ]
          }
      ]
  },
  {
      name: 'Second Section',
      fields: [
          {
              code: 'primaryCategory',
              dataType: 'text',
              description: 'Type',
              editable: true,
              renderingHints: {},
              inputType: 'select',
              label: 'Type',
              name: 'Type',
              placeholder: '',
              required: true,
              visible: true,
              validations: [
                  {
                      type: 'required',
                      message: 'Board is required'
                  }
              ]
          },
          {
              code: 'additionalCategories',
              dataType: 'list',
              depends: [
                  'primaryCategory'
              ],
              description: 'Additonal Category of the Content',
              editable: true,
              inputType: 'nestedselect',
              label: 'Additional Category',
              name: 'Additional Category',
              placeholder: 'Select Additional Category',
              renderingHints: {},
              required: false,
              visible: true
          }
      ]
  },
  {
      name: 'Organisation Framework Terms',
      fields: [
            {
              code: 'framework',
              visible: true,
              editable: true,
              dataType: 'list',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: '',
              label: 'Framework',
              default: ['ekstep_ncert_k-12'],
              required: true,
              name: 'Framework',
              inputType: 'framework',
              placeholder: 'Select Framework',
              output: 'identifier',
              range: [
                  {
                      'label': 'b',
                      'identifier': 'b'
                  },
                  {
                      'label': 'Bednar - Nikolaus',
                      'identifier': 'amara.net'
                  },
                  {
                      'label': 'CBA',
                      'identifier': 'cba'
                  },
                  {
                      'label': 'CBSE-TPD',
                      'identifier': 'cbse-tpd'
                  },
                  {
                      'label': 'Centre',
                      'identifier': 'ekstep_ncert_k-12'
                  },
                  {
                      'label': 'companyName',
                      'identifier': 'companyName'
                  },
                  {
                      'label': 'DCBA',
                      'identifier': 'dcba'
                  },
                  {
                      'label': 'Devcon',
                      'identifier': 'devcon'
                  },
                  {
                      'label': 'DUMMYNCFOne',
                      'identifier': 'DUMMYNCFTwo'
                  },
                  {
                      'label': 'DUMMYNCFOne',
                      'identifier': 'DUMMYNCFOne'
                  },
                  {
                      'label': 'EDCBA',
                      'identifier': 'edcba'
                  },
                  {
                      'label': 'FEDCBA',
                      'identifier': 'fedcba'
                  },
                  {
                      'label': 'Framework Name',
                      'identifier': 'dummy_framework'
                  },
                  {
                      'label': 'Framework Test',
                      'identifier': 'frameworktest'
                  },
                  {
                      'label': 'framework_oo1',
                      'identifier': 'framework_oo1'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_458436'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_87966'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_638564'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_775879'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_619573'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_139610'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_145174'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_936032'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_68318'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_117317'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_589964'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_434450'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_320577'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_586395'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_846116'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_409462'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_814712'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_635294'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_72499'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_92766'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_547404'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_129244'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_377716'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_250262'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_287170'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_768046'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_48713'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_481657'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_843644'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_418584'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_911114'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_120406'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_131775'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_547402'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_385389'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_985786'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_965531'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_975103'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_941503'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_606437'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_695982'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_550399'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_165038'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_777376'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_57317'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_348650'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_976636'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_728847'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_916776'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_760809'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_250386'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_30341'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_620905'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_742184'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_479449'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_569428'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_804503'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_958460'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_852946'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_87443'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_223299'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_112818'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_933275'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_668801'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_136380'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_416606'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_380765'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_220832'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_34140'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_892935'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_918154'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_30291'
                  },
                  {
                      'label': 'Functional Test Framework',
                      'identifier': 'org.ekstep.framework.lft_491156'
                  },
                  {
                      'label': 'Gorczany - Davis',
                      'identifier': 'iliana.org'
                  },
                  {
                      'label': 'K-12',
                      'identifier': 'K-12'
                  },
                  {
                      'label': 'LP TEST ORDER - 1',
                      'identifier': 'LP_TEST_ORDER_1'
                  },
                  {
                      'label': 'LP_FT_Framework_100149',
                      'identifier': 'LP_FT_Framework_100149'
                  },
                  {
                      'label': 'LP_FT_Framework_100721',
                      'identifier': 'LP_FT_Framework_100721'
                  },
                  {
                      'label': 'LP_FT_Framework_107095',
                      'identifier': 'LP_FT_Framework_107095'
                  },
                  {
                      'label': 'LP_FT_Framework_107170',
                      'identifier': 'LP_FT_Framework_107170'
                  },
                  {
                      'label': 'LP_FT_Framework_110050',
                      'identifier': 'LP_FT_Framework_110050'
                  },
                  {
                      'label': 'LP_FT_Framework_111380',
                      'identifier': 'LP_FT_Framework_111380'
                  },
                  {
                      'label': 'LP_FT_Framework_115348',
                      'identifier': 'LP_FT_Framework_115348'
                  },
                  {
                      'label': 'LP_FT_Framework_116615',
                      'identifier': 'LP_FT_Framework_116615'
                  },
                  {
                      'label': 'LP_FT_Framework_120162',
                      'identifier': 'LP_FT_Framework_120162'
                  }
              ],
              validations: [
                  {
                      type: 'required',
                      message: 'Framework is required'
                  }
              ]
          },
          {
              code: 'mediumIds',
              visible: true,
              editable: true,
              dataType: 'list',
              default: ['ekstep_ncert_k-12_medium_english'],
              depends: ['framework'],
              sourceCategory: 'medium',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: '',
              label: 'Medium',
              required: true,
              name: 'medium',
              inputType: 'nestedselect',
              placeholder: 'Select Medium',
              output: 'identifier',
              validations: [
                  {
                      type: 'required',
                      message: 'Medium is required'
                  }
              ]
          },
          {
              code: 'subjectIds',
              visible: true,
              editable: true,
              dataType: 'list',
              // default: ['ekstep_ncert_k-12_subject_mathematics'],
              depends: ['framework', 'mediumIds'],
              sourceCategory: 'subject',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: '',
              label: 'Subjects Taught',
              required: true,
              name: 'Subject',
              inputType: 'nestedselect',
              placeholder: 'Select Subject',
              output: 'identifier',
              validations: [
                  {
                      type: 'required',
                      message: 'Subjects Taught is required'
                  }
              ]
          },
          {
              code: 'topicsIds',
              visible: true,
              editable: true,
              default: ['ekstep_ncert_k-12_topic_2cbe33969812d39fcbb9c64d2f140bf3696ff89e'],
              depends: ['framework', 'mediumIds', 'subjectIds'],
              dataType: 'list',
              sourceCategory: 'topic',
              renderingHints: {},
              name: 'Topic',
              description: 'Choose a Topics',
              inputType: 'topicselector',
              label: 'Topics Covered In The Course',
              placeholder: 'Choose Topics',
              required: false,
              output: 'identifier'
          }
      ]
  },
  {
      name: 'Target Framework Terms',
      fields: [
          {
              code: 'audience',
              dataType: 'list',
              description: 'Additonal Category of the Content',
              editable: true,
              inputType: 'select',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              label: 'Audience Type',
              name: 'Audience Type',
              placeholder: 'Select Audience Type',
              required: false,
              visible: true,
              range: [
                  'Student',
                  'Teacher',
                  'Administrator'
              ]
          },
          {
              code: 'targetBoardIds',
              visible: true,
              depends: ['audience'],
              editable: true,
              dataType: 'list',
              sourceCategory: 'board',
              output: 'identifier',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: 'Board',
              label: 'Board/Syllabus',
              required: true,
              name: 'Board/Syllabus',
              inputType: 'select',
              placeholder: 'Select Board/Syllabus',
              validations: [
                  {
                      type: 'required',
                      message: 'Board is required'
                  }
              ]
          },
          {
              code: 'targetMediumIds',
              visible: true,
              depends: [
                  'targetBoardIds'
              ],
              editable: true,
              dataType: 'list',
              sourceCategory: 'medium',
              output: 'identifier',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: '',
              label: 'Medium',
              required: true,
              name: 'Medium',
              inputType: 'select',
              placeholder: 'Select Medium',
              validations: [
                  {
                      type: 'required',
                      message: 'Medium is required'
                  }
              ]
          },
          {
              code: 'targetGradeLevelIds',
              visible: true,
              depends: [
                  'targetBoardIds',
                  'targetMediumIds'
              ],
              editable: true,
              dataType: 'list',
              sourceCategory: 'gradeLevel',
              output: 'identifier',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: 'Class',
              label: 'Class',
              required: true,
              name: 'Class',
              inputType: 'select',
              placeholder: 'Select Class',
              validations: [
                  {
                      type: 'required',
                      message: 'Class is required'
                  }
              ]
          },
          {
              code: 'targetSubjectIds',
              visible: true,
              depends: [
                  'targetBoardIds',
                  'targetMediumIds',
                  'targetGradeLevelIds'
              ],
              editable: true,
              dataType: 'list',
              sourceCategory: 'subject',
              output: 'identifier',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              description: '',
              label: 'Subject',
              required: true,
              name: 'Subject',
              inputType: 'select',
              placeholder: 'Select Subject',
              validations: [
                  {
                      type: 'required',
                      message: 'Subject is required'
                  }
              ]
          }
      ]
  },
  {
      name: 'Fourth Section',
      fields: [
          {
              code: 'author',
              dataType: 'text',
              description: 'Author of the content',
              editable: true,
              inputType: 'text',
              label: 'Author',
              name: 'Author',
              placeholder: 'Author',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true
          },
          {
              code: 'attributions',
              dataType: 'text',
              description: 'Attributions',
              editable: true,
              inputType: 'text',
              label: 'Attributions',
              name: 'Attributions',
              placeholder: 'Attributions',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true
          },
          {
              code: 'copyright',
              dataType: 'text',
              description: 'Copyright & year',
              editable: true,
              inputType: 'text',
              label: 'Copyright & year',
              name: 'Copyright & year',
              placeholder: 'Copyright & year',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true
          },
          {
              code: 'license',
              dataType: 'text',
              description: 'license',
              editable: true,
              inputType: 'select',
              label: 'license',
              name: 'license',
              placeholder: 'Select license',
              renderingHints: {
                  class: 'sb-g-col-lg-1 required'
              },
              required: true,
              visible: true
          }
      ]
  }
];

// export const timer  = [
//     {
//         'name': 'First Section',
//         'fields': [
//             {
//                 'code': 'name',
//                 'dataType': 'text',
//                 'description': 'Name of the content',
//                 'editable': true,
//                 'inputType': 'text',
//                 'label': 'Title',
//                 'name': 'Name',
//                 'placeholder': 'Title',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': true,
//                 'visible': true,
//                 'validations': [
//                     {
//                         'type': 'max',
//                         'value': '120',
//                         'message': 'Input is Exceeded'
//                     },
//                     {
//                         'type': 'required',
//                         'message': 'Title is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'description',
//                 'dataType': 'text',
//                 'description': 'Description of the content',
//                 'editable': true,
//                 'inputType': 'textarea',
//                 'label': 'Description',
//                 'name': 'Description',
//                 'placeholder': 'Description',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': false,
//                 'visible': true,
//                 'validations': [
//                     {
//                         'type': 'max',
//                         'value': '256',
//                         'message': 'Input is Exceeded'
//                     }
//                 ]
//             },
//             {
//                 'code': 'keywords',
//                 'visible': true,
//                 'editable': true,
//                 'dataType': 'list',
//                 'name': 'Keywords',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': 'Keywords for the content',
//                 'inputType': 'keywords',
//                 'label': 'Keywords',
//                 'placeholder': 'Enter Keywords',
//                 'required': false,
//                 'validations': []
//             }
//         ]
//     },
//     {
//         'name': 'Second Section',
//         'fields': [
//             {
//                 'code': 'primaryCategory',
//                 'dataType': 'text',
//                 'description': 'Type',
//                 'editable': false,
//                 'renderingHints': {},
//                 'inputType': 'select',
//                 'label': 'Category',
//                 'name': 'Type',
//                 'placeholder': '',
//                 'required': true,
//                 'visible': true,
//                 'validations': []
//             },
//             {
//                 'code': 'additionalCategories',
//                 'dataType': 'list',
//                 'depends': [
//                     'primaryCategory'
//                 ],
//                 'description': 'Additonal Category of the Content',
//                 'editable': true,
//                 'inputType': 'nestedselect',
//                 'label': 'Additional Category',
//                 'name': 'Additional Category',
//                 'placeholder': 'Select Additional Category',
//                 'renderingHints': {},
//                 'required': false,
//                 'visible': true
//             }
//         ]
//     },
//     {
//         'name': 'Organisation Framework Terms',
//         'fields': [
//             {
//                 'code': 'framework',
//                 'visible': true,
//                 'editable': true,
//                 'dataType': 'text',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': '',
//                 'label': 'Course Type',
//                 'required': true,
//                 'name': 'Framework',
//                 'inputType': 'framework',
//                 'placeholder': 'Select Course Type',
//                 'output': 'identifier',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Course Type is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'subjectIds',
//                 'visible': true,
//                 'editable': true,
//                 'dataType': 'list',
//                 'depends': [
//                     'framework'
//                 ],
//                 'sourceCategory': 'subject',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': '',
//                 'label': 'Subjects covered in the course',
//                 'required': true,
//                 'name': 'Subject',
//                 'inputType': 'nestedselect',
//                 'placeholder': 'Select Subject(s)',
//                 'output': 'identifier',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Subjects Taught is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'topicsIds',
//                 'visible': true,
//                 'editable': true,
//                 'dataType': 'list',
//                 'depends': [
//                     'framework',
//                     'subjectIds'
//                 ],
//                 'sourceCategory': 'topic',
//                 'renderingHints': {},
//                 'name': 'Topic',
//                 'description': 'Choose a Topics',
//                 'inputType': 'topicselector',
//                 'label': 'Topics covered in the course',
//                 'placeholder': 'Choose Topics',
//                 'required': false,
//                 'output': 'identifier'
//             }
//         ]
//     },
//     {
//         'name': 'Target Framework Terms',
//         'fields': [
//             {
//                 'code': 'audience',
//                 'dataType': 'list',
//                 'description': 'Audience',
//                 'editable': true,
//                 'inputType': 'nestedselect',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'label': 'Audience Type',
//                 'name': 'Audience Type',
//                 'placeholder': 'Select Audience Type',
//                 'required': false,
//                 'visible': true,
//                 'range': [
//                     'Student',
//                     'Teacher',
//                     'Parent',
//                     'Administrator'
//                 ]
//             },
//             {
//                 'code': 'targetBoardIds',
//                 'visible': true,
//                 'depends': [],
//                 'editable': true,
//                 'dataType': 'list',
//                 'sourceCategory': 'board',
//                 'output': 'identifier',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': 'Board',
//                 'label': 'Board/Syllabus of the audience',
//                 'required': true,
//                 'name': 'Board/Syllabus',
//                 'inputType': 'select',
//                 'placeholder': 'Select Board/Syllabus',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Board is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'targetMediumIds',
//                 'visible': true,
//                 'depends': [
//                     'targetBoardIds'
//                 ],
//                 'editable': true,
//                 'dataType': 'list',
//                 'sourceCategory': 'medium',
//                 'output': 'identifier',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': '',
//                 'label': 'Medium(s) of the audience',
//                 'required': true,
//                 'name': 'Medium',
//                 'inputType': 'nestedselect',
//                 'placeholder': 'Select Medium',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Medium is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'targetGradeLevelIds',
//                 'visible': true,
//                 'depends': [
//                     'targetBoardIds',
//                     'targetMediumIds'
//                 ],
//                 'editable': true,
//                 'dataType': 'list',
//                 'sourceCategory': 'gradeLevel',
//                 'output': 'identifier',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': 'Class',
//                 'label': 'Class(es) of the audience',
//                 'required': true,
//                 'name': 'Class',
//                 'inputType': 'nestedselect',
//                 'placeholder': 'Select Class',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Class is required'
//                     }
//                 ]
//             },
//             {
//                 'code': 'targetSubjectIds',
//                 'visible': true,
//                 'depends': [
//                     'targetBoardIds',
//                     'targetMediumIds',
//                     'targetGradeLevelIds'
//                 ],
//                 'editable': true,
//                 'dataType': 'list',
//                 'sourceCategory': 'subject',
//                 'output': 'identifier',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'description': '',
//                 'label': 'Subject(s) of the audience',
//                 'required': true,
//                 'name': 'Subject',
//                 'inputType': 'nestedselect',
//                 'placeholder': 'Select Subject',
//                 'validations': [
//                     {
//                         'type': 'required',
//                         'message': 'Subject is required'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         'name': 'Fourth Section',
//         'fields': [
//             {
//                 'code': 'author',
//                 'dataType': 'text',
//                 'description': 'Author of the content',
//                 'editable': true,
//                 'inputType': 'text',
//                 'label': 'Author',
//                 'name': 'Author',
//                 'placeholder': 'Author',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': false,
//                 'visible': true
//             },
//             {
//                 'code': 'attributions',
//                 'dataType': 'text',
//                 'description': 'Attributions',
//                 'editable': true,
//                 'inputType': 'text',
//                 'label': 'Attributions',
//                 'name': 'Attributions',
//                 'placeholder': 'Attributions',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': false,
//                 'visible': true
//             },
//             {
//                 'code': 'copyright',
//                 'dataType': 'text',
//                 'description': 'Copyright',
//                 'editable': true,
//                 'inputType': 'text',
//                 'label': 'Copyright',
//                 'name': 'Copyright & year',
//                 'placeholder': 'Copyright & year',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': true,
//                 'visible': true
//             },
//             {
//                 'code': 'copyrightYear',
//                 'dataType': 'text',
//                 'description': 'Year',
//                 'editable': true,
//                 'inputType': 'text',
//                 'label': 'Copyright Year',
//                 'name': 'Copyright Year',
//                 'placeholder': 'Copyright Year',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': true,
//                 'visible': true
//             },
//             {
//                 'code': 'license',
//                 'dataType': 'text',
//                 'description': 'license',
//                 'editable': true,
//                 'inputType': 'select',
//                 'label': 'License',
//                 'name': 'license',
//                 'placeholder': 'Select License',
//                 'renderingHints': {
//                     'class': 'sb-g-col-lg-1 required'
//                 },
//                 'required': true,
//                 'visible': true,
//                 'defaultValue': 'CC BY 4.0'
//             }
//         ]
//     }
// ]