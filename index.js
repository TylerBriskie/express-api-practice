const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const knex = require("./db/knex");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, function(){
  console.log("listening on port 3000")
});

app.get('/song', function(req, res, next){
  knex('song').then(function(songs){
    res.json(songs);
  });
})

app.get('/song/:id', function(req, res, next){
  knex('song').where('id', req.params.id).first().then(function(song){
    res.json(song);
  });
})

app.post('/song', function(req, res, next){
  let newSong = {
    name: req.body.name,
    times_played: req.body.times_played,
    rating: req.body.rating,
  };
  knex('song').insert(newSong).returning('id').then(function(id){
    newSong.id = id[0];
    res.json(newSong);
  });
})
