import { Inmueble } from "../modelo/inmueble";
import { RepositorioInmueblesMemoria } from "../persistencia/repositorioInmueblesMemoria";

export class GestorInmuebles {
    private _repositorio: RepositorioInmueblesMemoria;

    constructor(repositorio: RepositorioInmueblesMemoria) {
        this._repositorio = repositorio;
    }

    public darDeAlta(inmueble: Inmueble): boolean {
        if (!inmueble.estaCompleto()) {
            return false;
        }

        this._repositorio.guardar(inmueble);
        return true;
    }

    public obtenerInmuebles(): Inmueble[] {
        return this._repositorio.obtenerTodos();
    }
}
