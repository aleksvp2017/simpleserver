var express = require('express') 
var app = express()

//so we can read request data
app.use(express.urlencoded({ extended: true})) 
app.use(express.json())


var Routes = require('./routes.js')
Routes.routes.map(route => {
    app[route.httpmethod](route.uri, route.component[route.method])
})

//you can set and environment variable and use process.env.PORT instead
var port = 3001
app.listen(port, () => { console.log('Server up and listening at ' + port)})
