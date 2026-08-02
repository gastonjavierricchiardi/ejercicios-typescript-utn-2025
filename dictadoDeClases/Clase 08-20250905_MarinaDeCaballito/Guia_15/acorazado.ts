import Barco from "./barco";
import IMiritalizable from "./imiritalizable";

export default class Acorazado extends Barco implements IMiritalizable
{
    private _potenciaDeFuego : number;
    get PotenciaDeFuego(): number {
        return this._potenciaDeFuego;
    }

    set PotenciaDeFuego(value: number) {
        this._potenciaDeFuego = value;
    }
    presentarse(): string {
        return "Soy un Acorazado llamado " + this.nombre + " con una potencia de fuego " + this.PotenciaDeFuego.toString();
    }

    constructor(pNombre : string, pVelocidad : number, pFlotabilidad : number, pEstabilidad : number, pPotencia : number, pPeso : number)
    {
        super(pNombre, pVelocidad, pFlotabilidad,pEstabilidad, pPeso);
        this._potenciaDeFuego = pPotencia;
    }
}