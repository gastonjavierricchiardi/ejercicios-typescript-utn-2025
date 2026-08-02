import MyLista from "./EstructurasDinamicas/myLista";
import Paciente from "./EstructurasDinamicas/pacientes";
import MyNode from "./EstructurasDinamicas/myNode";


const miLista : MyLista = new MyLista();

const unPaciente1 : Paciente = new Paciente("1", "Julio", "Lopez", "Rivadavia 233", "1215566");
const unPaciente2 : Paciente = new Paciente("2", "Amalia", "Lopez", "Rivadavia 233", "1215566");
const unPaciente3 : Paciente = new Paciente("3", "Eduardo", "Dominguez", "Florida 450", "1215566");

// const unNodo1 : MyNode = new MyNode( unPaciente1);
// const unNodo3 : MyNode = new MyNode( unPaciente3);
// const unNodo2 : MyNode = new MyNode( unPaciente2);

console.log("Insertando paciente 3");
miLista.insertFirst(unPaciente3);
console.log("Insertando paciente 2");
miLista.insertFirst(unPaciente2);
console.log("Insertando paciente 1");
miLista.insertFirst(unPaciente1);

console.log("Imprimiendo a todos los pacientes....");
miLista.imprimirTodo();


console.log("Eliminando paciente 2");
miLista.delete(unPaciente2);

console.log("Imprimiendo a todos los pacientes....");
miLista.imprimirTodo();

console.log("Actualizando el código del paciente 1");
const pacienteEditado = miLista.search(unPaciente1);
pacienteEditado.value.codigo = "1410";

console.log("Imprimiendo a todos los pacientes....");
miLista.imprimirTodo();

const otroNuevoPaciente : Paciente = new Paciente("4", "Omar", "Gonzalez", "Fake 123", "555-4444108000");

console.log("Agregando otro nuevo paciente después del 1...");
miLista.insertarElementoDespuesDe(otroNuevoPaciente, unPaciente1);
console.log("Imprimiendo a todos los pacientes....");
miLista.imprimirTodo();