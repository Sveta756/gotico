function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),  
        overlay = document.querySelector('.overlay'),  
        html = document.querySelector('html'),
        scroll = calcScroll();


    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
            html.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
            document.body.style.marginRight = `${scroll}px`;
            
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        html.style.overflow = '';
        overlay.style.display = 'none';
        document.body.style.marginRight = `0px`;
    });

        
}

function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll'; //добавляем полосу прокрутки
    div.style.visibility = 'hidden'; //скрываем элемент

    document.body.appendChild(div); //добавляем на стр

    let scrollWidth = div.offsetWidth - div.clientWidth; //из полной ширины блока вычитаем ширину без прокрутки
    div.remove(); //удаляем див

    return scrollWidth;
}
 
bindModal('.btn_modalopen', '.modal_one', '.modal_one .modal__close');
