// \01EJ15_marina\flota\flota.ts
import { Navio } from "../navio/navio";
import { BarcoHospital } from "../navio/hospital/barcoHospital";

export class Flota {
    private _navios: Navio[] = [];

    public getNavios(): Navio[] { return [...this._navios]; }


    public agregarNavio(navio: Navio): void {
        if (navio instanceof BarcoHospital && this._navios.some(n => n instanceof BarcoHospital)) {
            throw new Error("La flota ya tiene un barco hospital.");
        }
        this._navios.push(navio);
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
