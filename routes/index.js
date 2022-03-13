var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {layout: 'main', title: 'Testing', title2: 'Testing'});
});
router.get('/login', function(req, res, next){
    res.render('login', {layout: 'main', title: 'Testing', title2: 'Testing'});
});
router.get('/signup', function(req, res, next){
    res.render('signup', {layout: 'main', title: 'Testing', title2: 'Testing'});
});

module.exports = router;