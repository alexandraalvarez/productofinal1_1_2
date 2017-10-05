//pido al usuario que ingrese su numero de tarjeta y reviso que el string no tenga espacios

do {
 var ingresedString = prompt("Ingrese su número de tarjeta"); //le pido al usuario que ingrese su número de tarjeta y lo guardo en una variable, en forma de números
} while (ingresedString.indexOf(" ") !== -1); //si tiene espacios volvará a pedir un numero

var isValidCard = function (palabra){ //declaro la función
 
 //declaro la nueva variable arreglo para guardar los numeros separados

 var creditCardNumbers = [];
 var ingresedNumbers = parseInt(ingresedString);

while (ingresedNumbers > 0) {//Uso un ciclo while para descomponer mi número en unidades, decenas, centenas, etc
    creditCardNumbers[creditCardNumbers.length] = ingresedNumbers % 10; //aquí saco "la unidad" y la almaceno en la posición 0 de mi array vacío
    ingresedNumbers = parseInt(ingresedNumbers / 10); //tomo el número original, lo divido en 10 y redondeo hacia abajo, y lo guardo en la variable original
	}//tengo que unir la variable con el while para que se conecte con el for y no se corte el programa

// itero dentro del arreglo para encontrar los valores ubicados en las posiciones pares y multiplicarlos por 2
 var doubleNumbers = []; // array para almacenar los números multiplicados x 2 mayores que 10
 var sumSingleNumbers = 0; //acumulador de la suma de los números 
for (var i = 0; i < creditCardNumbers.length; i++) {
  
  if (i % 2 === 0){ //si el numero i número módulo 2 da 0
  	creditCardNumbers[i] = creditCardNumbers[i] * 2; //guardo los números multiplicados por 2
  } else if (creditCardNumbers[i] < 10) {//si los números son menores que 10
  	sumSingleNumbers = sumSingleNumbers + creditCardNumbers[i]//los sumo al acumulador de unidades 
  } else if (creditCardNumbers >= 10){ // si los números son mayores o iguales a 10 
    doubleNumbers[doubleNumbers.length] = creditCardNumbers[i] //
  }
}

 var sumDoubleNumbers = 0;  //necesito un ciclo que itere dentro del array para poder sumar numeros dobles
for (var j = 0; j < doubleNumbers.length; j++) {
	sumDoubleNumbers = sumDoubleNumbers + doubleNumbers[j]; //sumo los numeros dobles
}	

//ahora puedo usar el while para descomponer el número y guardar cada unidad en double to single
doubleToSingle = [];
while (sumDoubleNumbers) {
	doubleToSingle[doubleToSingle.length] = sumDoubleNumbers % 10;
	sumDoubleNumbers = parseInt(sumDoubleNumbers / 10);
}

//ahora puedo iterar para sumar
var sumPairs = 0; //para guardar la suma de los números no simples
for (var k = 0; k < doubleToSingle.length; k++){
	sumPairs = sumPairs + doubleToSingle[k];
}

//ahora reuno todas las sumas pequeñas y aplico %
var sumTotal = sumPairs + sumSingleNumbers;

//console.log para verificar que me está mostrando un numero y probar en la consola

//aviso si es tarjeta válida o no
if (sumTotal % 10 === 0){
	alert("Su tarjeta es válida");
} else {
	alert("Su tarjeta no es válida");
}
 
}

isValidCard(palabra); //llamo a la función para poder usarla
