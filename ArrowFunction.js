//function normal
function aprensetar(nome){
    return `meu nome é ${nome}`;
}

//Arrow Function -> só funciona com uma linha sem chaves
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2;

//Arrow Function com mais de uma linha -> não funciona sem chaves

const somaNumerosPequenos = (num1, num2) => {
    if(num1 || num2 > 10){
        return "somente números de 1 a 9";
    }
    else{
        return num1 + num2;
    }
}