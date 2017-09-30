// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

const dateOptions = {
  month: "long",
  day: "numeric",
  year: "numeric"
}

app.get("/:date", function (req, res) {
  let pdate = req.params.date;
  const date = new Date(isNaN(parseInt(pdate)) ? pdate : pdate*1000);
  if (date.getTime() < 0) res.send({"unix": null, "natural": null});
  else {
    const unix = Math.floor(date.getTime() / 1000);
    res.send({unix, natural: date.toLocaleDateString("en-us", dateOptions)});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
