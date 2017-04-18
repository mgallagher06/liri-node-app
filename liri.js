var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');

var twitterKeys = require("./keys.js")

console.log(process.argv)

var value = process.argv[3]

if ("spotify" === process.argv[2]) {

spotify.search({ type: 'track', query: value },
	function(err, data) {
  	if ( err ) {
      console.log('Error occurred: ' + err);
		}
		else {
  		console.log(data.tracks.items);
			var items = data.tracks.items
			for (var i = 0; i < items.length; i++) {
      	for (var j = 0; j < items[i].artists.length; j++) {
					console.log(items[i].artists[j].name);
				}
  	}
		}
  });
} else if ("twitter" === process.argv[2]){
		var client = new Twitter({
				consumer_key: twitterKeys.consumer_key,
				consumer_secret: twitterKeys.consumer_secret,
				access_token_key: twitterKeys.access_token_key,
				access_token_secret: twitterKeys.access_token_secret
	  });

		var params = {screen_name: value};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (error) {
				console.log(error);
			} else {
				console.log (tweets);
			}
		});

		console.log ("You didn't enter the correct term.")
}
