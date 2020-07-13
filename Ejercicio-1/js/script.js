const year = parseInt(prompt('Enter a year'));

// si el año es divisible entre 4 pero no entre 100 pero si entre 400 es 
// bisiesto de los contrario no es bisiesto.

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(`${year}: It's a leap-year`);
}else{
    console.log(`${year}: Isn't a leap-year`);
}