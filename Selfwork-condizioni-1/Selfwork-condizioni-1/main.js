//Esercizio con If else if else

// let v = 19;
// if(v >= 18 && v <21){
//     console.log('Sufficiente')
// }else if(v >= 21 && v < 24){
//     console.log('buono')
// }else if(v >= 24 && v < 27){
//     console.log('Distinto')
// }else if(v >= 27 && v <= 29){
//     console.log('Ottimo')
// }else if(v == 30){
//     console.log('Eccellente')
// }else if(v >= 0 && v <= 17){
//     console.log('Insufficiente')
// }else{
//     console.log('Voto non valido')
// }


// Esercizion con Switch

let voto = 54;
let giudizio;

switch(true){

    case voto >= 18 && voto <21:
        giudizio='sufficiente'
        break;
    case voto >= 21 && voto < 24:
        giudizio ='buono'
        break;
    case voto >=24 && voto <27:
        giudizio = 'Distinto'
        break;
    case voto >= 27 && voto <=29:
        giudizio = 'Ottimo'
        break;
    case voto == 30:
        giudizio = 'Eccellente'
        break;
    case voto >=0 && voto <= 17:
        giudizio = 'Insufficiente'
        break;
    default:
        giudizio = 'voto non valido'
}

console.log(giudizio)
