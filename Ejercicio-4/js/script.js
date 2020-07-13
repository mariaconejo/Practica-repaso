let text = prompt("Enter your text");
let character = prompt("Enter a character");
let array = [];

//for que me recorre la cadena de texto
//va caracter por caracter y guarda en el array
//la posiciones donde se encuentra el caracter escogido por el usuario 
for (let i = 0; i < text.length; i++){
    if( text[i].toLowerCase() === character){
          array.push(i);
        }
}
// me imprime cuantas veces se repite el caracter escogido 
//por el usuario que esta guardado en el array, usando 
//array.length que me da el largo del array, si no coloco 
//.length me devolveria  las posiciones dentro del array donde se encuentra el caracter.
console.log(`The character '${character}' is repeated in the text:  ${array.length}`);