let nombre = prompt('introduzca su nombre');

const promesa = new Promise((resolve, reject) => {

    resolve(`su nombre es ${nombre}`);

    reject('error');
});

promesa.then(res => {

    alert(res);
})
    .catch(error => {

        alert(error);
    });