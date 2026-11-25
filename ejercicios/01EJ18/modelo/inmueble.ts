import { DatosCatastrales } from "./datosCatastrales";
import { Ambiente } from "./ambiente";
import { Contacto } from "./contacto";

export abstract class Inmueble {
    private _datosCatastrales: DatosCatastrales;
    private _ambientes: Ambiente[];
    private _contacto: Contacto;
    private _observacion: string;
    private _barrioPrivado: boolean;
    private _tieneGas: boolean;
    private _tieneCloacas: boolean;

    protected constructor(
        datosCatastrales: DatosCatastrales,
        ambientes: Ambiente[],
        contacto: Contacto,
        barrioPrivado: boolean,
        tieneGas: boolean,
        tieneCloacas: boolean,
        observacion: string = ""
    ) {
        this._datosCatastrales = datosCatastrales;
        this._ambientes = [...ambientes];
        this._contacto = contacto;
        this._observacion = observacion;
        this._barrioPrivado = barrioPrivado;
        this._tieneGas = tieneGas;
        this._tieneCloacas = tieneCloacas;
    }

    public estaCompleto(): boolean {
        return this._datosCatastrales.estaCompleto() &&
            this._contacto.estaCompleto() &&
            this._ambientes.length > 0 &&
            this._ambientes.every(ambiente => ambiente.estaCompleto());
    }

    public obtenerDescripcion(): string {
        const datos = this._datosCatastrales;
        const contacto = this._contacto;
        const descripcionAmbientes = this._ambientes.map((ambiente, indice) =>
            `  ${indice + 1}. ${ambiente.getTipo()}: ${ambiente.getAncho()} x ${ambiente.getLargo()}; luminoso: ${ambiente.getLuminoso() ? "Sí" : "No"}`
        );

        return [
            `Provincia: ${datos.getProvincia()}`,
            `Barrio: ${datos.getBarrio()}`,
            `Dirección: ${datos.getCalle()} ${datos.getAltura()}`,
            `Código postal: ${datos.getCodigoPostal()}`,
            `Cantidad de ambientes: ${this._ambientes.length}`,
            ...descripcionAmbientes,
            `Contacto: ${contacto.getNombre()} ${contacto.getApellido()}`,
            `Teléfono: ${contacto.getTelefono().trim() !== "" ? contacto.getTelefono() : "No informado"}`,
            `Correo electrónico: ${contacto.getCorreoElectronico().trim() !== "" ? contacto.getCorreoElectronico() : "No informado"}`,
            `Barrio privado: ${this._barrioPrivado ? "Sí" : "No"}`,
            `Gas: ${this._tieneGas ? "Sí" : "No"}`,
            `Cloacas: ${this._tieneCloacas ? "Sí" : "No"}`,
            `Observación: ${this._observacion.trim() !== "" ? this._observacion : "Sin observaciones"}`
        ].join("\n");
    }
}
