var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');


spotify.search({ type: 'track', query: 'dancing in the moonlight' },
	function(err, data) {
  	if ( err ) {
      console.log('Error occurred: ' + err);
		}
		else {
  		console.log (data.tracks.items);
			var items = data.tracks.items
  	}
		for (i = 0; i < items.length; i++) {
    	console.log(items[i].artist);
		}
  });
