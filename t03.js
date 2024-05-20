/* 3)En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar. */

const corrales = [
    [ 'oveja', 'oveja', '', 'oveja', '' ],
    [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
    [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
]

function contar_ovejas (corrales){
    let contador = 0;
    for ( let corral of corrales ) {
        for ( let animal of corral ) {
                if (animal == "oveja"){
                    contador++;
                }
        }
    }
    return contador;
}               

function contar_libres (corrales){
    let contador = 0;
    for ( let i = 0; i < corrales.length ; i++ ) {
        for ( let j = 0; j < corrales[i].length ; j++ ) {
                if (corrales[i][j] === ""  || corrales[i][j]=== "muerta"){
                    contador++;
                    corrales[i][j]="";
                }
        }
    }
    return contador;
}

function lobos (corrales ) {
    let contador = 0;
    for ( let i = 0 ; i < corrales.length ; i++ ) {
        for (let j = 0 ; j< corrales[i].length;j++){
            if (corrales[i][j] == "lobo") {
                corrales[i][j]=''; 
                contador++;
            }
    }
    }
    return contador
}

function new_ovejas(corrales, nuevas_ovejas){

    let contador = 0;

    for ( let i = 0 ; i < corrales.length ;i++ ) {
        for ( let j = 0; j < corrales[i].length;j++ )  {
            if ( corrales[i][j]=='' && nuevas_ovejas > 0 ) {

                corrales[i][j] = "oveja";
                nuevas_ovejas--;
                contador++;

            }
        }
       
        
    }
    return contador;
}

function acomodacion (corrales){
let ovejas_vivas = contar_ovejas(corrales) 
console.log(`El corral tiene en toltal ${ovejas_vivas}`);
let espacios_libres = contar_libres(corrales);
console.log(`Los espacios libres en el corral ${espacios_libres}`);
let lobos_neutralizados = lobos(corrales);
console.log(`Lobos neutralizados:${lobos_neutralizados}`);


let ovejas_adicionales = lobos_neutralizados * 2;
let ovejas_incorporadas = new_ovejas(corrales, ovejas_adicionales);

console.log(`nuevas ovejas${ovejas_incorporadas}`);     

console.log("El corral:" , corrales);

/* return corrales; */

}

acomodacion(corrales);




