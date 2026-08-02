import Ambiente from "./Guia_18/ambiente";
import Casa from "./Guia_18/casa";
import Contacto from "./Guia_18/contacto";
import Inmobiliaria from "./Guia_18/inmobiliaria";


const objContacto1 = new Contacto("Alejo", "Quiroz", "aquiroz@uncorreo.com", "44445555");
const objContacto2 = new Contacto("Diego", "Ochoa", "dochoa@uncorreo.com", "555 LACAJA");

const objAmbienteCasa1 : Ambiente = new Ambiente(3, 3, true, "Habitación", true);
const objAmbienteCasa2 : Ambiente = new Ambiente(5, 4, true, "Living Comedor", true);
const objAmbienteCasa3 : Ambiente = new Ambiente(1, 4, true, "Balcon", false);

const ambientes : Array<Ambiente> = new Array<Ambiente> ();

ambientes.push(objAmbienteCasa1);
ambientes.push(objAmbienteCasa2);
ambientes.push(objAmbienteCasa3);

const unaCasa = new Casa("CABA", "Flores", "Lacarra", "250", false, true, true, objContacto1,
    ambientes   
    , "", true, false);


console.log(unaCasa.mostrarInformacion());

