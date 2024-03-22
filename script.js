const api = "https://api.waifu.im/search";

const apiImgElem = document.getElementById("waifu-image-js");
const seeMoreBtn = document.querySelector(".see-more-btn-js");
const pictureContainerElem = document.querySelector(".picture-container-js");

seeMoreBtn.addEventListener("click", ()=>{
    imgLimiter += 10;
})



let imgCount = 0;
let imgLimiter = 16;

setInterval(()=> {
    if(imgCount <= imgLimiter){
        waifuCollection()
        imgCount++
    }
}, 100);



function waifuCollection(){
    fetch("https://api.waifu.im/search")
    .then(response => {
        if (!response.ok){
            throw "couldn't fetch";
        }

        return response.json();
    })
    .then(data => {
        const waifuPicture = data.images[0].url;
        const waifuImagesHTML = `<img class="anime-waifu-picture" id="waifu-image-js" src="${waifuPicture}" alt="anime waifu images"/>` 
        pictureContainerElem.innerHTML += waifuImagesHTML; 
    })
    .catch(error => console.error(error))
}

function show_image(img) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
}