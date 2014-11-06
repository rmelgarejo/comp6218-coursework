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

var router = express.Router();

router.get('/questions', function (req, res) {
  // return a list of quesitons
  res.json({
    questions: [
      {
        title: "title"
      }
    ]
  });
});

router.get('/questions/:questionid', function (req, res) {
  // return a specific question
  res.json({
    id: req.params.questionid
  });
});

router.get('/questions/:questionid/comments', function (req, res) {
  // comments for a question
});

router.get('/questions/:questionid/comments/:commentid', function (req, res) {
  // specific comment
});

router.get('/questions/:questionid/answers', function (req, res) {
  // answers for a question
});

router.get('/questions/:questionid/answers/:answerid', function (req, res) {
  // return a specific answer for a specific question
});

router.get('/questions/:questionid/answers/:answerid/comments', function (req, res) {
  // comments for an answer
});

router.get('/questions/:questionid/answers/:answerid/comments/:commentid', function (req, res) {
  // comment for an answer
});

app.use('/api', router);

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});

