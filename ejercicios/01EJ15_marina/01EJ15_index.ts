/**
 * \01EJ15_marina\01EJ15_index.ts
 * Nombre: String
 * Flotabilidad = 100 Máximo
 * Solidez = 100 Máximo
 * Estabilidad = 100 Máximo
 * VelocidadCrucero = 50 millas nauticas Máximo
 * === Guerra ===
 * (Todo lo Heredado) + 
 * potenciaFuego = 100 Máximo
 * maniobrabilidad = 100 máximo
 * velocidadMaxima = 65 % del máximo // jugamos con esto suponemos que es de guerra y no llega al 100
 */
// \01EJ15_marina\01EJ15_index.ts
import { Flota } from "./flota/flota";
import { Acorazado } from "./navio/guerra/acorazado";
import { Destructor } from "./navio/guerra/destructor";
import { BarcoHospital } from "./navio/hospital/barcoHospital";
import { LanchaMedica } from "./navio/hospital/lanchaMedica";

function main(): void {
    console.log("===== Ejercicio NRO 15 (Marina del Reino de Caballito) =====");

    const flota = new Flota();

    // Acorazado: nombre, flotabilidad, solidez, estabilidad, velocidadCrucero, blindaje, potenciaFuego
    const laArgentina = new Acorazado("La Argentina", 95, 90, 85, 45, 88, 92);

    // Destructor: nombre, flotabilidad, solidez, estabilidad, velocidadCrucero, potenciaFuego, maniobrabilidad, velocidadMaxima
    const elRayo = new Destructor("El Rayo", 90, 80, 78, 42, 85, 92, 60);

    // Barco Hospital (Singleton): se obtiene con getInstance()
    const sibelancia = BarcoHospital.getInstance();

    // Creación de lanchas médicas (la gaucha y el gaucho)

    const laGaucha = new LanchaMedica("La gaucha", 95, 70, 40, 48, 55, true, 300);
    const elGaucho = new LanchaMedica("El gaucho", 95, 70, 40, 48, 55, true, 300);


    flota.agregarNavio(laArgentina);
    flota.agregarNavio(elRayo);
    flota.agregarNavio(sibelancia);
    // agregamos las lanchas médicas
    flota.agregarNavio(laGaucha);
    flota.agregarNavio(elGaucho);

    flota.mostrarResumen();

    // Prueba extra: datos propios del hospital (no están en el resumen común)
    console.log(`Hospital: ${sibelancia.getNombre()} | Capacidad: ${sibelancia.getCapacidadPacientes()} pacientes`);

    // opcional: mostrar detalles propios de las lanchas
    console.log(`Lancha: ${laGaucha.getNombre()} | Motor FB: ${laGaucha.getMotorFueraBorda()} | Grua: ${laGaucha.getCapacidadGruaKg()}kg | Maniobrabilidad: ${laGaucha.getManiobrabilidad()}`);
    console.log(`Lancha: ${elGaucho.getNombre()} | Motor FB: ${elGaucho.getMotorFueraBorda()} | Grua: ${elGaucho.getCapacidadGruaKg()}kg | Maniobrabilidad: ${elGaucho.getManiobrabilidad()}`);
}

main();
