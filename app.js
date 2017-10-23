
var express = require('express')
var app     = express()
var port    =   process.env.PORT || 8080;
var expressValidator = require('express-validator')
const routes = require('./routes/test')

// Connect app to library
app.use(expressValidator())

//  Connect all our routes to our application
app.use('/api/v1/test', routes)

// Turn on that server!
app.listen(port, () => {
  console.log('App listening on port' + port)
})