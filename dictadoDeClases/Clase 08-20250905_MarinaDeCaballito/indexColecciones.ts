//SETS
// const unicos : Set<number> = new Set<number>();
// unicos.add(1);
// unicos.add(2);
// unicos.add(3);
// unicos.add(3);

// unicos.forEach(
//     unico => {
//         console.log(unico);
//     }
// );

//FIN SETS


//COMIENZO MAP
// const unDiccionario : Map<string, number> = new Map();
// const cadena : string = "Andrés";
// unDiccionario.set(cadena, 123);
// console.log(unDiccionario.get(cadena));
// unDiccionario.set(cadena, 456);
// unDiccionario.set("Leo", 987);
// //unDiccionario.delete(cadena);


// if (unDiccionario.has(cadena))
//     console.log("Tengo a " + cadena);
// else
//     console.log("No tengo a " + cadena);

// console.log(unDiccionario.get(cadena));

// unDiccionario.forEach( (value, key) => {
//     console.log(`Nombre: ${key}, y su valor (numero) es: ${value}`);
// }  );

//FIN DE MAPS

//COMIENZO ARRAY
let vectorDeNumeros : Array <number> = new Array<number>();

vectorDeNumeros.push(4);
vectorDeNumeros.push(4);
vectorDeNumeros.push(4);
vectorDeNumeros.pop();
vectorDeNumeros.push(6);
vectorDeNumeros.push(5);

vectorDeNumeros.forEach( elemento => {
    console.log(elemento);
} )

for (let elemento of vectorDeNumeros)
{
    if ((elemento % 2) == 0)
        console.log(elemento);
}

// for (let elemento of vectorDeNumeros)
// {
//     console.log(elemento);
// }

//  for (let index = 0; index < vectorDeNumeros.length; index++) {
//      const element = vectorDeNumeros[index];
//      console.log(element);
//  }

//FIN ARRAY




/*
import Barco from "./Guia_15/barco";
import Lancha from "./Guia_15/lancha";
import Acorazado from "./Guia_15/acorazado";

const objLancha1 = new Lancha("El Gaucho", 100, 100, 100, true);
const objLancha2 = new Lancha("La Gaucha", 100, 100, 100, true);
const objAcorazado1 = new Acorazado("Mi acorazado", 20, 100, 90, 125);


console.log(objLancha1.presentarse());
console.log(objLancha2.presentarse());
console.log(objAcorazado1.presentarse());



//console.log(objPersona.apellido);
*/