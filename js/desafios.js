// SUMATORIA. Calcular y mostrar número pares del 0 al 100 // 
/*
var suma = 0;

// Este ciclo nos permite recorrer todos los números del 0 al 100 
for (var i = 0; i <=100; i++) {
	// Revisamos si el número actual es par
	if (i % 2 == 0) {
		// Si el número es par, se agrega a la sumatoria
		suma += i; // suma += suma + i; (otra forma de resolver) i + i = i++
	}
}

console.log("El resultado de la sumatoria es: " + suma);
*/

// SUMATORIA. Calcular y mostrar número pares del 0 al 100 // 
/*
var suma = 0;

// Este ciclo nos permite recorrer todos los números del 0 al 100 
for (var i = 0; i <=100; i += 2) {
	// Revisamos si el número actual es par
	if (i % 2 == 0) {
		// Si el número es par, se agrega a la sumatoria
		suma += i; // suma += suma + i; (otra forma de resolver) i + i = i++
	}
}

console.log("El resultado de la sumatoria es: " + suma);
*/

// FACTORIAL. Dando un número entero entre 0 y 10, calcula

var resultado = 1; 
var n = 10; // 5! = 120
var i = 1;

do {
	if (n == 0) {
		break;
	}
	// resultados = resultado * i;
	resultado *= i;
	i++;
} while (i <= n); 

console.log("El factorial de " + n + " es " + resultado);


