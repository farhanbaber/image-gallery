
let mainimg = document.getElementById("mainimg");
let thumbnail = document.querySelectorAll(".thumbnail")
thumbnail.forEach(thumbnail => {
    thumbnail.addEventListener("click" , function () {
        mainimg.alt = this.alt;
        mainimg.src = this.src;
    })
    
});