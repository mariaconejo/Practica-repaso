let number = parseInt(prompt("Enter a number"));
let prime = true;
    // 0 y 1 no se consideran numeros primos ni compuesto y //4 es un numero compuesto porque que tiene mas de dos //divisores
    // los numeros primos y compuestos solamente son los naturales positvios mayores o iguales a 2 
    // si digita algo que no sea un numero o un numero menor //a 2 da error
if(!isNaN(number) &&  number >= 2){
    if (number == 0 || number == 1 || number == 4){
      prime = false;
  }
  // el for comienza de 2 porque ni 0 y 1 son numeros ni //primos ni compuestos, si el numero es divisible no es primo
    for (let i = 2; i < number ; i++) {
        if (number % i == 0) {
        prime = false;
      }
    }
  // Si no se pudo dividir por ninguno de los casos , //entonces el numero es primo
  if ( prime == true){
    console.log("It's prime number");
  }else{
    console.log("It's composite number");
  }
}else{
  console.log('error');
}

