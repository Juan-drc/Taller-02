/* 1)Este taller es de nivel básico y pretende afianzar los conocimientos adquiridos sobre los fundamentos de JavaScript.
Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada: */

function notas (nota1,nota2,nota3){
let resultado = (nota1 + nota2 + nota3)/3;
return resultado
}

function letra (promedio){

    if (promedio >= 0 && promedio <= 3.5) {
        return console.log("Su nota asignada es: R");
    }
    
    else if ( promedio >= 3.5 && promedio<4.0   ) {
        return console.log("Su nota asignada es: A");
    }
    
    else if ( promedio >= 4.0 && promedio< 4.4   ) {
        return console.log("Su nota asignada es: B");
    }

    else if ( promedio >= 4.5 && promedio< 4.8   ) {
        return console.log("Su nota asignada es: MB");
    }

    else if ( promedio >= 4.8 && promedio <= 5.0   ) {
        return console.log("Su nota asignada es: MB");
    }



} 

let num1 = parseFloat(prompt("Digiete la primera nota de 0 a 5:"))

let num2 = parseFloat(prompt("Digiete la segunda nota 0 a 5:"))

let num3 = parseFloat(prompt("Digiete la tercera nota 0 a 5:"))

let rp = notas(num1,num2,num3);

let asociada = letra(rp);

console.log("El promedio de sus notas es:" + rp );




