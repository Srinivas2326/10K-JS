const images = ["https://tse1.mm.bing.net/th/id/OIP.oezk2xjVErGAtB0TSk5QzwHaEK?pid=Api&P=0&h=220", "https://tse3.mm.bing.net/th/id/OIP.Lhxf8eHBgpKcgusxjQ_2NAHaJI?pid=Api&P=0&h=220", "https://tse3.mm.bing.net/th/id/OIP.1xX4yvvHcM7IhjbfG1tRrQHaEK?pid=Api&P=0&h=220"]
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