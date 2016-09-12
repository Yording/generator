var express= require("express");
var router = express.Router();
var users = require('./api/controllers/users.controller');

router.get('/:name',function(req,res){
	console.log(req.params.name);
	res.render('app/index');
});

//Routes User
router.get('/users', users.index);
router.get('/users/:id', users.show);
router.post('/users', users.create);
router.put('/users/:id', users.update);
router.patch('/users/:id', users.update);
router.delete('/users/:id', users.delete);
router.post('/sessions',users.session);

module.exports = router;