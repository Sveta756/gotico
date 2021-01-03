const form = document.querySelectorAll('form'),
inputs = document.querySelectorAll('input');

const message = {
    loading: 'Загрузка',
    failure: 'Что-то пошло не так...'
};

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInputs = () => {
    inputs.forEach(item => {
        item.value = "";
    });
};

form.forEach( item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(item);

        postData('server/server.php', formData)
            .then(res => {
                console.log(res);
            })
            // .catch(() => {

            // })
            .finally(() => {
                clearInputs();
            });
    });
});