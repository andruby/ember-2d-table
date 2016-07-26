import Ember from 'ember';

export default Ember.Component.extend({
  matrix: {},

  actions: {
    oninput(account, month, event) {
      var val = event.target.value;
      var matrix = this.get('matrix');
      if(!matrix[month.name]) {
        matrix[month.name] = {};
      }
      matrix[month.name][account.number] = val;
      this.set('matrix', matrix);

      console.log(matrix);
    }
  }
});
