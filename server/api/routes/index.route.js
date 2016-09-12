var express= require("express");
var router= express.Router();

router.get('/',function(req,res){
	console.log("entra");
		res.render('app/index');
});

module.exports = router;