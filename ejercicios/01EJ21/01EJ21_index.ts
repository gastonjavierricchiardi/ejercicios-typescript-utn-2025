import { KokumoBank } from "./kokumoBank";
import { Solicitante } from "./solicitante";
import { Person } from "./person";
import { PersonIdentity } from "./personIdentity";
import { ExceptionPrestamo } from "./exceptionPrestamo";

function main(): void {
    const banco = new KokumoBank("Sucursal de prueba");
    const hoy = new Date();
    const personaAdulta = new Person(
        "Persona", "Adulta", new Date(hoy.getFullYear() - 21, hoy.getMonth(), hoy.getDate())
    );
    const personaMenor = new Person(
        "Persona", "Menor", new Date(hoy.getFullYear() - 20, hoy.getMonth(), hoy.getDate())
    );

    // Cada simulación devuelve la respuesta configurada, sin acceder a servicios externos.
    const identidadValida = new PersonIdentity(personaAdulta, true);
    const identidadMenor = new PersonIdentity(personaMenor, true);
    const identidadInvalida = new PersonIdentity(personaAdulta, false);

    console.log(`=== ${banco.getNombreSucursal()} ===`);
    for (const sueldo of [29999.99, 30000, 40000, 40000.01, 60000, 60000.01, 80000, 80000.01]) {
        const solicitante = new Solicitante("00000001", sueldo, 0);
        console.log(`\nDNI: ${solicitante.getDni()} | Sueldo: ${solicitante.getSueldoBruto()} | Antigüedad laboral: ${solicitante.getAntiguedadEmpleadoActual()}`);
        try {
            const prestamo = banco.evaluarPrestamo(solicitante, identidadValida);
            console.log(`Monto: ${prestamo.getMonto()} | Interés: ${prestamo.getInteres()}%`);
        } catch (error) {
            if (!(error instanceof ExceptionPrestamo)) {
                throw error;
            }
            console.log(error.message);
        }
    }

    console.log("\n=== Solicitante menor de 21 años ===");
    try {
        banco.evaluarPrestamo(new Solicitante("00000002", 35000, 1), identidadMenor);
    } catch (error) {
        if (!(error instanceof ExceptionPrestamo)) {
            throw error;
        }
        console.log(error.message);
    }

    console.log("\n=== Identidad inválida ===");
    try {
        banco.evaluarPrestamo(new Solicitante("00000003", 35000, 5), identidadInvalida);
    } catch (error) {
        if (!(error instanceof ExceptionPrestamo)) {
            throw error;
        }
        console.log(error.message);
    }
}

main();
