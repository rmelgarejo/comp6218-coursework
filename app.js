var express = require('express');
var orm = require('orm');
var app = express();

app.use(orm.express("sqlite://./data.sqlite", {
    define: function (db, models, next) {
	console.log("creating the question table");
	models.question = db.define("question",{ 
		id        : { type: "serial", key: true },
		question  : { type: "text" }
        }, {
		
	});
        next();
    }
}));

app.get('/', function (req, res) {
	req.models.question.create([
		{ 
			question:	"Qué día es hoy?"
		}],
	function (err, items) {
		console.log("inserting question");
		if (err) {
			console.log(err);
		}
	});
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
	console.log("getting question with id " + req.params.questionid);
	req.models.question.get(req.params.questionid, function (err, question) { 
		if (err) {
			console.log(err);
		}
		res.json(question);
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

