var express = require('express');
var orm = require('orm');
var app = express();

app.use(orm.express("sqlite://./data.sqlite", {
    define: function (db, models, next) {
        next();
    }
}));

app.get('/', function (req, res) {
    res.send('Hello World!')
});

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});

