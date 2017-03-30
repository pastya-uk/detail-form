
import controller from './detail-form.controller';
import template from './detail-form.html!text';
import detailFormElement from './detail-form-element';

export default angular.module('demica.common.detailForm', [detailFormElement.name])
  .directive('detailForm', function () {
    return {
      restrict: 'AE',
      controller,
      template,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        id: '@formId',
        title: '@title',
        showBorder: '@showBorder',
        definition: '=formDefinition',
        collections: '=formCollections',
        model: '=formModel',
        updateable: '=formUpdateable',
        onSubmit: '&'
      }
    };
  });
