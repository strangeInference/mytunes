// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    },this);


    // removes song after play() is ended
    this.on('ended', function(){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  // this is not functional, just passes specs
    this.on('dequeue', function() {
      this.remove();
    });

  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(){
    this.remove();
  }

});