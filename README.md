# Tarjeta de crédito Válida #

+ Inicio
+ Uso ciclo _Do...while_ para declarar variable *string* y le asigno la secuencia numérica ingresada por el usuario mediante uso de _prompt_
+ Reviso que *string* no tenga valores _" "_, de tener, volverá a pedir un número
+ Declaro la _función_ *isValidCard*
+ Declaro un arreglo *creditCardNumbers* vacía
+ Declaro variable *ingresedNumbers* y le asigno el valor obtenido al aplicar _parseInt_ sobre *string* para transformar a secuencia numérica
+ Mediante un ciclo _While_ separo de *ingresedNumbers* cada unidad y las guardo en *creditCardNumbers*
+ Declaro el arreglo *doubleNumbers* vacío
+ Declaro la variable *sumSingleNumbers* con valor temporal cero
+ Mediante un ciclo _For_ itero dentro de *creditCardNumbers* 
+ Mediante el uso de un bucle _If...else_ los números de índice par, partiendo desde cero, de *creditCardNumbers* son multiplicados por 2 y devueltos a *creditCardNumbers*
+ Si los números de *creditCardNumbers* son menores que 10, los sumo en *sumSingleNumbers*
+ Si los números de *creditCardNumbers* son mayores que 10, los guardo en el arreglo *doubleNumbers* 
+ Declaro la variable *sumDoubleNumbers* con valor temporal cero
+ Mediante un ciclo _For_ itero dentro de *doubleNumbers* para sumar los numeros mayores a 10 en *sumDoubleNumbers*
+ Declaro el arreglo *doubleToSingle* vacío
+ Mediante un ciclo _While_ separo de *sumDoubleNumbers* cada unidad y las guardo en *doubleToSingle*
+ Declaro la variable *sumPairs* con valor temporal cero
+ Mediante un ciclo _For_ itero dentro de *doubleToSingle* para sumar los numeros en *sumPairs*
+ Declaro la variable *sumTotal* y le asigno el valor de la suma de *sumPairs* con *sumSingleNumbers*
+ Mediante un bucle _If...else_ se revisa si el valor de *sumTotal* módulo diez es igual a cero
+ Si es así, avisa mediante _alert_ Su tarjeta es válida
+ Si no es así, avisa mediante _alert_ Su tarjeta no es válida
+ Llamo a la función para poder usarla