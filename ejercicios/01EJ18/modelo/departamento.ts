import { Inmueble } from "./inmueble";
import { DatosCatastrales } from "./datosCatastrales";
import { Ambiente } from "./ambiente";
import { Contacto } from "./contacto";

export class Departamento extends Inmueble {
    private _piso: number;
    private _numeroLetra: string;
    private _admiteMascotas: boolean;

    constructor(
        datosCatastrales: DatosCatastrales,
        ambientes: Ambiente[],
        contacto: Contacto,
        barrioPrivado: boolean,
        tieneGas: boolean,
        tieneCloacas: boolean,
        piso: number,
        numeroLetra: string,
        admiteMascotas: boolean,
        observacion: string = ""
    ) {
        super(datosCatastrales, ambientes, contacto, barrioPrivado, tieneGas, tieneCloacas, observacion);
        this._piso = piso;
        this._numeroLetra = numeroLetra;
        this._admiteMascotas = admiteMascotas;
    }

    public override estaCompleto(): boolean {
        return super.estaCompleto() &&
            Number.isInteger(this._piso) &&
            this._numeroLetra.trim() !== "";
    }

    public override obtenerDescripcion(): string {
        return [
            "Departamento",
            super.obtenerDescripcion(),
            `Piso: ${this._piso}`,
            `Número o letra: ${this._numeroLetra}`,
            `Admite mascotas: ${this._admiteMascotas ? "Sí" : "No"}`
        ].join("\n");
    }
}
