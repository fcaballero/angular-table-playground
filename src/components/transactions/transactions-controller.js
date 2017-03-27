export default function TransactionsController(transactionsService, $filter) {
  this.transactions = [];
  this.headers = [
    {key: "created_at", value: "DD-MM-YYYY"},
    {key: "counterparty_name", value: "Counterparty Name"},
    {key: "operation_type", value: "Payment type"},
    {key: "amount", value: "Amount"},
    {key: "attachements", value: "<i class='glyphicon glyphicon-paperclip'></i>"},
  ];

  transactionsService.getAll().then(transactions => {
    this.transactions = transactions.map((transaction) => {
      return Object.assign({}, transaction, {
        'created_at': $filter('date')(transaction.created_at, 'dd-MM-yyyy'),
        attachements: `<div><i class="glyphicon glyphicon-paperclip"></i> ${transaction.attachements.length}</div>`
      });
    });
  });
}