var mongoose= require("mongoose");
var Schema= mongoose.Schema;
// var config= require("../../config/gulp.config");

mongoose.connect("mongodb://localhost/wedevjs");

var gender=["M","F"];
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Format email is not validate."];
var password_validator={
	validator: function(p){
		return this.password_confirmation==p;
	},
	message: "The password and Password confirmation no match"
};

var user_schema= new Schema({
	name:{
		type: String,
	},
	last_name:{
		type: String,
	},
	username:{
		type: String,
		required: true,
		maxLength: [20,"The username requires a maximium 20 characters."],
		unique: true
	},
	password:{
		type: String,
		minLength: [8,"The password requires a minimum 8 characters."],
		required: [true,"El campo es requerido"],
		validate: password_validator
	},
	email:{
		type: String,
		match:email_match,
		required:[true,"The email is required."],
		unique: true
	},
	gender:{
		type: String,
		enum: {
			values:gender,
			message: "This option is not validate."
		}
	},
	phone:{
		type: String
	},
	profile_image:{
		type: String 
	},
	birth_of_date:{
		type: Date
	},
	created:{
		type: Date,
		default: Date.now
	}
});

//virtuals

user_schema.virtual("password_confirmation")
	.get(function(){
		return this.password_c;
	})
	.set(function(password){
		this.password_c=password;
	});


var User=mongoose.model("User",user_schema);

module.exports = User;