const express = require('express');
const imager = require('./imager');

const app = express();
const port = 8080;

const ImgRouter = express.Router('img');
const StatsRouter = express.Router('stats');

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('/')
})

img.get('/:width/:height', (req, res) => {
  let width = req.query.width;
  let height = req.query.width;
  let square = req.query.square;
  let text = req.query.text;
  
})

app.get('/stats', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
