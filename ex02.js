function somaPar(n){
	let soma = 0;
	
	for(i = 0; i <= n; i++){
		if(i % 2 != 0){
			continue;
		}
		
		soma += i;
	}
	
	return soma;
}

console.log(somaPar(20));