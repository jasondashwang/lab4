const express = require('express');
const app = express();
const path = require('path');

app.get('/login', function (req, res, next) {
  res.sendFile(path.join(__dirname, './login.html'));
})

app.get('/logout', function (req, res, next) {
  res.redirect('/login');
});

app.get('/home', function (req, res, next) {
  res.sendFile(path.join(__dirname, './home.html'));
})

app.get('/market', function (req, res, next) {
  res.send('<h1>Market Page</h1>');
})

app.get('*', function (req, res, next) {
  res.status(404).send('404 Error: Page not Found');
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
