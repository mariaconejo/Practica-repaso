let number = parseInt(prompt("Enter a number from 1 to 100"));
const secret_number = 23;
const exit = 0;
// el ciclo me funcionara mientras que el numero sea distinto de 0 o 23
while( number != exit && number != secret_number ){
        if(number <= 100 && number >= 1){
// condicion para que solo evalue numeros entre 1 y 100
            if(number >= secret_number){
// condicion que me evalua si el numero es mayor o menor al numero secreto
            number = parseInt(prompt(`${number}: The number is greater than secret number, try again`));
            }else{
            number = parseInt(prompt(`${number}: The number is less than secret number, try again`));
            }
        }else{
            number = parseInt(prompt(`${number}: The number is out of range, try again`));

        }        
}
// si el numero es igual al numero secreto, da un mensaje de felicidades si el numero es 0 da un 
// mensaje que salio del programa
if(number == secret_number && number != exit){
    console.log(`${number}, Congratulations! you win`);
}else{
    console.log(`${number}, Exit the program` )
}
