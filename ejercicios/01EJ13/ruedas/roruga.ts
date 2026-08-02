// \01EJ13\ruedas\roruga.ts
import { ITraccion } from "../tracciones/traccion";
import { MekeM0 } from "../sensores/meke-m0";

export class Roruga implements ITraccion {
    // Agregamos lo que viene desde el sensor
    private _sensor: MekeM0;

    constructor(sensor: MekeM0) {
        this._sensor = sensor;
    }
    tipo(): string {
        return "Tracción a oruga";
    }
    penalizacionHp(): number {
        return 3;
    }
    kmMaximos(): number {
        return 400;
    }
    infoExtra(): string {
        return `Temperatura: ${this._sensor.leerTemperatura()} °C`;
    }
}