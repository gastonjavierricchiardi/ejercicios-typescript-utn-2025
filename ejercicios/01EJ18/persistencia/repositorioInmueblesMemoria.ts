import { Inmueble } from "../modelo/inmueble";

export class RepositorioInmueblesMemoria {
    private _inmuebles: Inmueble[] = [];

    public guardar(inmueble: Inmueble): void {
        this._inmuebles.push(inmueble);
    }

    public obtenerTodos(): Inmueble[] {
        return [...this._inmuebles];
    }
}
