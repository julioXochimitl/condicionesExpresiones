/*Ejercicio #3
Escribe una función que registre si un número está entre 0 y 25 (inclusive), entre 26 y 100 (inclusive), mayor que 100 o menor que 0.*/

//numberRange(25); // '25 está entre 0 y 25'
//numberRange(75); // '75 está entre 26 y 100'
//numberRange(125); // '125 es mayor que 100'
//numberRange(-25); // '-25 es menor que 0'


function numberRange(n){
    if(n>=0&&n<26){
        console.log(`"${n}" esta entre 0 y 25`);
    }else if(n>25&&n<=100){
        console.log(`"${n}" esta entre 26 y 100`);
    }else if(n>100){
        console.log(`"${n}" es mayor que 100`);
    }else if(n<0){
        console.log(`"${n}" es menor que 0`);
    }
}

