/* @flow */

import type {FormElementConfig} from './detail-form.config';
import {
  cloneDeep
} from 'lodash';

class DetailFormController {
  static $inject: Array<string>;
  definition: Array<FormElementConfig>;
  model: Object;
  modelOriginal: Object;
  showHeader: boolean;
  onSubmit: Function;
  readyToBeEdited: boolean;
  elements: Array<FormElementConfig>;

  constructor() {
    this.modelOriginal = cloneDeep(this.model);
    this.elements = cloneDeep(this.definition);
    this.showHeader = (typeof (this.title) === undefined || this.title == null) ? false : true;
    this.readyToBeEdited = true;
  }

  toggleReadyToBeEdited() {
    this.readyToBeEdited = !this.readyToBeEdited;
  }

  resetForm(form) {
    this.model = cloneDeep(this.modelOriginal);
    form.$setPristine();
    form.$setUntouched();
  }

  submit() {
    this.onSubmit(this);
  }
}

DetailFormController.$inject = [];

export default DetailFormController;
