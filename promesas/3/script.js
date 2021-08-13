let edad = Number(prompt('introduzca su edad'));
let peso = Number(prompt('introduzca su peso'));

const promesa = new Promise((resolve, reject) => {

    if (peso < 100) {
        resolve(`Usted tiene ${edad} años y su peso es de ${peso}Kg`);
    } else {
        reject('Usted tiene sobrepeso');
    }
}); 

promesa.then(res => {

    alert(res);
})
    .catch(error => {

        alert(error);
    });