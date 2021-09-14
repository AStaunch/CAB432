
function parseAndCreatePage(rsp) {
    let s = "";
   
    s = "total number is: " + rsp.photos.photo.length + "<br/>";

    // http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}_[mstb].jpg
    // http://www.flickr.com/photos/{user-id}/{photo-id}

    rsp.photos.photo[0].server

    for (let i=0; i <  rsp.photos.photo.length; i++) {
        photo = rsp.photos.photo[i];
        t_url = "http://farm" + rsp.photos.photo[i].farm + ".static.flickr.com/" + rsp.photos.photo[i].server + "/" + rsp.photos.photo[i].id + "_" + rsp.photos.photo[i].secret + "_" + "t.jpg";
        p_url = "http://www.flickr.com/photos/" + rsp.photos.photo[i].owner + "/" + rsp.photos.photo[i].id;
        s +=  '<a href="' + p_url + '">' + '<img alt="'+ rsp.photos.photo[i].title + '"src="' + t_url + '"/>' + '</a>';
    }
    
    const appDiv = document.getElementById("app"); 
    appDiv.innerHTML = s; 
} 

const base = "https://api.flickr.com/services/rest/?";
const query = "&method=flickr.photos.search&api_key=c143bfc98487c2503b5209065d40d728&tags=goldenretriever&per-page=50&format=json&media=photos&nojsoncallback=1";
const url = base + query;
fetch(url)
    .then( (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
        
    })
    .then( (rsp) => parseAndCreatePage(rsp))
    .catch(function(error) {
    console.log("There has been a problem with fetch: ",error.message);
    });
