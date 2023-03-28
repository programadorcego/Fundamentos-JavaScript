function maiorElemento(array, indice, maior){
	if(array[indice] == undefined){
		return maior;
	}
	
	if(array[indice] > maior){
		maior = array[indice];
	}
	
	return maiorElemento(array, indice + 1, maior);
}

let numeros = [3, 4, 2, 7, 9, 10, 4];
console.log(maiorElemento(numeros, 0, numeros[0]));