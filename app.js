const express = require('express');
const request = require('request');
const app = express()
const bodyParser = require('body-parser');
const api = require("./api")



app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    api.getTrendingMovies()
        .then(movieData => {
            res.render("home", { data: movieData, imageUrl: api.url.baseImgURL });
        })
});

app.post('/results', (req, res) => {
    api.queryMovies(req.body.movieName)
        .then(movieData => {
            res.render("results", { data: movieData, query: req.body.movieName, imageUrl: api.url.baseImgURL });
        })
});


app.listen(3000, function() {
    console.log("Server is up...");
});
