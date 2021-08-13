let nombre = prompt('introduzca su nombre');

const promesa = new Promise((resolve, reject) => {
    if (nombre == '') {

        reject('error');

    } else {

        resolve(`su nombre es ${nombre}`);

    }
});

promesa.then(res => {

    alert(res);
})
    .catch(error => {

        alert(error);
    });