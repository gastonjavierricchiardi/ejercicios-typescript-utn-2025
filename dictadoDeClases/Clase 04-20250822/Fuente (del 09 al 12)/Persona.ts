export default  abstract class Persona
{
    private _nombre: string;
    private _apellido: string;

    public get apellido(): string{
        return this._apellido;
    }
    public set apellido(value: string){
        this._apellido = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public presentarse() : string
    {
        return `${this.nombre} ${this.apellido}`;
    }

    public constructor (pNombre : string, pApellido : string)
    {
        this._apellido = pApellido;
        this._nombre = pNombre;

    }
}