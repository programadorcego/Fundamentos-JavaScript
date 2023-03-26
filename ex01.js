let soma = 0;
for(let i = 1; i <= 10; i++){
	if(i % 2 != 0){
		continue;
	}
	
	soma += i;
}

console.log(soma);