function parseAndCreatePage(rsp) {
    let s = "";

    s = "total number is: " + rsp.photos.photo.length + "<br/>";

    // http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}_[mstb].jpg
    // http://www.flickr.com/photos/{user-id}/{photo-id}

    rsp.photos.photo[0].server

    for (let i = 0; i < rsp.photos.photo.length; i++) {
        photo = rsp.photos.photo[i];
        t_url = "http://farm" + rsp.photos.photo[i].farm + ".static.flickr.com/" + rsp.photos.photo[i].server + "/" + rsp.photos.photo[i].id + "_" + rsp.photos.photo[i].secret + "_" + "t.jpg";
        p_url = "http://www.flickr.com/photos/" + rsp.photos.photo[i].owner + "/" + rsp.photos.photo[i].id;
        s += '<a href="' + p_url + '">' + '<img alt="' + rsp.photos.photo[i].title + '"src="' + t_url + '"/>' + '</a>';
    }

    const appDiv = document.getElementById("app");
    appDiv.innerHTML = s;
}

const str = 'XXXX';

const express = require('express');
const https = require('https');
const router = express.Router();
router.get('/:query/:number', (req, res) => {
    const options = createFlickrOptions(req.params.query, req.params.number);
    const flickReq = https.request(options, (flickRes) => {
        //This is the body of the callback for dealing with the results
        //from the Flickr API. We will assemble the response as it comes in,
        //parse it like we did last week and create the page.
    });
    flickReq.on('error', (e) => {
        console.error(e)
    });
    flickReq.end();
});

const flickr = {
    method: 'flickr.photos.search',
    api_key: "c143bfc98487c2503b5209065d40d728",
    format: "json",
    media: "photos",
    nojsoncallback: 1
};
function createFlickrOptions(query, number) {
    const options = {
        hostname: 'api.flickr.com',
        port: 443,
        path: '/services/rest/?',
        method: 'GET'
    }
    const str = 'method=' + flickr.method +
        '&api_key=' + flickr.api_key +
        '&tags=' + query +
        '&per_page=' + number +
        '&format=' + flickr.format +
        '&media=' + flickr.media +
        '&nojsoncallback=' + flickr.nojsoncallback;
    options.path += str;
    return options;
}
function parsePhotoRsp(rsp) {
    // Re-used from last week’s exercise
}
function createPage(title, rsp) {
    // Re-used from last week’s exercise
}
module.exports = router;



/*

*/

