const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; //to track current slide index 

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    //creating DOM Element 
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting images 
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classname 
    slide.className = 'slider';
    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)} % - ${10 * (sliders.length - 2)}px)`;
    }
}
for (let i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    createSlide();
}, 10000);