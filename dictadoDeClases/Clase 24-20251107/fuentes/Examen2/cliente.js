"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(pDocumento, pFormaProceso) {
        this._documento = pDocumento;
        this._formaProceso = pFormaProceso;
    }
    Cliente.prototype.procesarArchivo = function () {
        this._formaProceso.procesar(this._documento);
    };
    Cliente.prototype.cambiarForma = function (pFormaProceso) {
        this._formaProceso = pFormaProceso;
    };
    Cliente.prototype.mostrarInformacionDelDocumento = function () {
        return this._documento.mostrarInfo();
    };
    return Cliente;
}());
exports.default = Cliente;
