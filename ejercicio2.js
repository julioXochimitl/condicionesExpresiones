/*Ejercicio 2
¿A qué se refieren las siguientes expresiones?*/

- false || (true && false);//La expresion dentro de los parentesis da como resultado "false" por el operador "&&". Por lo tanto la expresion completa dara "false"

- true || (11 + 12);//la operacion dentro de los parentesis al ser distinto de "0" es considerado como "true" usando el operador "||" dara como resultado "true" mientras uno de los dos sea "true"

- (31 + 22) || true;//la operacion dentro de los parentesis al ser distinto de "0" es considerado como "true" usando el operador "||" dara como resultado "true" mientras uno de los dos sea "true"

- true && (1 + 7);//la operacion dentro de los parentesis al ser distinto de "0" es considerado como "true" usando el operador  "&&" con otro "true", da como resulado "true"

- false && (3 + 4);//la operacion dentro de los parentesis al ser distinto de "0" es considerado como "true" usando el operador  "&&" con un "false", da como resulado "false"

- (1 + 2) && true;//la operacion dentro de los parentesis al ser distinto de "0" es considerado como "true" usando el operador   "&&" con otro "true", da como resulado "true"

- (32 * 4) >= 129;//El resultado de la operacion dentro de los parentesis es "128", "128" no es mayor ni igual a "129". Por lo tanto la expresion seria "false"

- false !== !true;//"false" debe ser distinto de "true", pero este es "true complemento" = "false". Por lo tanto la expresion seria "false"

- true === 4; //Un "boleano" no puede ser igual a un "numerico". Por lo tanto la expresion seria "false"

- false === (847 === '847');//La expresion entre parentesis al ser estricta, seria "false", comparando con el "false" externo, la expresion daria como resultado "true"

- false === (887 == '887');//La expresion entre parentesis al ser normal, seria "true", comparando con el "false" externo, la expersion daria como resultado "false"

- (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
/*
la expresion !(100 / 5) === 20) --> "true"
La expresion (328 / 4) === 82) --> true

la expresion (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) --> "true"

La expresion (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; --> "true"
*/