//parametros de função

function soma(num1, num2){

    console.log(num1, num2)
 
     return num1 + num2;
}
 
console.log(soma (Math.random(), Math.random()));


//parametros x argumentos

//ordem dos paramentros importam
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(18, "Vitor"))
console.log(nomeIdade("Vitor", 18))

function multiplica(x, y = 1){
    return x*y;
}

console.log(multiplica(soma(4,5)))