//tipo de dado
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";
const numeroString2 = "456a";

console.log(numero == numeroString)

console.log(numero + numeroString)

//conversão explícita
    //number()
    console.log(numero + Number(numeroString))
    console.log(numero + Number(numeroString2))
    //string()
    console.log(numeroString  + String(numero))