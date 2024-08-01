const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('img');
const previousButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let activeSlide = 0;

const displaySlide = index => {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

const nextSlide = () => {
    activeSlide = (activeSlide + 1) % slides.length;
    displaySlide(activeSlide);
}

const previousSlide = () => {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    displaySlide(activeSlide);
}

// Timeout that advances the slides, every 5 seconds
setInterval(nextSlide, 5000);

