window.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('.icon');
    let headerMenu = document.querySelector('.header__block');
    let scrollHamb = calcScroll();

    function calcScroll() {  //рассчет размера скролла, чтобы контент не скакал 
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    hamburger.addEventListener('click', () => {  //обработчик события
        if(hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            headerMenu.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        } else {
            hamburger.classList.add('active');
            headerMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollHamb}px`;
        }
    });
});