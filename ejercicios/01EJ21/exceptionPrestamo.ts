export class ExceptionPrestamo extends Error {
    constructor(mensaje: string) {
        super(mensaje);
        this.name = "ExceptionPrestamo";
    }
}
