import Persona from "./persona";
import Reporteable from "./reporteable";

export default class ReporteMensual {

    public GenerarReporteIndividual(algo: Reporteable) {
        console.log(algo.mostrarInfo());
    }
}