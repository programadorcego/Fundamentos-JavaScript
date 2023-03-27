function verificaPrimo(n){
	let ePrimo = true;
	
	for(let i = 2; i < n; i++){
		if(n % i == 0){
			ePrimo = false;
			break;
		}
	}
	
	if(ePrimo){
		return `O número ${n} é primo`;
	}
	
	return `O número ${n} não é primo`;
}

console.log(verificaPrimo(17));