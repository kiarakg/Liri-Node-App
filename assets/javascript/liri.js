// Read and set environment variables
require("dotenv").config();

// Vars
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Vars to capture user inputs
var userOption = process.argv[2];
var inputParameter = process.argv[3];

// Execute function
UserInputs(userOption, inputParameter);

// Functions
function UserInputs (userOption, inputParameter) {
    switch (userOption) {
        case 'concert-this':
            showConcertInfo(inputParameter);
            break;
        case 'spotify-this-song':
            showSongInfo(inputParameter);
            break;
        case 'movie-this':
            showMovieInfo(inputParameter);
        case 'do-what-it-says':
            showSomeInfo();
            break;
        default:
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
            
    }
}