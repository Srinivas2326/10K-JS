const images = ["https://tse1.mm.bing.net/th/id/OIP.UsZog-cKU-GZfSIbwGvGxgHaE8?pid=Api&P=0&h=220", "https://tse4.mm.bing.net/th/id/OIP.bTy48etGl37WlfBPdpsIQgHaEK?pid=Api&P=0&h=220", "https://tse2.mm.bing.net/th/id/OIP.qRlLckdezLVZLd8SUvADhwHaDt?pid=Api&P=0&h=220"]
let currentIndex = 0;


const sliderImage = document.getElementById("sliderImage");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");


function updateImage () {
    sliderImage.src = images[currentIndex];
}


prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex-1 + images.length) % images.length
    updateImage()
})


nextButton.addEventListener("click", ()=> {
    currentIndex = (currentIndex + 1) % images.length
    updateImage()
})