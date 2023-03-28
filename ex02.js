function somaNumeros(array, indice, soma){
	if(array[indice] == undefined){
		return soma;
	}
	
	soma += array[indice];
	return somaNumeros(array, indice + 1, soma);
}

numeros = [2, 4, 6, 8, 10];
console.log(somaNumeros(numeros, 0, 0));