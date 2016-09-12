var User= require("../models/user");

module.exports = {
	index: function(req,res){
		User.find({},function(err,user){
			return res.status(200).json(user);
		});
	},
	show: function(req,res){
		User.findById(req.params.id,function(err,user){
			if(user!=null){
				res.status(200).json(user);
			}
			else{
				res.status(404).end();
			}	
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
				if(user!=null){
					res.status(200).json(user);
				}
				else{
					res.status(404).end();
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
	},
	session: function(req,res){
		User.findOne({
			email: req.body.email,
			password: req.body.password
		},function(err,user){
			if(user!=null){
				req.session.user_id=user._id;
				res.status(200).json(user);
			}
			else{
				res.status(404).end();
			}
		});
	}
};