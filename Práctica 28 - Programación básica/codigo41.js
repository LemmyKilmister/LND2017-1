/*
Ejercicio 1

para la 

practica 28
*/
var nuevoH1 = document.createElement("h1");
var titulo = document.createTextNode("4.1");
var nuevoP = document.createElement("p");
var nuevohr = document.createElement("hr");
var valores = [true, 3, false, "hola", "adiós", 5];
/*
1.	Determina cuál de los dos elementos de texto es mayor.
2.	Utilizando exclusivamente los dos valores booleanos del array ylos operadores lógicos,
	muestra un resultado true y otro resultado false.
3.	Determina el resultado de las cinco operaciones matemáticas (suma, resta, división, multiplicación y módulo)
	realizadas con los dos elementos numéricos del array.
*/

if (valores[3] > valores[4]) {
	var resultado = document.createTextNode(valores[3] + " es mayor que " + valores[4]);
}else{
	var resultado = document.createTextNode(valores[3] + " es menor que " + valores[4]);
}
nuevoP.appendChild(resultado);
nuevoH1.appendChild(titulo);
document.body.appendChild(nuevoH1);
document.body.appendChild(nuevoP);
document.body.appendChild(nuevohr);