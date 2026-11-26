import { Document } from "./document";

export class AnalizadorDocumentos {
    public analizador(documentos: Document[]): void {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        for (const documento of documentos) {
            const fecha = documento.getIssueDate();
            fecha.setHours(0, 0, 0, 0);
            const cuerpo = documento.getBody();

            const aprobado = Number.isFinite(documento.getId()) &&
                cuerpo.trim() !== "" &&
                cuerpo.length >= 100 &&
                documento.getResponsible().trim() !== "" &&
                !Number.isNaN(fecha.getTime()) &&
                fecha.getTime() <= hoy.getTime();

            console.log(aprobado ? "aprobado" : "rechazado");
        }
    }
}
