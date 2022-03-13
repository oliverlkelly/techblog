var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {layout: 'main', title: 'Testing', title2: 'Testing'});
});

module.exports = router;