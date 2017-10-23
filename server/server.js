var express = require('express')
var app = express()

var port = process.env.PORT || 8080;  

app.start = function () {
    return app.listen(port, function () {
        app.emit('started')
        console.log('Example app listening on port 3000!')
    })
}