# liri-node-app

LIRI is a language interpretation and recognition interface. It receives a text input from the user to search Spotify for songs, Bands in Town for concerts, or OMDB for movies. It can also read commands from a local text file, "random.txt". 

LIRI is a CLI app that uses node to determine the user input. To use LIRI, clone it to your local disk, then open a terminal window and navigate to LIRI's root directory (which will contain liri.js).

You will need your own API key for Spotify, as my API key is not included in this Github repository. You may can get your own API key from Spotify.

[Spotify for Developers] (https://developer.spotify.com/my-applications/#!/login)

Then edit the .env file to add your Spotify ID & Secret.

### [Watch a demo of this project] (https://drive.google.com/file/d/1KtmHhgqHD8-rvzD1EKxHdnMwQFIl64OL/view?usp=sharing)

### To search for a song on Spotify, type:
node liri spotify-this-song (name of song)

example:
node liri spotify-this-song rock around the clock

### To search Bands in Town for concerts, type:
node liri concert-this (name of band)

example:
node liri concert-this george clinton

### To search OMDB for a movie, type:
node liri movie-this (name of film)
 
example:
node liri movie-this forrest gump

### To perform a search based on the contents of the "random.txt" file:
node liri do-what-it-says

LIRI requires the following packages, which are listed in the project's package.JSON file:
* Axios 0.18.0 (to search OMDB for movies, or Bands In Town to search for concerts)
* Node-Spotify-Api 1.0.7
* dotenv 7.0.0
* jquery 3.3.1
* moment 2.24.0

This application was created by Mike Damanskis as part of the UCLA Web Development Coding Boot Camp. I can be reached at MikeDamanskis@gmail.com.
