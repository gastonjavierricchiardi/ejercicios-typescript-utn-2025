import Alumno from "./entidades/alumno";
import Curso from "./entidades/curso";
import Persona from "./entidades/persona";
import Profesor from "./entidades/profesor";
import ReporteMensual from "./entidades/reporte";
import Reporteable from "./entidades/reporteable";

// Ejemplos de instanciación y uso
console.log("=== Ejemplos de uso de la clase Persona ===");

const alumno = new Alumno("Perez", "Juan", 30, "1119990");
const persona: Reporteable = alumno as Reporteable;

const profesor = new Profesor("Garcia", "Carlos", undefined, 40);

const programacion2 = new Curso(profesor, "Programacion 2");

const reporteador = new ReporteMensual();

reporteador.GenerarReporteIndividual(alumno);
reporteador.GenerarReporteIndividual(profesor);
reporteador.GenerarReporteIndividual(persona);


