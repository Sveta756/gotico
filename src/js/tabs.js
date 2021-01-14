window.addEventListener('DOMContentLoaded', function() {

let tab = document.querySelectorAll('.menu__tab'),
        info = document.querySelector('.menu__tabs'),
        tabContent = document.querySelectorAll('.menu__content');


function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('menu__active');
    }
}

hideTabContent(1);  //скрываются все табы кроме 1


// открываем блоки с инфой, когда нужно

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
        tab[b].classList.add('menu__active');
    }
}


// при нажатии на табы меню, появляется разный контент 

info.addEventListener('click',function(event) {
    let target = event.target;
    if (target && target.classList.contains('menu__tab')) {
        for(let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            } 
        }
    }
});

});