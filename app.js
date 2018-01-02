const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const queries = require('./db/queries');
const users = require('./routes/users')
const resolutions = require('./routes/resolutions')



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', users)
app.use('/api/resolutions', resolutions)



app.listen(port, () => {
  console.log(`listening at ${port}`);
})
