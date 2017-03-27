import transactionTableModule from './transaction-table';
import transactionsComponent from './transactions-component';
import transactionsService from './transactions-service';

export default angular.module('my-app.transactions',
  [
    transactionTableModule.name
  ])
  .component('transactions', transactionsComponent)
  .service('transactionsService', transactionsService);