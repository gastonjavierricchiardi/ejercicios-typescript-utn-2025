import EmpleadoAbstracto from './empleadoabstracto';
export default class Jefe extends EmpleadoAbstracto
{
    public Tope(): number {
        return 250;
    }
    public autorizar(pMonto: number): void {
        if  (pMonto < this.Tope())
            console.log('El jefe ' + this.presentarse() + ' autorizó la compra de ' + pMonto );
        else
        {
            if (this.superior != undefined){
                this.superior.autorizar(pMonto);
            }
        }
    }
}