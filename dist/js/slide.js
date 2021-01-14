let slideIndex = 1;
let prevArrow = document.querySelector('.prev');
let nextArrow = document.querySelector('.next');

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("interior__slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}


prevArrow.addEventListener('click', (e) => {
    e.preventDefault();
    showSlides(slideIndex -= 1);  
});

nextArrow.addEventListener('click', (e) => {
    e.preventDefault();
    showSlides(slideIndex += 1);
});

showSlides(slideIndex);