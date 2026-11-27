import { SistemaVigilancia } from "./sistemaVigilancia";

export class Program {
    public static main(): void {
        const sistema = new SistemaVigilancia();
        const registros = sistema.fetchSurveillanceData();
        sistema.printInfo(registros);
    }
}

Program.main();
