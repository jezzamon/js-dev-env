import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

/* No webpack compiler or webpack middleware in this as its handled by build.js*/
app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req,res) {
  res.json([
    {"id": 1,"firstName": "Jerry", "lastName": "Smith", "email": "jerrelunia@gmail.com"},
    {"id": 2,"firstName": "Berry", "lastName": "Smith", "email": "jerrelunia@gmail.com"},
    {"id": 3,"firstName": "Muffin", "lastName": "Smith", "email": "jerrelunia@gmail.com"},
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    //open('http://localhost:' + port);
    console.log('listening on port ' + port);
  }
});
