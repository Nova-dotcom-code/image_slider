const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
imageWidth = images[0].clientWidth

function slideNext(){
    counter++
    if(counter>=images.length){
        counter = 0;
    }
    slider.style.transform = `translate(${-imageWidth * counter}px)`;
}