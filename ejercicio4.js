/*Ejercicios Adicionales
¿Qué se muestra en la consola cuando f es console.log'd?*/

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);

//El valor que muestra es "4", ya que de "a" a "c", son variables no asignadas o vacias por lo tanto al ser un operador "or" mostrara el valor que sea en este caso "true", JavaScript al ser secuencial, imprimira el valor que encuentre primero.