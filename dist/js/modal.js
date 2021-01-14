// const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),  
            overlay = document.querySelector('.overlay'),  
            scroll = calcScroll(),
            windows = document.querySelectorAll('[data-modal]'); 

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                overlay.style.display = 'block';
                document.body.style.marginRight = `${scroll}px`;
                
            });
        });

        close.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            overlay.style.display = 'none';
            document.body.style.marginRight = `0px`;
            //
        });

         
    };

    function calcScroll() {
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


    bindModal('.btn_modalopen', '.modal_one', '.modal_one .modal__close');
    // bindModal('.btn_modal', '.modal_two', '.modal_two .modal__close');
    
    
// };