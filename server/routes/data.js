var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.DATABASE_URL);

mongoose.model('Quote', new Schema({
  "quote": String,
  "name": String,
  date: { type: Date, default: Date.now },
  "location": String
}, {collection:'quotes'}));

var Quote = mongoose.model('Quote');

router.get('/all', function(req, res, next){
    return Quote.find({}).exec(function(err, quotes){
        if(err) throw new Error(err);
        res.send(JSON.stringify(quotes));
        //next();
    });
});

router.post('/', function(req, res, next){
    var quote = new Quote({
      quote: req.body.quote,
      name: req.body.name,
      date: req.body.date,
      location: req.body.location
    });

    quote.save(function(err){
        if(err) console.log('save error %s', err);
        res.send(quote.toJSON());
        next();
    });
});

router.delete('/delete:_id', function(req, res, next){
    
    Quote.findById(req.params._id)
        .exec(function(err, entries) {
            // changed `if (err || !doc)` to `if (err || !entries)`
            if (err || !entries) {
                console.log("error or empty...");
                res.statusCode = 404;
                res.send({});
            } else {
                console.log("removing...", err, entries);
                entries.remove(function(err) {
                    if (err) {
                        res.statusCode = 403;
                        res.send(err);
                    } else {
                        res.send({});
                    }
                });
            }
        });
});


module.exports = router;
