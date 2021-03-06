const express = require('express');
const bodyParser = require('body-parser');
const mailHelper = require('./helpers');

const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('view engine', 'ejs');
  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', (req, res) => res.render('pages/index'))

app.post('/calculate', (req, res) => {
  console.log(req.body);
  const { weight, mail} = req.body;
  
  const mailPrice = mailHelper[mail].getPrice(parseInt(weight));
  const mailName = mailHelper[mail].name;
  res.render('pages/result', {
    mailPrice,
    mailName,
    weight
  })
})
