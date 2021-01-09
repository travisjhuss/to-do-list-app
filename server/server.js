const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// server public static files
app.use(express.static('server/public'));


// declare PORT and start listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT);
});






// const booksRouter = require('./routes/book.router.js');


// app.use('/books', booksRouter);

