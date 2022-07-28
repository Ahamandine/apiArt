// https://collectionapi.metmuseum.org/public/collection/v1/departments

var metMuseum = function(event) {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments")
        .then(function (response) {
            return response.json();
        })

        .then(function (metResponse) {
            metList = document.querySelector("#departmentList")

            console.log(metResponse);
            metResponse.departments.forEach(function (departmentList) 
            {
                department = document.createElement("li");
                metList.appendChild(department);
                department.innerHTML += departmentList.displayName;
                console.log(department);

            })
        })
}

metMuseum();

document.addEventListener("readystatechange", metMuseum);

var oneArtwork = function(event) {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/437133")
        .then(function (response) {
            return response.json();
        })
        .then(function (artworkResponse) {
            artworkDisplay = document.querySelector("#oneArtwork")
            artworkResponse.tags.forEach(function (tagList)
            {
                tags = document.createElement("div");
                artwordDisplay.appendChild(tags);
                tags.innerHTML += tagList.tags.term;
            })
        })
}

oneArtwork();
document.addEventListener("readystatechange", oneArtwork);

