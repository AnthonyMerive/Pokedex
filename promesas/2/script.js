let n1 = Number(prompt('introduzca numero 1'));
let n2 = Number(prompt('introduzca numero 2'));
let n3 = Number(prompt('introduzca numero 3'));

const promesa = new Promise((resolve, reject) => {

    suma = n1 + n2 + n3;

    if (suma > 25) {
        resolve(`el resultado es ${suma}`);
    } else {
        reject('Error: el resultado es menor a 25');
    }
}); 

promesa.then(res => {

    alert(res);
})
    .catch(error => {

        console.log(error);
    });