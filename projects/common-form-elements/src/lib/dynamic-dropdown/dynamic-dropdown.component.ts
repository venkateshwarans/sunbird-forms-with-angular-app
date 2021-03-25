import {Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, EventEmitter, AfterViewInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject, Subscription, combineLatest, merge} from 'rxjs';
import {FieldConfig, FieldConfigOption, FieldConfigOptionsBuilder, DynamicFieldConfigOptionsBuilder,
  CustomFormControl, CustomFormGroup} from '../common-form-config';
import {filter, tap} from 'rxjs/operators';
import * as _ from 'lodash-es';
import {ValueComparator} from '../utilities/value-comparator';

@Component({
  selector: 'sb-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html',
  styleUrls: ['./dynamic-dropdown.component.css']
})
export class DynamicDropdownComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  ValueComparator = ValueComparator;
  @Input() field: FieldConfig<String>;
  @Input() disabled?: boolean;
  @Input() options: any;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() isMultiple?: boolean;
  @Input() context?: FormControl;
  @Input() contextTerms?: any;
  @Input() formControlRef?: any;
  @Input() formGroup?: CustomFormGroup;
  @Input() default?: any;
  @Input() contextData: any;
  @Input() dataLoadStatusDelegate: Subject<'LOADING' | 'LOADED'>;
  @Input() type?: string;
  @Input() styleClass?: string;
  @Output() onChangeFilter: EventEmitter<any> = new EventEmitter();
  @Input() validations?: any;

  @Input() depends?: FormControl[];
  @Input() dependencyTerms?: any = [];

  public isDependsInvalid: any;

  options$?: Observable<FieldConfigOption<any>[]>;
  private dispose$ = new Subject<undefined>();
  contextValueChangesSubscription?: Subscription;
  selectedType: any;
  tempAssociation: any;
  latestParentValue: string;
  isDynamicDependencyTerms: any;
  termsForDependantFieldsBySelectedValue: any;
  associationOption: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.options) {
      this.options = [];
    }
    if (this.isOptionsClosure(this.options)) {
      this.options$ = (this.options as DynamicFieldConfigOptionsBuilder<any>)(
        this.formControlRef,
        this.depends,
        this.formGroup,
        () => this.dataLoadStatusDelegate.next('LOADING'),
        () => this.dataLoadStatusDelegate.next('LOADED')
      ) as any;
    }
  }

  ngOnInit() {
    if (!this.options) {
      this.options = _.isEmpty(this.field.options) ? this.isOptionsClosure(this.field.options) && this.field.options : [];
    }
    if (this.field && this.field.range && !this.options) {
      this.options = this.field.range;
    } else if (_.isEmpty(this.options) && _.isEmpty(this.field.range) && this.default) {
      this.field.range = [];
      this.field.range.push(this.default);
    }
    if (!_.isEmpty(this.depends)) {
      this.handleDependantFieldChanges();
    }
    this.handleSelfChange();
    this.handleClosureOption();
    this.dataLoadStatusDelegate.subscribe();
  }

  ngAfterViewInit() {
    if (this.default) {
      this.handleDependantFieldChanges();
    }
  }

  handleIfDefaultExists() {

  }

  handleDependantFieldChanges() {
    this.contextValueChangesSubscription =  merge(..._.map(this.depends, depend => depend.valueChanges)).pipe(
      tap((value: any) => {
        this.formControlRef.patchValue(null);
        this.latestParentValue = value;
        this.isDependsInvalid = _.includes(_.map(this.depends, depend => depend.invalid), true);
        this.isDynamicDependencyTerms = _.compact(_.flatten(_.map(this.depends, depend => {
          return depend.termsForDependantFields;
        })));
        this.associationOption = this.fetchDependencyTerms();
      })
      ).subscribe();

      this.isDependsInvalid = _.includes(_.map(this.depends, depend => depend.invalid), true);
  }

  handleSelfChange() {
    this.formControlRef.valueChanges.pipe(
      tap((value: any) => {
        this.formControlRef.termsForDependantFields = [];
        if (value && this.tempAssociation) {
          this.termsForDependantFieldsBySelectedValue = this.getTermsBasedOnSelectedValue(this.tempAssociation, value);
          this.formControlRef.termsForDependantFields.push(this.getTermsByValue([this.termsForDependantFieldsBySelectedValue], value, true));
          this.formGroup.lastChangedField = {code: this.field.code, value: this.formControlRef.value};
        } else {
          this.tempAssociation && this.formControlRef.termsForDependantFields.push(this.getTermsByValue([this.tempAssociation], value, true));
        }
      })
    ).subscribe();
  }


  handleClosureOption() {
    if (this.isOptionsClosure(this.options)) {
      // tslint:disable-next-line:max-line-length
      this.options$ = (this.options as DynamicFieldConfigOptionsBuilder<any>)
      (this.formControlRef,
        this.depends,
        this.formGroup,
        () => this.dataLoadStatusDelegate.next('LOADING'),
        () => this.dataLoadStatusDelegate.next('LOADED')) as any;

      this.options$.subscribe(
        (response) => {
          this.isDependsInvalid = _.includes(_.map(this.depends, depend => depend.invalid), true);
          this.dependencyTerms = response;
        },
      );
    }
  }

  onChangeFacet($event) {
    const selectedObject = this.options.data[$event.currentTarget.options.selectedIndex - 1];
    const emitPayload = JSON.parse(JSON.stringify(this.options));
    emitPayload['data'] = selectedObject;
    emitPayload['selectedLabel'] = selectedObject.label;
    emitPayload['selectedValue'] = selectedObject.value;
    this.onChangeFilter.emit(emitPayload);
  }

  fetchAssociations() {
    // && this.context.value && this.field.association
    if (!_.isEmpty(this.depends)) {
      const filteredTerm = _.find(this.dependencyTerms, terms => {
        return !_.isEmpty(this.field.output) ?
        _.includes(this.getParentValue(), terms[this.field.output]) :
        _.includes(this.getParentValue(), terms.name) ;
      });
      if (filteredTerm) {
        this.tempAssociation =  _.filter(filteredTerm.associations, association => {
          return (this.field.sourceCategory) ?
          (association.category === this.field.sourceCategory) :
          association.category === this.field.code;
        });
        return this.tempAssociation;
      } else  {
        return this.options;
      }
    } else {
      return this.options;
    }
  }

  fetchDependencyTerms() { // subject
    if (!_.isEmpty(this.isDynamicDependencyTerms)) {
      const filteredTerm = this.getTermsByValue(this.isDynamicDependencyTerms, this.getParentValue(), true);
      if (filteredTerm) {
        let tempAssociations: any;
        let lookUp: string;
        if (filteredTerm.categories) {
          tempAssociations = filteredTerm.categories;
          lookUp = 'code';
        } else if (filteredTerm.terms) {
          tempAssociations = filteredTerm.terms;
          lookUp = 'category';
        } else if (filteredTerm.associations) {
          tempAssociations = filteredTerm.associations;
          lookUp = 'category';
        }

        const filteredCategory = _.filter(tempAssociations, association => {
          return (this.field.sourceCategory) ? (association[lookUp] === this.field.sourceCategory) :
           association[lookUp] === this.field.code;
        });
        this.tempAssociation =  this.extractAndFlattenTerms(filteredCategory);

      return this.tempAssociation;
      }
    }
  }


  getParentValue() {
    return this.latestParentValue || _.compact(_.map(this.depends, 'value'));
  }

  getOptionValueForTerms(option) {
    if (this.field.output) {
      if (this.field.dataType === 'list') {
        return [option[this.field.output]];
      }
      return option[this.field.output];
    } else {
      return this.field.dataType === 'list' ? [option.name] : option.name;
    }
  }

  getTermsByValue(categories, value,  doFlatten?) {
    let array = categories;
    if (doFlatten) {
      array = _.flatten(categories);
    }
    if (!_.isEmpty(array)) {
      return _.find(array, terms => {
        return !_.isEmpty(this.field.output) ?
        _.includes(value, terms[this.field.output]) :
        _.includes(value, terms.name) ;
      });

    }
  }

  getTermsBasedOnSelectedValue(categories, value) {
    if (categories) {
     return  _.find(categories, category => {
      return !_.isEmpty(this.field.output) ?
          _.includes(value, category[this.field.output]) :
          _.includes(value, category.name);
      });
    }
  }

  getOptionValueForRange(option, optionsType) {
    if (this.field.output) {
      if (this.field.dataType === 'list') {
        if (optionsType === 'map' || optionsType === 'closure') {
          return [option[this.field.output]] || [option.value] || [option.identifier] || [option.name] || [option.label];
        } else  {
          return [option];
        }
      } else {
        if (optionsType === 'map' || optionsType === 'closure') {
          return option[this.field.output] || option.value || option.identifier || option.name || option.label;
        } else  {
          return option;
        }
      }
    } else {
      if (this.field.dataType === 'list') {
        if (optionsType === 'map' || optionsType === 'closure') {
          return [option.value] || [option.identifier] || [option.name] || [option.label];
        } else  {
          return [option];
        }
      } else {
        if (optionsType === 'map' || optionsType === 'closure') {
          return  option.name || option.label || option.value || option.identifier;
        } else  {
          return option;
        }
      }
    }
  }

  extractAndFlattenTerms(categories) {
    return _.flatten(_.map(categories, category => {
      if (_.has(category, 'terms')) {
        return category.terms;
      } else if (_.has(category, 'association')) {
        return category.associations;
      } else if (_.has(category, 'categories')) {
        return category.categories;
      } else {
        return category;
      }
    }));
  }

  isOptionsArray(options: any) {
    return Array.isArray(options);
  }

  isOptionsClosure(options: any) {
    return typeof options === 'function';
  }

  isOptionsMap(input: any) {
    return !Array.isArray(input) && typeof input === 'object';
  }

  isOptionsArrayMap(input: any) {
    return Array.isArray(input) && typeof input[0] === 'object';
  }

  ngOnDestroy(): void {
    if (this.contextValueChangesSubscription) {
      this.contextValueChangesSubscription.unsubscribe();
    }
  }
}
