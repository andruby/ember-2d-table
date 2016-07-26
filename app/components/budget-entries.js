import Ember from 'ember';

export default Ember.Component.extend({
  matrix: [],

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
