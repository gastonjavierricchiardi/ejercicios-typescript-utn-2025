// \01EJ15_marina\flota\flota.ts
import { Navio } from "../navio/navio";

export class Flota {
    private _navios: Navio[] = [];

    public agregarNavio(navio: Navio): void {
        this._navios.push(navio);
    }

    public getNavios(): Navio[] {
        return this._navios;
    }

    public cantidad(): number {
        return this._navios.length;
    }

    public buscarPorNombre(nombre: string): Navio | undefined {
        return this._navios.find(n => n.getNombre() === nombre);
    }

    // Muestra SOLO lo común del Navio (sin meterse con tipos concretos)
    public mostrarResumen(): void {
        console.log(`--- Flota (${this.cantidad()} navíos) ---`);
        for (const navio of this._navios) {
            console.log(
                `Nombre: ${navio.getNombre()} | ` +
                `Flotabilidad: ${navio.getFlotabilidad()} | ` +
                `Solidez: ${navio.getSolidez()} | ` +
                `Estabilidad: ${navio.getEstabilidad()} | ` +
                `Vel. Crucero: ${navio.getVelocidadCrucero()}`
            );
        }
    }
}