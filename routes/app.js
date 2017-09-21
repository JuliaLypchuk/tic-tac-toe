var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  /* var email = '';
  User.findOne({}, function(err, doc) {
   if (err) {
   return res.send('Error!');
   }
   res.render('node', {email: doc.email});
   });
   */

    res.render('index', { title: 'Chat app' });
});

/*
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Admin',
        lastName: 'Admin2',
        password: '1',
        email: email
    });
    user.save().then((user) => {
        console.log(user);
        res.redirect('/');
    });

});*/

module.exports = router;
