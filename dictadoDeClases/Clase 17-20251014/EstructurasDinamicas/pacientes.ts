//código, nombres, apellido, dirección y teléfono. 
export default class Paciente
{
    private _codigo: string;
    public get codigo(): string {
        return this._codigo;
    }
    public set codigo(value: string) {
        this._codigo = value;
    }
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _apellido: string;
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    private _direccion: string;
    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(value: string) {
        this._direccion = value;
    }

    private _telefono: string;
    public get telefono(): string {
        return this._telefono;
    }
    public set telefono(value: string) {
        this._telefono = value;
    }

    constructor(pCodigo : string, pNombre : string, pApellido : string, pDireccion : string, pTelefono : string)
    {
        this._apellido = pApellido;
        this._codigo   = pCodigo;
        this._nombre = pNombre;
        this._direccion = pDireccion;
        this._telefono = pTelefono;
    }
}