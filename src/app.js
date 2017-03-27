import './app.scss';
import ngRoute from 'angular-route';
import transactionsModule from './components/transactions';

angular.module('my-app', [
  transactionsModule.name,
  ngRoute])
  .config(($routeProvider, $sceProvider) => {
    $sceProvider.enabled(false);
    // $routeProvider.when('/', {})
    //   .when('/transactions', {})
    //   .otherwise('/');
  });

