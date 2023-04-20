const http = require('http');

var name = 'Cindy Correa';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`This is my name: ${name}`)
        res.end();
    }

    if (req.url === '/sayhello') {
        res.write(`Hello, ${name}! Welcome to my server!`)
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

