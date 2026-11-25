import { Inmueble } from "./inmueble";
import { DatosCatastrales } from "./datosCatastrales";
import { Ambiente } from "./ambiente";
import { Contacto } from "./contacto";

export class Casa extends Inmueble {
    private _tieneQuincho: boolean;
    private _tienePileta: boolean;

    constructor(
        datosCatastrales: DatosCatastrales,
        ambientes: Ambiente[],
        contacto: Contacto,
        barrioPrivado: boolean,
        tieneGas: boolean,
        tieneCloacas: boolean,
        tieneQuincho: boolean,
        tienePileta: boolean,
        observacion: string = ""
    ) {
        super(datosCatastrales, ambientes, contacto, barrioPrivado, tieneGas, tieneCloacas, observacion);
        this._tieneQuincho = tieneQuincho;
        this._tienePileta = tienePileta;
    }

    public override obtenerDescripcion(): string {
        return [
            "Casa",
            super.obtenerDescripcion(),
            `Quincho: ${this._tieneQuincho ? "Sí" : "No"}`,
            `Pileta: ${this._tienePileta ? "Sí" : "No"}`
        ].join("\n");
    }
}
