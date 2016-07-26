import Ember from 'ember';

export default Ember.Component.extend({
  matrix: null,
  account: null,

  sum: Ember.computed('matrix.@each', 'account.number', function() {
    var sum = 0,
        accountNumber = this.get('account.number'),
        matrix = this.get('matrix');

    matrix.forEach(function(object) {
      if(object.account === accountNumber) {
        sum = sum + parseInt(object.value);
      }
    });
    if (sum === 0) {
      return "";
    } else {
      return sum;
    }
  })
});
