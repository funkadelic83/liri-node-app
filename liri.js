require("dotenv").config();
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var arguments = process.argv;
var command = arguments[2].toLowerCase();
var searchFor = "";

for (var i = 3; i < arguments.length; i++) {
    if (i > 3 && i < arguments.length) {
        searchFor = searchFor + "+" + arguments[i];
    }
    else {
        searchFor += arguments[i];
    }
}


if (command === "concert-this") {
    console.log(searchFor);
} else if (command === "spotify-this-song") {

// https://www.npmjs.com/package/node-spotify-api

spotify
  .search({ type: 'track', query: searchFor })
  .then(function(response) {
    console.log(
        // response.tracks.items[0],
        response.tracks.items[0].artists[0].name, //artist name
        response.tracks.items[0].name, //song name
        response.tracks.items[0].external_urls.spotify, //preview link
        response.tracks.items[0].album.name, //album name
        );
  })
  .catch(function(err) {
    console.log(err);
  });


} else if (command === "movie-this") {
    if (searchFor === "") {
        searchFor = "Mr. Nobody";
        console.log(searchFor);
    } else {
    axios.get("http://www.omdbapi.com/?t=" + searchFor + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
            console.log(response.data.Title, response.data.Year, response.data.imdbRating,
            response.data.Ratings[2].Value,
            response.data.Country,
            response.data.Language,
            response.data.Plot,
            response.data.Actors);
        }
    )}
} else if (command === "do-what-it-says") {
    console.log("Do What it says");
};


