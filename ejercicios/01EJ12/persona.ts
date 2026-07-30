// \01EJ12\persona.ts

export default class Persona {
    // * 1) ATRIBUTOS
    private _nombre: string;
    private _apellido: string;
    // * 2) CONSTRUCTOR
    constructor(nombre: string, apellido: string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // * 3) PROPIEDADES
    public getNombre(): string { return this._nombre };
    public setNombre(v: string): void { this._nombre = v };

    public getApellido(): string { return this._apellido };
    public setApellido(v: string): void { this._apellido = v };
    // * 4) MÉTODOS
    public presentarse(): string {
        return `${this.getNombre()} ${this.getApellido()}`;
    }
}