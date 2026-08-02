import EmpleadoAbstracto from "./empleadoabstracto";

export default class Gerente extends EmpleadoAbstracto
{
    public Tope(): number {
        return 2000;
    }

    public autorizar(pMonto: number): void {
        if  (this.Tope() > pMonto)
            console.log('El gerente ' + this.presentarse() + ' autorizó la compra de ' + pMonto )
        else
            if (this.superior != undefined)
                this.superior.autorizar(pMonto);
    }
    
}