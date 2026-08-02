import Persona from './persona';

// Ejemplos de instanciación y uso
console.log("=== Ejemplos de uso de la clase Persona ===");

// Crear persona con constructor
const persona1 = new Persona("Perez", "Juan", 25);
console.log("Persona 1:", persona1.mostrarInfo());
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);
persona1.setNombre("Juan Carlos");

// Crear persona vacía y usar setters
const persona2 = new Persona();
persona2.nombre = "María";
persona2.setNombre("Maria");

persona2.edad = 30;
console.log("Persona 2:", persona2.mostrarInfo());

// Usar getters
console.log(`Nombre de persona1: ${persona1.nombre}`);
console.log(`Edad de persona1: ${persona1.edad}`);

// Crear otra persona con valores diferentes
const persona3: Persona = new Persona("Alvarez", "Carlos", 17);
console.log("Persona 3:", persona3.mostrarInfo());
persona3.cumplirAnios();
console.log("Persona 3:", persona3.mostrarInfo());


// Modificar valores usando setters
persona3.nombre = "Carlos Alberto";
persona3.edad = 46;
console.log("Persona 3 modificada:", persona3.mostrarInfo());

// Probar validaciones
console.log("\n=== Probando validaciones ===");
const persona4 = new Persona();
persona4.nombre = ""; // Debería mostrar error
persona4.edad = -5; // Debería mostrar error
persona4.nombre = "Ana";
persona4.edad = 28;
console.log("Persona 4:", persona4.mostrarInfo());

