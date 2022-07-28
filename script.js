// https://api.artic.edu/api/v1/artworks/129884
// https://api.artic.edu/api/v1/artworks
var loadArt = function(event) {
    fetch("https://api.artic.edu/api/v1/artworks")
        .then(function (response) {
            return response.json();
        })
        
        .then(function (artResponse) {
            artDisplay = document.querySelector("#artwork");
            
            console.log(artResponse.data);
            artResponse.data.forEach(function (artwork) 
                {
                    artList = document.createElement("ul");
                    artDisplay.appendChild(artList);
                    artData = document.createElement("li");
                    artList.appendChild(artData);
                    artData.innerHTML += artwork.title;
                    console.log(artwork);
                    // artDisplay.innerHTML = artInfo.artworks;
                    
                })
        })
}

var artwork1 = function(event) {
    fetch("https://api.artic.edu/api/v1/artworks/129884")
        .then(function (response) {
            return response.json();
        })
        .then(function (artInfo) {
            firstArt = document.querySelector("#artwork1");
            console.log(artInfo.data);
            artInfo.data(function (picture) {
                artAuthor = document.createElement("p");
                firstArt.appendChild(artAuthor);
                artAuthor.innerHTML = artwork.artist_display;
                artworkPic = document.createElement("img");
                firstArt.appendChild(artworkPic);
                artworkPic.src = picture.image_id;
                console.log(picture);
            })
        })
}

loadArt();

document.addEventListener("readystatechange", loadArt);

artwork1();
document.addEventListener("readystatechange", artwork1);