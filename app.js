const express = require('express');

const app = express();
const port = 5000;

app.get('/task', function (req, res) {
    res.send('GET');
});

app.post('/task', function (req, res) {
    const body = req.body;
    console.log(body);
    res.send('POST');
});

app.listen(port, () => {
    console.log('APP running on port: ' + port);
});