/**
 * Created by s955281 on 1/17/16.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');


router.get('/', function(req, res){
   res.render('archi');
});

router.post('/', function(req, res){
    console.log('post data to /users')
    var url = "http://localhost:3000/users";
    request.post({
        url: url,
        body:'uid=ofa',
        form: {uid:'1999', pwd:'123'}
    }, function(err, response, body){
        console.log('res:' + body);

    });
    res.redirect('/');
});

module.exports = router;
