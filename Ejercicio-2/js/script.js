const number = parseInt(prompt('Enter a number'));
let sum = 0;
let count = 1;

//ciclo que comienza desde el 1 y me va sumando cada numero hasta el numero que el usuario digita
while(count <= number){
    sum += count;
    console.log(count);
    count++;
}
// imprime la suma de la lista de numeros 
console.log(`The result is: ${sum}`);