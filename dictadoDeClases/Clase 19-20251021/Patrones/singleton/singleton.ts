export default class Presidente
{
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
    private _titulo: string;
    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    private static _unicaInstancia: Presidente;
    public static get unicaInstancia(): Presidente {
        return Presidente._unicaInstancia;
    }

    public static nuevoPresidente (pNombre : string, pApellido : string, pTitulo : string)  : void
    {
        Presidente._unicaInstancia = new Presidente(pNombre, pApellido, pTitulo);
    }

    public static presentarse() : string
    {
        if (Presidente.unicaInstancia)
            return "Excelentisimo/a " +  Presidente.unicaInstancia.titulo + " " + Presidente.unicaInstancia.apellido + ", " + Presidente.unicaInstancia.nombre;
        
        else return "Vacante";
    }


    private constructor(pNombre : string, pApellido : string, pTitulo: string )
    {
        this._apellido = pApellido;
        this._nombre = pNombre;
        this._titulo = pTitulo;
    }
}