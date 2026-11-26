import { Solicitante } from "./solicitante";
import { PersonIdentity } from "./personIdentity";
import { Person } from "./person";
import { Prestamo } from "./prestamo";
import { ExceptionPrestamo } from "./exceptionPrestamo";

export class KokumoBank {
    private _nombreSucursal: string;

    constructor(nombreSucursal: string) {
        this._nombreSucursal = nombreSucursal;
    }

    public getNombreSucursal(): string {
        return this._nombreSucursal;
    }

    public evaluarPrestamo(solicitante: Solicitante, personIdentity: PersonIdentity): Prestamo {
        let person: Person;
        try {
            person = personIdentity.getInfo(solicitante.getDni());
        } catch (error) {
            if (!(error instanceof Error)) {
                throw error;
            }
            throw new ExceptionPrestamo(error.message);
        }

        if (this.calcularEdad(person.getBirthDate()) < 21) {
            throw new ExceptionPrestamo("No es posible extender el préstamo: no reúne la edad mínima de 21 años.");
        }

        const sueldo = solicitante.getSueldoBruto();
        if (sueldo >= 30000 && sueldo <= 40000) {
            return new Prestamo(80000, 30);
        }
        if (sueldo > 40000 && sueldo <= 60000) {
            return new Prestamo(120000, 35);
        }
        if (sueldo > 60000 && sueldo <= 80000) {
            return new Prestamo(140000, 39);
        }

        throw new ExceptionPrestamo("No se concede el préstamo: el sueldo bruto está fuera del rango de 30000 a 80000.");
    }

    public calcularEdad(birthDate: Date): number {
        if (Number.isNaN(birthDate.getTime())) {
            throw new ExceptionPrestamo("No es posible calcular la edad: la fecha de nacimiento es inválida.");
        }

        const hoy = new Date();
        let edad = hoy.getFullYear() - birthDate.getFullYear();
        if (
            hoy.getMonth() < birthDate.getMonth() ||
            (hoy.getMonth() === birthDate.getMonth() && hoy.getDate() < birthDate.getDate())
        ) {
            edad--;
        }

        return edad;
    }
}
