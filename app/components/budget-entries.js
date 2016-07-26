import Ember from 'ember';

export default Ember.Component.extend({
  matrix: [],
  accounts: [],

  chunkSize: 30,

  addChunkToAccounts: function() {
    var allAccounts = this.get('allAccounts'),
        accounts = this.get('accounts'),
        chunkSize = this.get('chunkSize'),
        accountsLength = accounts.length;
    if(accountsLength < allAccounts.length) {
      accounts.pushObjects(allAccounts.slice(accountsLength, accountsLength+chunkSize));
      Ember.run.next(this, this.addChunkToAccounts);
    }
  }.on('init'),

  actions: {
    oninput(account, month, event) {
      var val = event.target.value;
      var matrix = this.get('matrix');
      var previous = matrix.find(function(item) {
        return (item.account === account.number && item.month === month.name);
      });
      if(previous) {
        matrix.removeObject(previous);
      }
      matrix.pushObject({account: account.number, month: month.name, value: val});
    }
  }
});
