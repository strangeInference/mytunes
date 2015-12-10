// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    console.log('SongModel');
    this.trigger('ended', this);
  },

  dequeue: function() {
    //console.log('SongModel');
    this.trigger('ended dequeue', this);
  },

  enqueue: function() {
    //console.log('SongModel');
    this.trigger('enqueue', this)
  }

});
