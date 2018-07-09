/**
 * 
 *   Archivo que realizara los test con mocha
 *      ACLARO: en el platzom = require('..') se usa (..)
 *      para requerir el modulo que esta un nivel mas arriba, buscandolo en el main del package.json
 *          
 * 
 */


expect = require('chai').expect;
platzom = require('..').default;

// Esta función 'describe' se ejecutaran bajo el entorno que esta corriendo mocha

/* 'describe' recibe dos parametros
        > Modulo que se le realizara los test
        > Función que incluye todos los test
    
    para correr un test hay que escribir 
        > it('Mensaje de lo que realizara',function(){...})
    
    para validar el resultado que esperamos usamos la funcion expect()
        expect(resultado).to.equal("Valor esperado")


*/
/**
 *      Palabras a testear de acuerdo a las funciones
 * 
 *      >Programar
 */



describe('#platzom', function () {

    it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
        const resultado = platzom('programar');
        expect(resultado).to.equal("program");
    });

    it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
        const resultado = platzom('zapato');
        expect(resultado).to.equal('zapatope');
    });

    it('Si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con un guión', function () {
        const resultado = platzom('tiranosaurio rex');
        expect(resultado).to.equal('tiranosa-urio rex');
    });

    it('Si la palabra original es un palíndromo, ningnuna regla anterior cuenta y se devuelve la misma palabra intercalando máyusculas y minúsculas', function () {
        const resultado = platzom('arepera');
        expect(resultado).to.equal('ArEpErA');
    });

    it('repetición de un polindromo con pero sin usar una nte',function(){
        const resultado = platzom('reconocer');
        expect(resultado).to.equal('ReCoNoCeR');
    });



})