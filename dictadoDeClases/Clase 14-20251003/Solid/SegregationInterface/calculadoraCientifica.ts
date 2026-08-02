import icalculadorasimple from "./icalculaadoraSimple";
import icalculadoracompleja from "./icalculadoracompleja";


export default class CalculadoraCientifica implements icalculadorasimple, icalculadoracompleja
{
    Sumar(numero1: number, numero2: number): void {
        throw new Error("Method not implemented.");
    }
    Restar(numero1: number, numero2: number): void {
        throw new Error("Method not implemented.");
    }
    Multiplicar(numero1: number, numero2: number): void {
        throw new Error("Method not implemented.");
    }
    Dividir(numero1: number, numero2: number): void {
        throw new Error("Method not implemented.");
    }

    
}