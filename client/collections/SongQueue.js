// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    },this);
  },

  playFirst: function(length) {
    console.log('playfirst called!',length, this.models);
    this.at(0).play();
  }

});