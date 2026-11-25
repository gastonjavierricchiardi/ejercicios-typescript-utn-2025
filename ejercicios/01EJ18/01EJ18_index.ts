import { Contacto } from "./modelo/contacto";
import { DatosCatastrales } from "./modelo/datosCatastrales";
import { Ambiente } from "./modelo/ambiente";
import { Inmueble } from "./modelo/inmueble";
import { Casa } from "./modelo/casa";
import { Departamento } from "./modelo/departamento";
import { RepositorioInmueblesMemoria } from "./persistencia/repositorioInmueblesMemoria";
import { GestorInmuebles } from "./gestion/gestorInmuebles";

function main(): void {
    const repositorio = new RepositorioInmueblesMemoria();
    const gestor = new GestorInmuebles(repositorio);

    const contactoTelefono = new Contacto("Gastón", "Ricchiardi", "11 1234-5678", "");
    const contactoCorreo = new Contacto("Lucía", "Pérez", "", "lucia@example.com");
    const contactoIncompleto = new Contacto("Carlos", "Gómez", "", "");

    const datosCasa = new DatosCatastrales("Buenos Aires", "Centro", "San Martín", 120, "06000");
    const datosDepartamento = new DatosCatastrales("Córdoba", "Nueva Córdoba", "Obispo Oro", 250, "X5000");
    const datosIncompletos = new DatosCatastrales("", "Centro", "San Martín", 120, "06000");

    const ambientesCasa = [
        new Ambiente("Living", 4, 5, true),
        new Ambiente("Dormitorio", 3, 4, false)
    ];
    const ambientesDepartamento = [new Ambiente("Monoambiente", 4, 6, true)];

    const casa = new Casa(
        datosCasa, ambientesCasa, contactoTelefono,
        false, true, true, true, false, "Patio al fondo"
    );
    const departamento = new Departamento(
        datosDepartamento, ambientesDepartamento, contactoCorreo,
        true, false, true, 0, "A", false
    );
    const casaSinAmbientes = new Casa(
        datosCasa, [], contactoTelefono, false, false, false, false, false
    );
    const casaSinMedioDeContacto = new Casa(
        datosCasa, ambientesCasa, contactoIncompleto, false, true, true, false, false
    );
    const departamentoSinNumero = new Departamento(
        datosDepartamento, ambientesDepartamento, contactoCorreo,
        false, false, true, 2, " ", true
    );
    const casaConDatosIncompletos = new Casa(
        datosIncompletos, ambientesCasa, contactoTelefono,
        false, true, true, false, false
    );
    const casaConAmbienteInvalido = new Casa(
        datosCasa, [new Ambiente("Dormitorio", 0, 4, false)], contactoTelefono,
        false, true, true, false, false
    );

    console.log("=== Altas de inmuebles ===");
    console.log(`Casa completa: ${gestor.darDeAlta(casa)}`);
    console.log(`Departamento completo en planta baja: ${gestor.darDeAlta(departamento)}`);
    console.log(`Casa sin ambientes: ${gestor.darDeAlta(casaSinAmbientes)}`);
    console.log(`Casa sin medio de contacto: ${gestor.darDeAlta(casaSinMedioDeContacto)}`);
    console.log(`Departamento sin número o letra: ${gestor.darDeAlta(departamentoSinNumero)}`);
    console.log(`Casa con datos catastrales incompletos: ${gestor.darDeAlta(casaConDatosIncompletos)}`);
    console.log(`Casa con ambiente inválido: ${gestor.darDeAlta(casaConAmbienteInvalido)}`);

    const inmuebles: Inmueble[] = gestor.obtenerInmuebles();
    console.log(`\n=== Inmuebles registrados: ${inmuebles.length} ===`);
    for (const inmueble of inmuebles) {
        console.log(inmueble.obtenerDescripcion());
        console.log();
    }
}

main();
