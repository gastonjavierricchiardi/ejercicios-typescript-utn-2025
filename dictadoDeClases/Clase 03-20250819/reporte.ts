import Persona from "./persona";

export default class ReporteMensual {

    public GenerarReporteIndividual(persona: Persona) {
        console.log(`Reporte para ${persona.nombreCompleto}`);

        console.log(persona.mostrarInfo());
    }
}