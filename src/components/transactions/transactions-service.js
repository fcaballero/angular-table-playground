const TRANSACTIONS_API = 'http://private-5d708-interviewfront.apiary-mock.com/transactions';

export default function ($http) {
  this.getAll = () => $http.get(TRANSACTIONS_API).then(res => res.data.transactions);
}