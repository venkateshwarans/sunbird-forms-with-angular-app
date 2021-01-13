import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { LazzyLoadScriptService } from './../utilities/lazzy-load-script.service';
import * as _ from 'lodash-es';
import { FormControl , FormGroup} from '@angular/forms';
import { FieldConfig } from '../common-form-config';
import { tap } from 'rxjs/operators';

declare var treePicker: any;
declare var $: any;
interface TopicTreeNode {
  id: string;
  name: string;
  selectable: string;
  nodes: Array<TopicTreeNode>;
}
interface JQuery {
  treePicker(options?: any);
}


@Component({
  selector: 'sb-topicpicker',
  templateUrl: './topicpicker.component.html',
  styleUrls: ['./topicpicker.component.css']
})
export class TopicpickerComponent implements OnInit {

  @Input() selectedTopics: any;
  @Input() topicPickerClass: string;
  @Input() label: String;
  @Input() disabled?: boolean;
  @Input() placeholder: String;
  @Input() formControlRef: FormControl;
  @Input() field: FieldConfig<String>;
  @Output() topicChange = new EventEmitter();
  @Input() validations?: any;
  @Input() formGroup?: FormGroup;
  @Input() default?: any;

  @Input() depends?: FormControl[];
  @Input() dependencyTerms?: any = [];
  public selectedNodes: any;
  public placeHolder: string;

  constructor(private lazzyLoadScriptService: LazzyLoadScriptService) { }

  ngOnInit() {

    this.formControlRef.valueChanges.pipe(
      tap(val => {
        console.log(val);
      })
    ).subscribe();
    const selectedTopics = _.reduce(this.default, (collector, element) => {
      if (typeof element === 'string') {
        collector.unformatted.push(element);
      } else if (_.get(element, 'identifier')) {
        collector.formatted.push(element);
      }
      return collector;
    }, { formatted: [], unformatted: [] });

    this.formatSelectedTopics(this.field.range, selectedTopics.unformatted, selectedTopics.formatted);
    this.default = selectedTopics.unformatted;
    this.selectedNodes = { ...selectedTopics.formatted };
    this.topicChange.emit(this.selectedTopics);




    if (!_.isEmpty(this.default)) {
      this.placeHolder = this.default &&  this.default.length + ' topics selected';
      this.formControlRef.setValue(this.default);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.initTopicPicker(this.formatTopics(this.field.range));

  }

  private formatTopics(topics, subTopic = false): Array<TopicTreeNode> {
    return _.map(topics, (topic) => ({
      id: topic.identifier,
      name: topic.name,
      selectable: subTopic ? 'selectable' : 'notselectable',
      nodes: this.formatTopics(topic.children, true)
    }));
  }

  private formatSelectedTopics(topics, unformatted, formatted) {
    _.forEach(topics, (topic) => {
      if (unformatted.includes(topic.name) && !topic.children) {
        formatted.push({
          identifier: topic.identifier,
          name: topic.name
        });
      }
      if (topic.children) {
        this.formatSelectedTopics(topic.children, unformatted, formatted);
      }
    });
  }

  private initTopicPicker(data: Array<TopicTreeNode>) {
    // combineLatest(this.lazzyLoadScriptService.loadScript('fancytree-all-deps.js'),
    // this.lazzyLoadScriptService.loadScript('semanticModal.js')).subscribe(() => {


      $('.topic-picker-selector').treePicker({
        data: data,
        name: 'Topics',
        noDataMessage: 'noDataMessage',
        submitButtonText: 'Done',
        cancelButtonText: 'Cancel',
        removeAllText: 'Remove All',
        chooseAllText: 'Choose All',
        searchText: 'Search',
        selectedText: 'selected',
        picked: (!_.isEmpty(this.selectedNodes)) ? _.map(this.selectedNodes, 'identifier') : (!_.isEmpty(this.default) ? this.default : []),
        onSubmit: (selectedNodes) => {
          this.selectedNodes = selectedNodes;
          this.selectedTopics = _.map(selectedNodes, node => ({
            identifier: node.id,
            name: node.name
          }));
          this.placeHolder = this.selectedTopics.length + ' topics selected';
          this.topicChange.emit(this.selectedTopics);
          const topics = [];
          _.forEach(this.selectedTopics, (value, index) => {
            topics.push(value.name);
          });
          this.formControlRef.setValue(topics);
        },
        nodeName: 'topicSelector',
        minSearchQueryLength: 1
      });
      setTimeout(() =>
        document.getElementById('topicSelector').classList.add(this.topicPickerClass), 100);
    // });
  }

}
