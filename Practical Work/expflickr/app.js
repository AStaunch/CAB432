const express = require('express');
const flickrRouter = require('./routes/flickr');

const app = express();
    
const express = require('express');
const https = require('https');
const logger = require('morgan');
const router = express.Router();
router.use(logger('tiny'));

app.use(mymiddleware());
const hostname = '127.0.0.1';
const port = 3000;
const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (req, res) => {
    const str =  `<html>
     <head>
        <title>Flickr Demo</title>
     </head>
     <body>
        <h1>The Flickr API Demo</h1>
        Usage: http://localhost:3000/search/query/number <br>
        <ul><li>query - corresponds to Flickr tags</li>
        <li>number - max number of results returned</li>
        <li>Example: <a href="http://localhost:3000/search/goldenretriever/100">http://localhost:3000/search/golden-retriever/100</a></li>
        </ul>
     </body>
    </html>`;

    res.writeHead(200,{'content-type': 'text/html'});
    res.write(str);
    res.end();
});

app.use('/search?',flickrRouter); 

app.listen(port, function () {
    console.log(`Express app listening at http://${hostname}:${port}/`);
});
