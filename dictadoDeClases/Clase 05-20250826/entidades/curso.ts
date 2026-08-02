import Profesor from "./profesor";
import Reporteable from "./reporteable";

export default class Curso implements Reporteable{
    private _docente: Profesor;
    private _nombre: string;

    public constructor(docente: Profesor, nombre: string) {
        this._docente = docente;
        this._nombre = nombre;
    }

    public set docente(value: Profesor) {
        this._docente = value;
    }

    public get docente() {
        return this._docente;
    }

    public get nombre() {
        return this._nombre;
    }

    mostrarInfo(): string {
        return `Curso: ${this.nombre}`;
    }
}