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
