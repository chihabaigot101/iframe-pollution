// import express and make a simple call

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.set('X-Frame-Options', 'SAMEORIGIN');
    res.set('Content-Security-Policy', "frame-src 'self' localhost *.aigotsrl-dev.com;");
    // send the index.html file
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
