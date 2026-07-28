// \01EJ07\acciones.ts
import Ninja from "../Ninja";

export function imprimirSalto(ninja: Ninja, multiplicador: number): void {
    console.log(ninja.saltar(multiplicador));
}

export function imprimirAtaque(ninja: Ninja): void {
    console.log(ninja.ataque());
}