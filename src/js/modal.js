// const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),  
            overlay = document.querySelector('.overlay');      

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                // windows.forEach(item => {
                //     item.style.display = 'none';
                // });
    
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                overlay.style.display = 'block';
                
            });
        });

        close.addEventListener('click', () => {

            // windows.forEach(item => {
            //     item.style.display = 'none';
            // });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            overlay.style.display = 'none';
            //
        });

         
    };


    bindModal('.btn', '.modal_one', '.modal_one .modal__close');
// };