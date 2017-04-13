var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');



// node liri.js do-what-it-says
var request = require('request');
request('random.txt', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  console.log('body:', body); // Print the HTML for the Google homepage. 
});