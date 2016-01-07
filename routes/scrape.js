/**
 * Created by s955281 on 12/25/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
    //the target url that we are going to scrape
    url = 'http://www.imdb.com/title/tt1229340/';
    //url = 'http://archilife.org';
    request(url, function(err, res, html){
        console.log('fetching data...');
        if(!err){
            console.log('analyzing data...');
            var $ = cheerio.load(html);
            var title, release, rating;
            var json = { title:"", release:"", rating:""};
            //start from an unique header class
            $('.header').filter(function(){
                //see what is in the filtered content
                console.log('filtering data...');
                var data = $(this);
                console.log(data);
                console.log('=====');
                console.log(data.children());
                title = data.children().first().text();
                release = data.children().last().children().text();
                json.title = title;
                json.release = release;

            });
            $('.star-box-giga-star').filter(function(){
                var data = $(this);
                rating = data.text();
                json.rating = rating;
                console.log(data);
                console.log('-----');
                console.log(rating);
            });

        }
        else{
            console.log(err);
        }
    });
    res.render('scrape', {title:"Hello World"});
});



module.exports = router;
