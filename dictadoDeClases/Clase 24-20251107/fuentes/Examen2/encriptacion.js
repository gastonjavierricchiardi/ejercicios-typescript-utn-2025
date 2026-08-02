"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var proceso_1 = require("./proceso");
var Encriptacion = /** @class */ (function (_super) {
    __extends(Encriptacion, _super);
    function Encriptacion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Encriptacion.prototype.procesar = function (pDocumento) {
        var textoEncriptado;
        textoEncriptado = "TEXTO ENCRIPTADO DE: " + pDocumento.contenido;
        pDocumento.contenido = textoEncriptado;
    };
    return Encriptacion;
}(proceso_1.default));
exports.default = Encriptacion;
