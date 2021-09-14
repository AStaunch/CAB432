/* This is example 2-4 from Learning Node, used to show events */
/* updated to use const */
const http = require('http');

const hostname = '127.0.0.1';
const port = 2799;

const server = http.createServer();

server.on('request', (request, response) => {

   console.log('request event');

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
});

server.on('connection', () => {
   console.log('connection event');
});

server.listen(port, () => {

   console.log('listening event');
});

console.log(`Server running at http://${hostname}:${port}/`);
