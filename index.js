var _ = require('lodash');
var express = require('express');
var app = express();
//var tools = require('./functions.js')
var fs = require("fs");
var filename = __dirname+"/db.json";
//var content = fs.readFileSync("db.json");
//content = JSON.parse(content);

app.get('/api/games', function (request, response) {
console.log(request.query.id);
    if (request.query.id !== undefined) {
        var gameId=request.query.id;
        console.log(gameId);
    }

    fs.readFile(filename, function (err, result) {
        if (err) {
            response.status(500).send("didn't work try another path");
        }
        else {
            var db = JSON.parse(result);
            //console.log("Output Content : \n"+ array);
            if (gameId != undefined) {
                _.forEach(db.games, function (value) {
                    if (value.gameId.match(gameId)) {
                        response.send(value);
                    }
                })
            }
            else {
                response.send(db.games);
            }
        }
    });

});

app.get('/api/users', function (request, response) {
    console.log(request.query.id);
    if (request.query.id !== undefined) {
        var userId=request.query.id;
        console.log(userId);
    }

    fs.readFile(filename, function (err, result) {
        if (err) {
            response.status(500).send("didn't work try another path");
        }
        else {
            var db = JSON.parse(result);
            //console.log("Output Content : \n"+ array);
            if (userId != undefined) {
                _.forEach(db.users, function (value) {
                    if (value.userId.match(userId)) {
                        response.send(value);
                    }
                })
            }
            else {
                response.send(db.users);
            }
        }
    });

});

app.get('/api/sports', function (request, response) {
    console.log(request.query.id);
    if (request.query.id !== undefined) {
        var sportId=request.query.id;
        console.log(sportId);
    }

    fs.readFile(filename, function (err, result) {
        if (err) {
            response.status(500).send("didn't work try another path");
        }
        else {
            var db = JSON.parse(result);
            //console.log("Output Content : \n"+ array);
            if (sportId != undefined) {
                _.forEach(db.sports, function (value) {
                    if (value.sportId.match(sportId)) {
                        response.send(value);
                    }
                })
            }
            else {
                response.send(db.sports);
            }
        }
    });

});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

})