var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/gallery', { title: 'Tourism|Gallery' });
    
});




module.exports = router;