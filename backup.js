var _ = require('lodash');
var express = require('express');
var app = express();
//var tools = require('./functions.js')
var fs = require("fs");
//var filename = "containers.json"
var content = fs.readFileSync("db.json");
content = JSON.parse(content);

app.get('/api/games', function (request, response) {
    var method = 'callback';
    if (request.query.method == "promise") {
        method = 'promise';
    }
//console.log(method);

    if (method == 'callback'){
        fs.readFile(filename, function (err, result) {
            if (err) {
                response.status(500).send("didn't work try another path");
            }
            else {
                var containers = JSON.parse(result);
                //console.log("Output Content : \n"+ array);
                var array = [];

                for (var container in containers) {
                    array.push(new Date(containers[container].created));
                }

                if (!process.env.USE_LODASH)
                    array.sort(function (date1, date2) {
                        if (date1 > date2) return 1;
                        if (date1 < date2) return -1;
                        return 0;
                    });
                else {
                    array = _.sortBy(array, function (value) {
                        //    console.log(value.getTime());
                        return value.getTime();

                    })
                }
                response.send(array);
            }
        });
    }
    else {

    }
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

})