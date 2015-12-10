// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      console.log('adding')
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
    this.on('dequeue', this.dequeue, this);

  // on enqueue... 
  // this.on('enqueue', function(songModel){
  //   console.log('SongQueue listener');
  //   this.enqueue(songModel);
  // }, this); 

  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeue: function(songModel){
    console.log('SongQueue');
    this.remove(songModel);
  },

  // enqueue: function(songModel){
  //   console('SongQueue function')
  //   this.add(songModel);
  // }

});