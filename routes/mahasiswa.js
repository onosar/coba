var express = require('express')
var router = express.Router()
var User = require('../models/mahasiswa')

router.get('/insert', function(req, res ) {
	User
		.find({})
		.exec(function(err, mahasiswa) {
			res.render('form',{data: mahasiswa})
		})

  
})

router.post('/insert', function (req, res) {
  var name = req.body.name
  var age = req.body.age

  var newUser = new User({
    name: name,
    age: age
  })

  newUser.save(function(err, saveUser){
    var userId = saveUser._id
    res.redirect('/mahasiswa/insert/' )
  })
})
// catch 404 and forward to error handler
// router.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

module.exports = router;