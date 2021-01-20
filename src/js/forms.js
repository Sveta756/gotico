window.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    modalSuccess = document.querySelector('.modal_two'),
    overlay = document.querySelector('#modal-two'),
    close = document.querySelector('.modal_two .modal__close'),
    modal = document.querySelector('#modal_one'),
    phoneInput = document.querySelector('input[name="phone-number"]');


    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/, '');
    });


    const newModal = () => {
        modal.style.display = 'none';
        overlay.style.display = 'block';
        modalSuccess.style.display = 'block';
    };

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        modalSuccess.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    });

    const message = {
        loading: 'Загрузка',
        failure: 'Что-то пошло не так...'
    };


    const postData = async (url, data) => {
        document.querySelector('.class-modal').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const addAttr = () => {
        inputs.forEach( i => {
            i.setAttribute('autocomplete', 'off');
        });
    };

    addAttr();

    form.forEach( item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('class-modal');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('server/server.php', formData)
                .then(res => {
                    console.log(res);
                    // statusMessage.innerHTML = message.success;
                    newModal();
                    // bindModal('.btn_submit', '.modal_two', '.modal_two .modal__close');
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
    
});
 
    
// };
