const http = require('http'); 

const hostname = '127.0.0.1'; 
const port = 2798; 

const server = http.createServer((req, res) => { 
	res.statusCode = 200; 
	res.setHeader('Content-Type', 'text/plain'); 
	res.end('Hello World\n'); 
}); 

server.listen(port, hostname, () => { 
   console.log(`Server running at http://${hostname}:${port}/`); 
}); 

//https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=c143bfc98487c2503b5209065d40d728&tags=golden-retriever&per-page=50&format=json&media=photos&nojsoncallback=1
/*
{
	photos: {}
	stat: "ok"
}

photos: {
	page: 1,
	pages: 1567,
	perpage: 100,
	total: "156681",
	photo: [
		{
		id: "9403006062",
		owner: "97823106@N05",
		secret: "96a96106cb",
		server: "3682",
		farm: 4,
		title: "Instagram Photo -- Follow us @redbarninc",
		ispublic: 1,
		isfriend: 0,
		isfamily: 0
		},
		{
		id: "9402178630",
		owner: "87199074@N05",
		secret: "99e1d32064",
		server: "3802",
		farm: 4,
		title: "Whisper's First Front Cover Appearance! :)",
		ispublic: 1,
		isfriend: 0,
		isfamily: 0
	},
*/