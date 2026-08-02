import Cuadrado from "./entidades/cuadrado";
import Figura from "./entidades/figura";
import Triangulo from "./entidades/triangulo";

const pepe = new Cuadrado("un cuadrado", "rojo", 4);
console.log(pepe.getArea());

let figura: Figura = pepe
console.log(figura.getArea(), figura.getPerimetro());

figura = new Triangulo("un triangulo", "negro",1 , 1, 1);