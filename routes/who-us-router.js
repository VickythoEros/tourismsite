var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/who-us', { title: 'Tourism|Who-us' });
    // res.send('Hello World!')
});




module.exports = router;