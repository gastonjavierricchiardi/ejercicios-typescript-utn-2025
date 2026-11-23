// ejercicios/01EJ15_marina/01EJ15_index.ts
import { Acorazado } from "./navio/guerra/acorazado";
import { Destructor } from "./navio/guerra/destructor";
import { BarcoHospital } from "./navio/hospital/barcoHospital";
import { LanchaMedica } from "./navio/hospital/lanchaMedica";

function main(): void {
    const acorazado = new Acorazado("Ara Caballito", "Alta", "Alta", "Alta", "Pesado", "Alta", 25);
    console.log("ACORAZADO");
    console.log(`Nombre           : ${acorazado.getNombre()}`);
    console.log(`Flotabilidad     : ${acorazado.getFlotabilidad()}`);
    console.log(`Estabilidad      : ${acorazado.getEstabilidad()}`);
    console.log(`Solidez          : ${acorazado.getSolidez()}`);
    console.log(`Blindaje         : ${acorazado.getBlindaje()}`);
    console.log(`Potencia de fuego: ${acorazado.getPotenciaFuego()}`);
    console.log(`Velocidad crucero: ${acorazado.getVelocidadCrucero()}`);

    console.log();

    const destructor = new Destructor("ARA Demoledor", "Alta", "Alta", "Alta", "Alta", "Muy alta", 30);
    console.log("DESTRUCTOR");
    console.log(`Nombre           : ${destructor.getNombre()}`);
    console.log(`Flotabilidad     : ${destructor.getFlotabilidad()}`);
    console.log(`Estabilidad      : ${destructor.getEstabilidad()}`);
    console.log(`Solidez          : ${destructor.getSolidez()}`);
    console.log(`Potencia de fuego: ${destructor.getPotenciaFuego()}`);
    console.log(`Maniobrabilidad  : ${destructor.getManiobrabilidad()}`);
    console.log(`Velocidad crucero: ${destructor.getVelocidadCrucero()}`);

    console.log();

    const sibelancia = new BarcoHospital("Sibelancia", "Excelente", "Extrema", 75);
    console.log("BARCO HOSPITAL");
    console.log(`Nombre               : ${sibelancia.getNombre()}`);
    console.log(`Flotabilidad         : ${sibelancia.getFlotabilidad()}`);
    console.log(`Estabilidad          : ${sibelancia.getEstabilidad()}`);
    console.log(`Cantidad de pacientes: ${sibelancia.getCapacidadPacientes()}`);

    console.log();

    const laGaucha = new LanchaMedica("La Gaucha", "Elevada", "No muy buena", "Afectada", "Fuera de borda", 300);
    console.log("LANCHA MÉDICA");
    console.log(`Nombre         : ${laGaucha.getNombre()}`);
    console.log(`Flotabilidad   : ${laGaucha.getFlotabilidad()}`);
    console.log(`Estabilidad    : ${laGaucha.getEstabilidad()}`);
    console.log(`Maniobrabilidad: ${laGaucha.getManiobrabilidad()}`);
    console.log(`Tipo de motor  : ${laGaucha.getTipoMotor()}`);
    console.log(`Capacidad grúa : ${laGaucha.getCapacidadGrua()} kg.`);

    console.log();

    const elGaucho = new LanchaMedica("El Gaucho", "Elevada", "No muy buena", "Afectada", "Fuera de borda", 300);
    console.log("LANCHA MÉDICA");
    console.log(`Nombre         : ${elGaucho.getNombre()}`);
    console.log(`Flotabilidad   : ${elGaucho.getFlotabilidad()}`);
    console.log(`Estabilidad    : ${elGaucho.getEstabilidad()}`);
    console.log(`Maniobrabilidad: ${elGaucho.getManiobrabilidad()}`);
    console.log(`Tipo de motor  : ${elGaucho.getTipoMotor()}`);
    console.log(`Capacidad grúa : ${elGaucho.getCapacidadGrua()} kg.`);
}

main();
