//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//Create database
const db = require('./config/mongoose');

//Require model
const Comment = require('./models/comment');

//Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Set up static files
app.use(express.static('assets'));

//Parse form data
app.use(express.urlencoded());

//Use express router
app.use('/', require('./routes'));

//Listen to port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});