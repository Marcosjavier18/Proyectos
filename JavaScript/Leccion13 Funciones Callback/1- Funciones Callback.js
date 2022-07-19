//la funcion callback tiene como objetivo sirve para ejecutar procesos de manera asincrona, como este ejemplo: 
// function sumar(op1,op2,funcionCallback){
//     let res = op1 + op2;
//     funcionCallback(`Resultado: ${res}`);
// }




miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log("funcion 1");
}

function miFuncion2(){
    console.log("funcion 2");
}


//Funcion tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}



sumar(5,3,imp);

