var User= require("../models/user");

module.exports = {
	index: function(req,res){
		User.find({},function(err,user){
			return res.status(200).json(user);
		});
	},
	show: function(req,res){
		User.findById(req.params.id,function(err,user){
			if(!user){
				return res.status(404).end();
			}
			res.status(200).json(user);
		});
	},
	create: function(req,res){
		var user= new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			password_confirmation: req.body.password_confirmation
		});
		user.save(function(err,user){
			if(!err){
				if(!user){
					res.status(404).end();
				}
				else{
					res.status(200).json(user);
				}
			}
			else{
				console.log(err);
				res.status(400).json(err);
			}
			
		});
	},
	update: function(req,res){
		console.log(req.body);
	},
	delete: function(req,res){
		User.findOneAndRemove({_id:req.params.id},function(err,user){
			console.log(user);
		});
	}
};