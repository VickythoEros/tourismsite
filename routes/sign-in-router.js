var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/sign-in', { title: 'Tourism|Sign-in' });
    // res.send('Hello World!')
});




module.exports = router;