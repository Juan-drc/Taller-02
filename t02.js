let entrada = parseInt(prompt("Digite el primer numero:"))

let entrada2 = parseInt(prompt("Digite el segundo numero:"))

console.log("+");
console.log("-");
console.log("/ Tenga en cuenta que no es posible dividir por cero");
console.log("*");
console.log("x para salir ");

let op = prompt("Digite la operacion de su interes:")

function operation( opcion, entrada, entrada2 ) {
    while ( true ) {

        if ( opcion == "+" ) {
            return   entrada + entrada2;  
        }

        else if ( opcion == "-" ) {
            return   entrada - entrada2;      
        }

        else if ( opcion == "*" ) {
            return   entrada * entrada2;      
        }

        else if ( opcion == "/" ) {
            return   entrada / entrada2;      
        }
        
        else if (opcion == "x") {
            break
        }

    
    return result;
}

}

console.log("El resultado es: " + operation(op,entrada,entrada2))


























/* -----------------------------------------------------------------------------------------------------------------Funciona--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


/* let entrada = parseInt(prompt("Digite el primer numero:"))

let entrada2 = parseInt(prompt("Digite el segundo numero:"))


function suma ( entrada,entrada2 ) {
return entrada+entrada2;
}

function resta ( entrada,entrada2 ) {
    return entrada-entrada2;
}

function divi (  entrada,entrada2 ) {
    return entrada/entrada2;
}

function multi ( entrada,entrada2  ) {
    return entrada*entrada2;
}

while ( true ) {
    console.log("que tipo de operacion matematica desea realizar con a y b?")
    console.log("+ para sumar");
    console.log("- restar");
    console.log("* para multiplicar");
    console.log("/ para dividir");
    console.log("X para FINALIZAR");
    let opcion = prompt("Digite la opcion:");
    if ( opcion == "+" ) {
        console.log( " EL resultado es: " + suma(entrada,entrada2) );    
    }
    else if ( opcion == "-" ) {
        console.log( " EL resultado es: " + resta(entrada,entrada2) );    
    }
    else if ( opcion == "*" ) {
        console.log( " EL resultado es: " + multi(entrada,entrada2) );    
    }
    else if ( opcion == "/" ) {
        console.log( " EL resultado es: " + divi(entrada,entrada2) );    
    }else if (opcion == "x") {
        break
    }
}
 */


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------No funciona------------------------------------------------------------------------------------------------------------------ */




/* function suma ( entrada,entrada2 ) {
    return entrada+entrada2;
   }
   
   function resta ( entrada,entrada2 ) {
       return entrada-entrada2;
   }
   
   function divi (  entrada,entrada2 ) {
       return entrada/entrada2;
   }
   
   function multi ( entrada,entrada2  ) {
       return entrada*entrada2;
   }
   
   
   
   
   function menu (entrada,entrada2){
      
       while ( true ) {
           console.log("que tipo de operacion matetica desea realizar con a y b?")
           console.log("+ para sumar");
           console.log("- restar");
           console.log("* para multiplicar");
           console.log("/ para dividir");
           console.log("X para FINALIZAR");
           let opcion = prompt("Digite la opcion:");
           if ( opcion == "+" ) {
               return console.log( " EL resultado es: " + suma(entrada,entrada2) );    
           }
           else if ( opcion == "-" ) {
               return console.log( " EL resultado es: " + resta(entrada,entrada2) );    
           }
           else if ( opcion == "*" ) {
               return console.log( " EL resultado es: " + multi(entrada,entrada2) );    
           }
           else if ( opcion == "/" ) {
               return console.log( " EL resultado es: " + divi(entrada,entrada2) );    
           }else if (opcion == "x") {
               break
           }
       }
           return menu
   
   }
   let entrada = parseInt(prompt("Digite el primer numero:"))
   
   let entrada2 = parseInt(prompt("Digite el segundo numero:"))
   
   console.log("El resultado es "); */