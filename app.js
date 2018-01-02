const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const queries = require('./db/queries');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.listen(port, () => {
  console.log(`listening at ${port}`);
})
