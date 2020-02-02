// Required depedencies
var express = require('express');
var router = express.Router();
var db = require('../models');

// Create routes

// Index redirect
router.get('/', function(req, res) {
	res.redirect('/index');
});


// selectAll
router.get('/index', function(req, res) {
	console.log("YOu hit index!");
	db.Taco.findAll({}).then(function(data){
		var hbsObject = {taco: data};
		res.render('index', hbsObject);
	});
	// taco.find(function(data) {
	// 	var hbsObject = {taco: data};
	// 	res.render('index', hbsObject);
	// });
});



// insertOne
// router.post('/tacos/insertOne', function(req, res) {
// 	taco.insertOne(['taco_name', 'devoured'], [req.body.name, false], function() {
// 		res.redirect('/index');
// 	});
// });
router.post('/index/create', function(req, res) {
	db.Taco.create({
		taco_name: req.body.taco_name
	}).then(function(data) {
		res.redirect("/");
	});
	});



// updateOne
// router.put('/tacos/updateOne/:id', function(req, res) {
// 	var condition = 'id = ' + req.params.id;
// 	console.log('condition', condition);

// 	taco.updateOne({devoured: req.body.devoured}, condition, function() {
// 		res.redirect('/index');
	router.post("/tacos/update/:id", function(req, req) {
		console.log(req);
		db.Taco.update(
			{
				devoured: true	
			},
			{
				where: {
					id: req.params.id
				}
			}
		).then(function(data) {
			console.log(data);
			res.json("/");
		});
	});

// Export 
module.exports = router;