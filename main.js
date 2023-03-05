let fruta = "manga";

switch(fruta) {
	case "banana" :
		console.log("Banana custa R$ 1,00 o quilo");
	break;
	
	case "maçã" :
		console.log("Maçã custa R$ 2,00 o quilo");
	break;
	
	case "uva" :
		console.log("Uva custa R$ 3,00 o quilo");
	break;
	
	default :
		console.log(`Desculpe. não há ${fruta} disponível no momento!`);
	break;
}