var request = require("request")


var api = {}


api.url = {
    apiKey: "?api_key=[ ENTER API KEY HERE ]",
    baseURL: "https://api.themoviedb.org/3/",
    baseImgURL: "https://image.tmdb.org/t/p/original/",
    movieParams: "trending/movie/week",
    searchParams: "search/movie"
}

api.getTrendingMovies = function() {
    return new Promise((resolve) => {
        var movieURL = api.url.baseURL + api.url.movieParams + api.url.apiKey
        request(movieURL, function(err, response, body) {
            if (!err && response.statusCode === 200) {
                var parsedData = JSON.parse(body)
                resolve(parsedData)
            }
        })
    })
}

api.queryMovies = function(query) {
    return new Promise(resolve => {
        var queryURL = api.url.baseURL + api.url.searchParams + api.url.apiKey + "&query=" + query
        request(queryURL, function(err, response, body) {
            if (!err && response.statusCode === 200) {
                var parsedData = JSON.parse(body)
                resolve(parsedData)
            }
        })
    })
}


module.exports = api
