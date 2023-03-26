let tabuada = 11;
let contador = 0;

if(tabuada < 0 || tabuada > 10){
	console.log("A tabuada precisa ser entre 0 e 10");
} else {
	while(contador <= 10){
		let resultado = tabuada * contador;
		console.log(`${tabuada} X ${contador} = ${resultado}`);
		contador++;
	}
}