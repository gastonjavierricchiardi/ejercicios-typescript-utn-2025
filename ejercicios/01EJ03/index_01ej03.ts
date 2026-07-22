// index.ts
import Articulo from "./articulo";

/**
3.​Crear una clase Articulo que tenga los atributos privados marca y modelo. // listo

●​ Crear métodos públicos para la asignación de valores. // listo
●​ Crear una instancia y asignarle valores.

●​ Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre.
 */

// Lote de prueba corregigo

const art1 = new Articulo();
art1.setMarca("Chevrolet");
art1.setModelo("Spint");

console.log(art1._marca);
console.log(art1._modelo);