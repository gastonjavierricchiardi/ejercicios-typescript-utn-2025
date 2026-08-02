import Barco from "./barco";
import IPesable from "./ipesable";
export default class Lancha extends Barco
{
    private _motorFueraDeBorda : boolean = false;
    public get MotorFueraDeBorda() : boolean
    {
        return this._motorFueraDeBorda;
    }
    public set MotorFueraDeBorda(value : boolean) {
        this._motorFueraDeBorda = value;
    }

    public remolcar(objeto : IPesable) : void
    {
        if (objeto.peso() > 300)
            console.log("¡Pesa más de 300 " + objeto.descripcion);
        else
            console.log("Estamos remolcando a " + objeto.descripcion);
    }

    public constructor(pNombre : string, pVelocidad : number, pFlotabilidad : number, pEstabilidad : number,  pMotor : boolean, pPeso : number)
    {
        super(pNombre, pVelocidad, pFlotabilidad,pEstabilidad, pPeso);
        this.MotorFueraDeBorda = pMotor;
    }


    presentarse(): string {
        return "Soy una lancha llamada " + this.nombre;
    }
}