import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      accounts: Ember.$.getJSON("accounts.json"),
      months: Ember.$.getJSON("months.json")
    });
  }
});
