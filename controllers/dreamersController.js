var Dreamer = require('../models/Dreamer');

var dreamersController = {
	index: function(req, res) {
		res.render('dreamers/index');
	},
	create: function(req, res){

		// var dreamer = req.body.dreamer;
		// var username = dreamer.username;
		// var password = dreamer.password;
		//
		// Dreamer.create({username, password}, function(err, dreamer) {
		// 	var id = dreamer._id;
		// 	console.log(id)
		// 	err ? console.log(err) : res.redirect('/dreamers/'+id+'/dreams')
		},
	edit: function(req, res) {
				res.render('dreamers/edit');
	}
};

module.exports = dreamersController;
