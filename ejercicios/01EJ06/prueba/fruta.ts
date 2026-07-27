/**
6.​ Crear una clase Fruta con variables privadas color, peso, esEstacional.
- Crear setters y getters.
- Escribir una función llamada esComestible() que devuelva verdadero cuando la fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso.
- Definir dos constructores de modo tal que la fruta pueda crearse con los valores color, peso y estacional al momento de instanciarse, o bien crearse sin valores iniciales.
*/

export default class Fruta {
    private _color: string = "";
    private _peso: number = 0;
    private _esEstacional: boolean = false; // falso no es de estación

    /**
     * El Ejercicio pide multiples instancias por lo que suponemos que puede haber
     * multiples constructores.
     */
    // constructor(); // Firma del constructor
    // constructor(color: string, peso: number, esEstacional: boolean);
    constructor(
        color?: string,
        peso?: number,
        esEstacional?: boolean
    ) {
        this._color = color ?? "";
        this._peso = peso ?? 0;
        this._esEstacional = esEstacional ?? false;
    }
    public getColor(): string { return this._color; }
    public setColor(value: string) { this._color = value.trim(); }

    public getPeso(): number { return this._peso; }
    public setPeso(value: number) { this._peso = value; }

    public getEsEstacional(): boolean { return this._esEstacional; }
    public setEsEstacional(value: boolean) { this._esEstacional = value; }

    // Lógica de negocio
    public esComestible(): boolean {
        return this._peso < 200 && this._esEstacional === true;
    }
}