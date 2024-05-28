// Esercizio con If else if else
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


//Esercizio con Switch: Soluzione 1 con if else if esterno

// let v = 44;
// let voto = 'sufficiente';

// if(v >= 18 && v <21){
//     voto = 'sufficiente'

// }else if(v >= 21 && v < 24){
//     voto = 'buono'
// }else if(v >= 24 && v < 27){
//     voto = 'distinto'
// }else if(v >= 27 && v <= 29){
//     voto = 'ottimo'
// }else if(v == 30){
//     voto = 'eccellente'
// }else if(v >= 0 && v <= 17){
//     voto = 'insufficiente'
// }else{
//     voto = 'voto non valido'
// }

// switch(voto){

//     case 'sufficiente' :
//         console.log('Sufficiente');
//         break

//     case 'buono':
//         console.log('Buono');
//         break

//     case 'distinto':
//         console.log('Distinto');
//         break

//     case 'ottimo':
//         console.log('ottimo');
//         break

//     case 'eccellente':
//         console.log('Eccellente')
//         break
    
//     default: 
//         console.log('Voto non valido')
//         //in alternativa 
//         // case 'voto non valido': 
//         // console.log('Voto non valido')
//         // break
    
// }

// Esercizion con Switch: soluzione 2 con if else if interno

let v = 1;
const voto = Number;

switch(voto){

    case Number:
        {if(v >= 18 && v <21)
            console.log('Sufficiente')
        else if(v >= 21 && v < 24){console.log('buono')}
    
        else if(v >= 24 && v < 27){console.log('Distinto')}
        
        else if(v >= 28 && v < 29){console.log('Ottimo')}

        else if(v == 30 ){console.log('Eccellente')}

        else if(v >= 0 && v <= 17){console.log('Insufficiente')}
        }
        default: console.log('Voto non valido');
}
