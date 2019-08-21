// requirements and PORT
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
// public folder
app.use(express.static('app/public'));
//routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT,function(){
    console.log("app Listening " + PORT)
})