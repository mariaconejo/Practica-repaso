let character = ''; 
let size  = 8;

// El primer for es para las lineas que serian 8
for(let i = 0; i < size; i++) {
// El segundo for es para la cantidad de # o '' van por cada fila
    for(let j = 0; j < size; j++) {
// El if me indica que si es par entonces coloca un ' ' y si es impar #
        if( ((i+j) % 2) == 0) {
            character += ' ';
        }else {
            character += '#';
        } 
    }
// salto de linea 
    character += '\n'; 
}  
// imprime todo 
console.log(character);