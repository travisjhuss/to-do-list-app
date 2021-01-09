const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/todo_list.router')

const app = express();
// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));
// use imported routes 
app.use('/tasks', taskRouter);

// server public static files
app.use(express.static('server/public'));


// declare PORT and start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT);
});



