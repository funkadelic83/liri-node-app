# liri-node-app

LIRI is a language interpretation and recognition interface. It receives a user input to search Spotify for songs, Bands in Town for concerts, or OMDB for movies. It can also read commands from a local text file, "random.txt".

LIRI is a CLI app that uses node to determine the user input. To use LIRI, clone it to your local disk, then open a terminal window and navigate to LIRI's root directory (which will contain liri.js).

You will need your own API key for Spotify, as my API key is not included in this Github repository. You may can get your own API key from Spotify <a href="">here</a>, then add your Spotify ID & Secret to the .env file.

<h3>To search for a song on Spotify, type:</h3>
node liri spotify-this-song <name of song>

example:
node liri spotify-this-song rock around the clock

<h3> To search Bands in Town for concerts, type: </h3>
node liri concert-this <name of band>

example:
node liri concert-this george clinton

<h3>To search OMDB for a movie, type:</h3>
node liri movie-this <name of film>
 
example:
node liri movie-this forrest gump


This application was created by Mike Damanskis as part of the UCLA Web Development Coding Boot Camp.





