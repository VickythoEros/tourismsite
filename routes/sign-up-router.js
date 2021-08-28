var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/sign-up', { title: 'Tourism|Sign-up' });
   
});




module.exports = router;