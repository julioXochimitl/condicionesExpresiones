/*Ejercicio 1
Tienes una lista de nombres: var nombres = ["Maria", "Antony", "Joy", "Juan"]

Parte 1
Escriba una función para insertar un nombre al final de la lista. Agregue su propio nombre al final de la lista.

Parte 2
Escribe una función que tome un nombre y verifique si la lista tiene ese nombre. Debería devolver un booleano - verdadero/falso.

parte 3
Escribe una función que tome una lista de nombres. Esta función debería comparar la lista tomada en la lista de nombres que tiene actualmente. La función debe devolver una matriz con los nombres que están en ambas listas.

parte 4
Escriba una función que tome una lista de nombres y devuelva una lista de números enteros con la longitud de los nombres en el mismo orden en que se recibieron. Sugerencia para usar la función de empuje
*/

var nombres = new Array("Maria", "Antony", "Joy", "Juan");
console.log(nombres);

//PARTE 1 -------------------------------------------------------------------------------
function nombreAlFinal(x){
    x.push("Julio");
}

nombreAlFinal(nombres);

console.log(nombres);

//PARTE 2 -------------------------------------------------------------------------------
/*
var intNombre = prompt("Ingresa nombre");

function verificarNombre(arreglo, nombre){
    arreglo.forEach(function(elemento, indice, arr){
        if(elemento.toLowerCase()==nombre.toLowerCase()){
            alert(true);
        }
    })
}

verificarNombre(nombres, intNombre);
*/

//PARTE 3 -------------------------------------------------------------------------------
/*
var numNombres;
var nuevoArregloNombres = [numNombres];
var nombresIguales = [];

do{
    var numNombres = prompt("¿Cuantos nombres ingresaras?");
}while(numNombres>5||numNombres<=0);


for(let i = 0; i < numNombres; i++){
    nuevoArregloNombres[i] = prompt(`Ingresa nombre numero ${i+1}`);
}

console.log(nuevoArregloNombres);

for(let i = 0; i < nuevoArregloNombres.length; i++){
    for(let j = 0; j < nombres.length; j++){
        if(nuevoArregloNombres[i]==nombres[j]){
            nombresIguales[i] = nuevoArregloNombres[i];
        }
    }
}

console.log(nombresIguales);
*/


//PARTE 4 -------------------------------------------------------------------------------
var listaNombres = ["Julio", "Vanessa", "Patricia", "Leando"];
console.log(listaNombres);

listaNombres.forEach(function(elemento, indice, arreglo){
    listaNombres.push(elemento.length);

})
console.log(listaNombres);