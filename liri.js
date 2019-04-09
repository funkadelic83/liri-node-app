require("dotenv").config();
var Spotify = require('node-spotify-api')
var keys = require("./keys.js");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");
moment().format();

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
    axios
        .get("https://rest.bandsintown.com/artists/" + searchFor + "/events?app_id=codingbootcamp")
        .then(function (response) {
            dateFormatted = response.data[0].datetime;
            console.log(
                response.data[0].venue.name + "\n" + response.data[0].venue.city + "\n" +
                moment(dateFormatted).format('MM/DD/YYYY')

            );
        }
        )

} else if (command === "spotify-this-song") {
    if (searchFor) {
        spotify
            .search({ type: 'track', query: searchFor })
            .then(function (response) {
                console.log(
                    response.tracks.items[0].artists[0].name + "\n" + response.tracks.items[0].name + "\n" + response.tracks.items[0].external_urls.spotify + "\n" + response.tracks.items[0].album.name
                );
            })
            .catch(function (err) {
                console.log(err);
            });
    } else {
        spotify
            .search({ type: 'track', query: "The Sign Ace of Base" })
            .then(function (response) {
                console.log(
                    response.tracks.items[0].artists[0].name + "\n" + response.tracks.items[0].name + "\n" + response.tracks.items[0].external_urls.spotify + "\n" + response.tracks.items[0].album.name
                );
            })
            .catch(function (err) {
                console.log(err);
            });

    }

} else if (command === "movie-this") {
    if (searchFor) {
        axios.get("http://www.omdbapi.com/?t=" + searchFor + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log(response.data.Title + "\n" + response.data.Year + "\n" + response.data.imdbRating + "\n" + response.data.Ratings[2].Value + "\n" + response.data.Country + "\n" + response.data.Language + "\n" + response.data.Plot + "\n" + response.data.Actors);
            }
        )
    } else {
        searchFor = "Mr. Nobody";
        axios.get("http://www.omdbapi.com/?t=" + searchFor + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log(response.data.Title + "\n" + response.data.Year + "\n" + response.data.imdbRating + "\n" + response.data.Ratings[2].Value + "\n" + response.data.Country + "\n" + response.data.Language + "\n" + response.data.Plot + "\n" + response.data.Actors);
            }
        )
    }

} else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var textSplit = data.split(",");
        command = textSplit[0];
        searchTerm = textSplit[1];

        searchArray = searchTerm.split(" ");
        for (i = 0; i < searchArray.length; i++) {
            searchArray[i] = searchArray[i].replace('"', '');
        };
        searchJoined = searchArray.join("+");
        spotify
            .search({ type: 'track', query: searchJoined })
            .then(function (response) {
                console.log(
                    response.tracks.items[0].artists[0].name + "\n" + response.tracks.items[0].name + "\n" + response.tracks.items[0].external_urls.spotify + "\n" + response.tracks.items[0].album.name
                );
            })
            .catch(function (err) {
                console.log(err);
            });

    })
};