import { IFuenteVigilancia } from "./iFuenteVigilancia";
import { RegistroVigilancia } from "./registroVigilancia";
import { Gr0n3Adapter } from "./gr0n3Adapter";
import { FalderPAdapter } from "./falderPAdapter";
import { FalderP } from "./falderP";

export class SistemaVigilancia {
    public fetchSurveillanceData(): RegistroVigilancia[] {
        const registros: RegistroVigilancia[] = [];
        // IDs explícitos de la simulación: 2 no detecta objetos y 4 no existe.
        const idsDrones: number[] = [1, 2, 4, 3, 10];

        for (const id of idsDrones) {
            const fuente: IFuenteVigilancia = new Gr0n3Adapter(id);
            try {
                registros.push(...fuente.obtenerRegistros());
            } catch (error) {
                if (!(error instanceof Error)) {
                    throw error;
                }
                console.error(`Error al consultar el dispositivo aéreo ${id}: ${error.message}`);
            }
        }

        const fuenteTerrestre: IFuenteVigilancia = new FalderPAdapter(new FalderP());
        registros.push(...fuenteTerrestre.obtenerRegistros());
        return registros;
    }

    public printInfo(registros: RegistroVigilancia[]): void {
        for (const registro of registros) {
            console.log(`Dispositivo: ${registro.getIdDispositivo()}`);
            console.log(`Tipo: ${registro.getTipo()}`);
            console.log(`Tamaño: ${registro.getTamanio()}`);
            console.log(`Observaciones: ${registro.getObservaciones()}`);
            console.log();
        }
    }
}
