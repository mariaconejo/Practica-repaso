let array = [];
let number = prompt ('Enter a number or Ok to finish');
let str = '';

while (number != str) {
  const conv = parseFloat(number);
// Solo almacena el número en el array si es un número si no lo ignora
  if (!isNaN(conv)) {
    array.push(conv);
  }
    number = prompt ('Enter a number or Ok to finish');
}

// Ordena de menor a mayor los arreglos
array.sort((a, b) => a - b);
console.log(array);

// Calcular el valor minimo y maximo
let minun = Math.min.apply(null, array);
console.log(`The lower number is: ${minun}`); // sacar el menor numero de un arreglo
let plus =  Math.max.apply(null, array);
console.log(`The higher number is: ${plus}`); // saca el mayor numero de un arreglo

// Calcular el promedio
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
}
let avg = sum / array.length;
console.log(`Avg: ${avg}`);

// Calcular la mediana 
let median = 0;
if(array.length % 2 == 0){
    let lownumber = Math.floor((array.length - 1) / 2); // redondea el valor bajo y busca primer valor del medio
    let highnumber = Math.ceil((array.length - 1) / 2); // redondea el numero al valor alto y buscar el segundo valor medio
    median = (array[lownumber] + array[highnumber]) / 2; // suma los valores escogidos y los divide entre dos
}else{
    let index = Math.floor(array.length / 2); // si el arreglo es impar
    mediana = array[index];
}
console.log(`Median: ${median}`);