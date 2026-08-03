// \01EJ15_marina\navio\capacidades\interfaces.ts

// Los usados en  === GUERRA ===
// lo usamos para los barcos de guerra
export interface IArmado {
    getPotenciaFuego(): number;
    setPotenciaFuego(value: number): void;
}

export interface IBlindado {
    getBlindaje(): number;
    setBlindaje(value: number): void;
}

// Los usados en === Hospital ===
export interface IHospital {
    getCapacidadPacientes(): number;
    setCapacidadPacientes(value: number): void;
}

// Los usados en === Lancha Médica ===
export interface IMotorFueraBorda {
    getMotorFueraBorda(): boolean;
    setMotorFueraBorda(value: boolean): void;
}

export interface IConGrua {
    getCapacidadGruaKg(): number;
    setCapacidadGruaKg(value: number): void;
}