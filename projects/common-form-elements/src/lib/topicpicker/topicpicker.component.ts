import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { LazzyLoadScriptService } from './../utilities/lazzy-load-script.service';
import * as _ from 'lodash-es';
import * as  treePicker from 'treePicker.js';
import * as $ from 'jquery';
interface TopicTreeNode {
  id: string;
  name: string;
  selectable: string;
  nodes: Array<TopicTreeNode>;
}
// interface JQuery {
//   treePicker(options?: any);
// }
$.fn.treePicker = treePicker;
@Component({
  selector: 'sb-topicpicker',
  templateUrl: './topicpicker.component.html',
  styleUrls: ['./topicpicker.component.css']
})
export class TopicpickerComponent implements OnInit {

  @Input() formTopic: any;
  @Input() selectedTopics: any;
  @Input() topicPickerClass: string;
  @Output() topicChange = new EventEmitter();

  public selectedNodes: any;
  public placeHolder: string;

  constructor(private lazzyLoadScriptService: LazzyLoadScriptService) { }

  ngOnInit() {
    console.log('treePicker ', treePicker);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    // this.initTopicPicker(this.formatTopics(this.formTopic.range));
  }

  // private formatTopics(topics, subTopic = false): Array<TopicTreeNode> {
  //   return _.map(topics, (topic) => ({
  //     id: topic.identifier,
  //     name: topic.name,
  //     selectable: subTopic ? 'selectable' : 'notselectable',
  //     nodes: this.formatTopics(topic.children, true)
  //   }));
  // }

  // private initTopicPicker(data: Array<TopicTreeNode>) {
  //   combineLatest(this.lazzyLoadScriptService.loadScript('fancytree-all-deps.js'),
  //   this.lazzyLoadScriptService.loadScript('semanticModal.js')).subscribe(() => {
  //     jQuery('.topic-picker-selector').treePicker({
  //       data: data,
  //       name: 'Topics',
  //       noDataMessage: 'noDataMessage',
  //       submitButtonText: 'Done',
  //       cancelButtonText: 'Cancel',
  //       removeAllText: 'Remove All',
  //       chooseAllText: 'Choose All',
  //       searchText: 'Search',
  //       selectedText: 'selected',
  //       picked: _.map(this.selectedNodes, 'identifier'),
  //       onSubmit: (selectedNodes) => {
  //         this.selectedNodes = selectedNodes;
  //         this.selectedTopics = _.map(selectedNodes, node => ({
  //           identifier: node.id,
  //           name: node.name
  //         }));
  //         this.placeHolder = this.selectedTopics.length + ' topics selected';
  //         this.topicChange.emit(this.selectedTopics);
  //       },
  //       nodeName: 'topicSelector',
  //       minSearchQueryLength: 1
  //     });
  //     setTimeout(() =>
  //       document.getElementById('topicSelector').classList.add(this.topicPickerClass), 100);
  //   });
  // }

}
