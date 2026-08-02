import Barco from "./barco";
import Lancha from "./lancha";
import Acorazado from "./acorazado";
import IPesable  from "./ipesable";

const objLancha1 = new Lancha("El Gaucho", 100, 100, 100, true, 300);
const objLancha2 = new Lancha("La Gaucha", 100, 100, 100, true, 299);
//const objAcorazado1 = new Acorazado("Mi acorazado", 20, 100, 90, 40);



console.log(objLancha1.presentarse());

objLancha1.remolcar(objLancha2);



// console.log(objLancha2.presentarse());
// console.log(objAcorazado1.presentarse());
