import { Material } from "./types/materiales";

export class Objeto {
    private _material: Material;
    private _volumen: number;
    private _contenido: Objeto[];

    constructor(material: Material, volumen: number) {
        this._material = material;
        this._volumen = volumen;
        this._contenido = [];
    }

    public getMaterial(): Material {
        return this._material;
    }

    public getVolumen(): number {
        return this._volumen;
    }

    public agregarContenido(objeto: Objeto): void {
        if (objeto === this || objeto.contieneObjeto(this)) {
            return;
        }

        this._contenido.push(objeto);
    }

    public tieneContenido(): boolean {
        return this._contenido.length > 0;
    }

    public obtenerContenido(): Objeto[] {
        return [...this._contenido];
    }

    private contieneObjeto(objeto: Objeto): boolean {
        for (const contenido of this._contenido) {
            if (contenido === objeto || contenido.contieneObjeto(objeto)) {
                return true;
            }
        }

        return false;
    }
}
