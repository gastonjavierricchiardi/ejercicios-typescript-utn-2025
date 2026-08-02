import Director from "./Patron/CoR/director";
import empleado from "./Patron/CoR/empleado";
import Gerente from "./Patron/CoR/gerente";
import Jefe from "./Patron/CoR/jefe";

const objDirector : Director = new Director("Diego", "Messi", 5, undefined);

const objGerente : Gerente = new Gerente("Diego", "Ortega", 6, objDirector);

const objJefe : Jefe = new Jefe("Marcelo", "Martín", 1, objGerente);

const objEmpleado : empleado = new empleado("Andrés", "Chimuris", 7, objJefe);

objDirector.autorizar(10);
objGerente.autorizar(90);
objJefe.autorizar(1900);
