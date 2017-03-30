/* @flow */

class DetailFormElementController {
  static $inject: Array<string>;
  $filter: Function;

  constructor($filter: Function) {
    this.$filter = $filter;
  }

  onNumberChange() {
  }

  onTextChange() {
    if (!this.model || !this.model.length) {
      delete this.model;
    }
  }

  onDateChange() {
  }

  onAmountChange(fractionSize: number) {
    if (typeof (fractionSize) === undefined || fractionSize == null) {
      return;
    }
    let value = this.model;
    let formattedValue = this.$filter('number')(value, fractionSize);

    this.model = formattedValue;
  }
}

DetailFormElementController.$inject = ['$filter'];

export default DetailFormElementController;
