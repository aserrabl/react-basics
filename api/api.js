// /* eslint no-console: 0 */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const buffer = fs.readFileSync('./api/stats.json');
const statsObj = JSON.parse(buffer);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/stats', (req, res) => {
  setTimeout(() => res.json(statsObj), Math.floor(Math.random() * 1000));
});

app.get('/offers/:id', (req, res) => {
  const offer = statsObj.offers.find(item => {
    return item.id === parseInt(req.params.id);
  });

  if (offer) {
    setTimeout(() => res.json(offer), Math.floor(Math.random() * 1000));
  }
  else {
    res.status(404)
      .json({error: 'Offer not found'});
  }
});

console.log(`Starting server on port 4000`);
app.listen(4000);
