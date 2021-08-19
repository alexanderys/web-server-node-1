// The web server was created with the help of Colt Steeles videos on the topic as part of his Udemy course 'The Web Developer Bootcamp 2021'

// requires the express framework
const express = require('express');

// creates an express application, which provides us with a bunch of methods for the web server
const app = express();

// the get() method routes HTTP GET requests to the specified path and allows us to respond with a HTTP response. The following route is the home page (localhost:3000).
app.get('/', (req, res) => {
    res.send('Welcome to this web server!')
})

// when visiting 'localhost:3000/random', a JSON-object is returned with a random number between 0 and 1023
app.get('/random', (req, res) => {
    const tal = Math.floor(Math.random() * 1023) + 1;
    res.send({ number: tal });
})

// when visiting 'localhost:3000/custom_random/num', a JSON-object is returned with a random number between 0 and the specified number in the url. That number is destructured from the request object
app.get('/custom_random/:num', (req, res) => {
    const { num } = req.params;
    const tal = Math.floor(Math.random() * parseInt(num)) + 1;
    res.send({ number: tal });
})

// the following response is sent when 'localhost:3000' is followed by a path not defined in the above get methods.
app.get('*', (req, res) => {
    res.send('Invalid path');
})

// makes the application listen on port 3000 after node is initialized in the terminal.
app.listen(3000, () => {
    console.log('Listening on port 3000');
})