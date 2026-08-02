import Persona from "./persona";
import Visitante from "./Visitante";

export default class Guardia extends Persona
{
    public controlarDocumento(pVisitante: Visitante): string
    {
        return "Adelante " + pVisitante.presentarse() + " con DNI: " + pVisitante.dni.toString();
    }

    public presentarse(): string {
        return `Hola, mi nombre es ${super.presentarse()}  y soy el Guardia.`;
    }

}


const objVisitante = new Visitante("Rodrigo", "Rey", 123123);
const objGuardia = new Guardia("Cristiano", "Ronaldo");
console.log(objGuardia.controlarDocumento(objVisitante));