/**
 * 
 *      Autor:Jesús Villamarín
 *      Fecha: 09/07/2018
 *      Descripción: Modulo/paquete que traduce las palabras pasadas como argumentos en un idioma inventado
 * 
 */



/*
---># Para exportar nuestro modulo hay que agregar la palabra export
        > export function platzom(){...}
        > import { platzom } from 'platzom'

---> # Si le agregamos default seguido de export seria diferente importar el modulo/paquete
        > expor default function platzom(){...}
        > import platzom from 'platzom'

---> Eso pasa porque cuando hacemos export default, por defecto se exporta la función

*/



export default  platzom = function (str) {
    // Si la palabra termina en "ar", se le quitan esos dos caracteres
    let trans = str.toLowerCase();
    if (trans.endsWith('ar')) {
        trans = str.slice(0, -2);
        console.log(trans);
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if (trans.startsWith('z')) {
        trans += "pe";
        console.log(trans);
    }

    // Si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con un guión
    if (trans.length >= 10) {
        trans = trans.slice(0, (trans.length / 2)) + "-" + trans.slice(trans.length / 2);
        console.log(trans);
    }

    // Si la palabra original es un palíndromo, ningnuna regla anterior cuenta y se devuelve la misma palabra intercalando máyusculas y minúsculas
    if (trans == reverse(trans)) {
        trans = capitalize(trans);
        console.log(trans);
    }

    return;
};

function capitalize(palabra) {

    let resultado = '';
    let bandera = true;
    for (i = 0; i < palabra.length; i++) {
        let carac = palabra.charAt(i);

        resultado += bandera ? carac.toUpperCase() : carac.toLowerCase();
        bandera = !bandera;
    }
    return resultado;
}


let reverse = (palabra) => {
    palabra = palabra.split('').reverse().join('');
    return palabra;
};