import { Escrito } from "./escrito";
import { Documento } from "./documento";
import { Ley } from "./ley";
import { Document } from "./document";

export class NormalizadorDocumento {
    public normalizar(escrito: Escrito): Document;
    public normalizar(documento: Documento): Document;
    public normalizar(ley: Ley): Document;
    public normalizar(origen: Escrito | Documento | Ley): Document {
        if (origen instanceof Escrito) {
            return new Document(
                origen.getLegajo(), origen.getErogacion(), origen.getCuerpo(), origen.getAutor()
            );
        }
        if (origen instanceof Documento) {
            return new Document(
                origen.getExpediente(), origen.getLanzamiento(), origen.getContenido(), origen.getNombre()
            );
        }

        return new Document(
            origen.getFolio(), origen.getEmision(), origen.getDesarrollo(), origen.getFirmante()
        );
    }
}
