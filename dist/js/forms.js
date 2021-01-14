window.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    modalSuccess = document.querySelector('#modal_two'),
    modal = document.querySelector('#modal_one'),
    phoneInput = document.querySelector('input[name="phone-number"]');


    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/, '');
    });



    const message = {
        loading: 'Загрузка',
        success: modalSuccess,
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
                    modal.style.display = 'none';
                    statusMessage.innerHTML = message.success;
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