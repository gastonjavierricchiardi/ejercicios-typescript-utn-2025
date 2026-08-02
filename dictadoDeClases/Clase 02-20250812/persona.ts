export default class Persona {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;

    constructor(apellido: string = "", nombre: string = "", edad: number = 0) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Property para nombre
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        if (value.trim().length > 0) {
            this._nombre = value;
        } else {
            console.log("El nombre no puede estar vacío");
        }
    }

    public get nombreCompleto(): string {
        return `${this._apellido}, ${this._nombre}`;
    }

    // Property para edad
    public get edad(): number {
        return this._edad;
    }

    public set edad(value: number) {
        if (value >= 0) {
            this._edad = value;
        } else {
            console.log("La edad no puede ser negativa");
        }
    }

    public setNombre(value: string) {
        this._nombre = value;
    }

    public getNombre(): string {
        return this._nombre;
    }

    // Método para mostrar información
    public mostrarInfo(): string {
        return `Persona: ${this.nombreCompleto}, Edad: ${this._edad} años - Es mayor de edad: ${this.esMayorEdad()}`;
    }

    public cumplirAnios(): void {
        this._edad += 1;
    }

    public esMayorEdad(): string {
        return this._edad >= 18 ? 'Si' : 'No';
    }
}