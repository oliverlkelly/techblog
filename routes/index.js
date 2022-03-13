var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index', {layout: 'main', title: 'Testing'});
});
router.get('/login', function(req, res){
    res.render('login', {layout: 'main', title: 'Testing'});
});
router.get('/signup', function(req, res){
    res.render('signup', {layout: 'main', title: 'Testing'});
});

module.exports = router;