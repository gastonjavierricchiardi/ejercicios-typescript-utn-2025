import EmpleadoAbstracto from "./empleadoabstracto";

export default class empleado extends EmpleadoAbstracto
{
    public Tope(): number {
        return 50;
    }
    public autorizar(pMonto: number): void {
        if(this.Tope() > pMonto)
            console.log('El empleado ' + this.presentarse() + ' autorizó la compra de ' + pMonto );
        else
            if (this.superior){
                console.log(this.presentarse() + ' no puede aprobar, se lo pide al superior ');
                this.superior.autorizar(pMonto);
            }
                
    }
    
}