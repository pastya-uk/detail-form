/* @flow */

import _ from 'lodash';
import controller from './detail-form-element.controller';
// templates
import tplAmount from './elements/amount.html!text';
import tplBoolean from './elements/boolean.html!text';
import tplDate from './elements/date.html!text';
import tplNumber from './elements/number.html!text';
import tplPercentage from './elements/percentage.html!text';
import tplRadioGroup from './elements/radio-group.html!text';
import tplSelectSingle from './elements/select-single.html!text';
import tplSelectizeSingle from './elements/selectize-single.html!text';
import tplText from './elements/text.html!text';
import tplTelephone from './elements/telephone.html!text';

export default angular.module('demica.common.detailFormElement', ['demica.common.radioButton', 'demica.common.inputMasks'])
  .directive('detailFormElement', ['$compile', function ($compile) {

    const formTemplates = {
      'amount': tplAmount,
      'boolean': tplBoolean,
      'currency': tplAmount,
      'currency-code': tplSelectSingle,
      'date': tplDate,
      'number': tplNumber,
      'percentage': tplPercentage,
      'radio-group': tplRadioGroup,
      'select-single': tplSelectSingle,
      'selectize-single': tplSelectizeSingle,
      'text': tplText,
      'telephone': tplTelephone
    };

    return {
      restrict: 'E',
      controller,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        element: '=',
        collection: '=',
        model: '=',
        elementUpdated: '&?',
        mandatory: '=?',
        currency: '=?'
      },
      link(scope, elem) {
        let formTemplate = formTemplates[scope.vm.element.type];

        elem.html(formTemplate).show();
        $compile(elem.contents())(scope);
        _.each(elem.find('.mdl-textfield'), e => componentHandler.upgradeElement(e));
      }
    };
  }]);