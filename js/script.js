// Mi primer instrucción en JS

alert("Hola Javascript!" + (new Date).getFullYear());

/*

	Este es un comentario multi línea

	Esto también está comentado

*/
/*
var cuatro = "4";
var cinco = 5;

if (cuatro == cinco) {
	console.log("cuatro es igual cinco");
} else {
	console.log("cuatro no es igual a cinco");
}

var piedra="piedra";
var papel="papel";
var tijera="tijera";

if (piedra == papel) {
	console.log("Perdiste");
} 

if (papel == tijera) {
	console.log("Perdiste");
}

if (tijera == piedra) {
	console.log("Perdiste");
}

if (tijera != piedra) {
	console.log("Ganaste");
}

if (papel != tijera) {
	console.log("Ganaste");
}

if (piedra != papel) {
	console.log("Ganaste");
} 

if (piedra == piedra) {
	console.log("Empataste");
} 

if (papel == papel) {
	console.log("Empataste");
} 

if (tijera == tijera) {
	console.log("Empataste");
} 
*/

// Version 1 //
/*
var tijera="tijera", papel="papel", piedra="piedra";
var jugador="piedra";

console.log("Jugador: " + jugador); 

if (jugador == tijera) {
	console.log("JS: Piedra!");
}

if (jugador == piedra) {
	console.log("JS: Papel!");
}

if (jugador == papel) {
	console.log("JS:Tijeras!");
}
*/
// Version 2 // 
// Dos "if" anidados siempre ganan // 


var tijera="tijera", papel="papel", piedra="piedra";
var jugador="piedra";

console.log("Jugador: " + jugador); 

if (jugador == tijera) {
	console.log("JS: Piedra!");
} else {
	if (jugador == piedra) {
		console.log("JS: Papel!");
		} else {
			console.log("JS: Tijera!")
	}
}	

// Version 3 / 
/*
switch (jugador) {
	case tijera:
		console.log("JS: Piedra!");
		break;
	case piedra:
		console.log("JS: Papel!");
		break;
	//case papel:
	default:
		console.log("JS: Tijera!");	
		//break;
}
*/








