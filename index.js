const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/pages/about.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/pages/contact-me.html');
});
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/pages/404.html');
});

app.listen(port, hostname, () => {
    console.log(`Server is running on port: http://${hostname}:${port}`);
});
