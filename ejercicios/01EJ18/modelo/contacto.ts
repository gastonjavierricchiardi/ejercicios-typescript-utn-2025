export class Contacto {
    private _nombre: string;
    private _apellido: string;
    private _telefono: string;
    private _correoElectronico: string;

    constructor(nombre: string, apellido: string, telefono: string, correoElectronico: string) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correoElectronico = correoElectronico;
    }

    public getNombre(): string {
        return this._nombre;
    }

    public getApellido(): string {
        return this._apellido;
    }

    public getTelefono(): string {
        return this._telefono;
    }

    public getCorreoElectronico(): string {
        return this._correoElectronico;
    }

    public estaCompleto(): boolean {
        return this._nombre.trim() !== "" &&
            this._apellido.trim() !== "" &&
            (this._telefono.trim() !== "" || this._correoElectronico.trim() !== "");
    }
}
