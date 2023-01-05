//1- declaramos a função
function imprimeTexto(texto){
    console.log(texto)
}

//2- executa a função 1 ou mais vezes
imprimeTexto("oie")
imprimeTexto("bão ou nada?")

//Existem três formas de declarar as funções

//a- com o parametro dentro do parentese

//b- sem parametro dentro do parantese
function soma(){
    return 2+2; //sempre última linha da função
}

console.log(soma())

//c- Função dentro de Função
imprimeTexto(soma());