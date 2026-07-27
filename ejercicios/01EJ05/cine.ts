// 01EJ05\cine.ts

export default class Cine {
    private _pelicula: string = "";
    private _horario: string = "";

    getPelicula(): string { return this._pelicula };
    setPelicula(v: string): void { this._pelicula = v };

    getHorario(): string { return this._horario };
    setHorario(v: string): void { this._horario = v };

    public obtenerCartelera(): string {
        return `La película "${this.getPelicula()}" se proyecta a las ${this.getHorario()}.`;
    }
}