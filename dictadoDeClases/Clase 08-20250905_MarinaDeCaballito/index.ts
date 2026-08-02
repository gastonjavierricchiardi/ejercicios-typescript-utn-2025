import Barco from "./Guia_15/barco";
import Lancha from "./Guia_15/lancha";
import Acorazado from "./Guia_15/acorazado";
import Imperio from "./Guia_15/imperio";

const objLancha1 = new Lancha("El Gaucho", 100, 100, 100, true, 500);
const objLancha2 = new Lancha("La Gaucha", 100, 100, 100, true, 500);
const objAcorazado1 = new Acorazado("Mi acorazado", 20, 100, 90, 125, 5000);

const coleccionDeBarcos : Array<Barco> = new Array<Barco>();
coleccionDeBarcos.push(objLancha1);
coleccionDeBarcos.push(objLancha2);
coleccionDeBarcos.push(objAcorazado1);

const objImperio : Imperio = new Imperio("El reino de Caballito", coleccionDeBarcos);
console.log(objImperio.Presentarse());


// coleccionDeBarcos.forEach(
//     elemento => {
//         console.log(elemento.presentarse());
//     }
// )

// for (const unBarco of coleccionDeBarcos)
// {
//     console.log(unBarco.presentarse());
// }

// console.log(objLancha1.presentarse());
// console.log(objLancha2.presentarse());
// console.log(objAcorazado1.presentarse());



//console.log(objPersona.apellido);
