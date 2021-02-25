window.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    modalSuccess = document.querySelector('.modal_two'),
    overlay = document.querySelector('#modal-two'),
    html = document.querySelector('html'),
    close = document.querySelector('.modal_two .modal__close'),
    modal = document.querySelector('#modal_one'),
    phoneInput = document.querySelector('input[name="phone-number"]');


    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/, '');
    });  //в поле с телф можно вводить только цифры


    const newModal = () => { //скрываю первое модальное окно и показываю новое в случае успеха
        html.style.overflow = 'hidden';
        modal.style.display = 'none';
        overlay.style.display = 'block';
        modalSuccess.style.display = 'block';
    };

    close.addEventListener('click', () => { // закрытие модального окна
        overlay.style.display = 'none';
        html.style.overflow = '';
        modalSuccess.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    });

    const message = {  //объект с текстом, что можем показать пользователю
        loading: 'Загрузка',
        failure: 'Что-то пошло не так...'
    };


    const postData = async (url, data) => {
        document.querySelector('.class-modal').textContent = message.loading; //вставляем текст загрузки
        let res = await fetch(url, { //fetch Api асинхронная операция
            method: "POST",
            body: data
        });

        return await res.text(); //возвращаем результат запроса
    };

    const clearInputs = () => { //функция очистки инпутов
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const addAttr = () => { //отключаем возможность заполнять инпуты заранее введеным текстом
        inputs.forEach( i => {
            i.setAttribute('autocomplete', 'off');
        });
    };

    addAttr();

    form.forEach( item => {
        item.addEventListener('submit', (e) => { //обработчик на формы
            e.preventDefault(); //чтобы не перезагружалась страница
            let statusMessage = document.createElement('div'); //блок для помещения сообщения
            statusMessage.classList.add('class-modal'); 
            item.appendChild(statusMessage); //добавляем блок в форму
 
            const formData = new FormData(item); //создаем объект формдата, собираем данные из формы

            postData('server/server.php', formData)
                .then(res => { //успех
                    console.log(res);
                    newModal();
                })
                .catch(() => statusMessage.textContent = message.failure) //ошибка
                .finally(() => { //то, что всегда выполнится 
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove(); //удаляем элемент с сообщением со стр
                    }, 5000);
                });
        });
    });
    
});
 
    

