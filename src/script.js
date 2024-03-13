function fetchImage() {
    fetch('https://api.github.com/users/jamespharis', {
        method: 'GET',
    })
    .then(response => response.JSON())
    .then(data => { 
        const imageUrl = data.avatarURL;
        const imageElement = document.createElement("img");
        // imageElement.innerHTML = imageUrl;
        // const container = document.getElementById("image-container");
        // container.appendChild(imageElement);
        document.getElementById("image-container") = imageUrl;
        // container.innerHTML(<img src='imageUrl'/>)
    })
    .catch(error => console.error(error));
}
