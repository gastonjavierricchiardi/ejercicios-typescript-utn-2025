import Persona from './persona';
import Alumno from './alumno';
import Profesor from './profesor';
import ReporteMensual from './reporte';

// Ejemplos de instanciación y uso
console.log("=== Ejemplos de uso de la clase Persona ===");

const alumno = new Alumno("Perez", "Juan", 30, "1119990");
const persona: Persona = alumno as Persona;

const profesor = new Profesor("Garcia", "Carlos", undefined, 40);

const reporteador = new ReporteMensual();

reporteador.GenerarReporteIndividual(alumno);
reporteador.GenerarReporteIndividual(profesor);
reporteador.GenerarReporteIndividual(persona);


