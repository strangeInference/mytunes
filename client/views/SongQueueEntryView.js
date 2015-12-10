// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  // we need a click listener for dequeue here (user input)
  events: {
    'click td': 'dequeue',
  },

  // calling dequeue function on song model
  dequeue: function(){
    console.log('SongQueueEntryView');
    this.model.dequeue();
  },


  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

});
