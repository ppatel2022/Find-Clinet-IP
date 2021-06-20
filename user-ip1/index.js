var http = require('http');
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');

});

server.listen(port, hostname, () => {
    console.log('Server started on port '+port);
});

