import template from './transaction-table.tpl.html';
import controller from './transaction-table-controller';

export default {
  bindings: {
    data: '=',
    header: '='
  },
  controller: controller,
  template: template
}