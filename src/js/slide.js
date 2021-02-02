window.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    let prevArrow = document.querySelector('.prev');
    let nextArrow = document.querySelector('.next');
    const items = document.querySelectorAll('.slide');

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if ( n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            // item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex -1].style.display = 'flex';
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
});