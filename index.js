const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  console.log('Serving authentication page...')
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  if(username && password) {
    if (username === 'abh' && password === 'abhpw') {
      res.status(200);
      return res.send("<script>alert('Success!');</script>");
    } else {
      res.status(400);
      return res.send("<script>alert('Wrong credentials!');</script>");
    }
  } else {
    res.status(400);
    res.send("<script>alert('Please enter username and password!');</script>");
  }
});

app.get('/', function(req, res) {
  res.send("shorts");
})

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
