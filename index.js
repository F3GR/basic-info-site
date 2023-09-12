const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = './pages/';
    switch (req.url) {
        case '/': {
            path += 'index.html';
            break;
        }
        case '/about': {
            path += 'about.html';
            break;
        }
        case '/contact': {
            path += 'contact-me.html';
            break;
        }
        default: {
            path += '404.html'
        }
    }
    res.setHeader('Content-type', 'text/html');
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
}).listen(8080);
