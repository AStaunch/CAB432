// load http module
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 2801;

// create http server
http.createServer((req, res) => {
    // open and read in the simple helloworld server
    fs.readFile('simple.js', 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
	if (err) {
	    res.write('Could not find or open file for reading\n'); 
	} else {
	    // if no error, write JS file to client
	    res.write(data);
	    res.end();
	    console.log('Hello World Served');
	}

    });
}).listen(port, () => { console.log(`Server listening on port:${port}`); });

console.log(`Server running on http://${hostname}:${port}/`);
