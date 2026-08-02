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
var inmueble_1 = require("./inmueble");
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(pProvincia, pBarrio, pNombreCalle, pAltura, pEsBarrioPrivado, pTieneCloaca, pTieneGas, pContacto, pAmbientes, pObservacion, pEstaEnVenta, pTienePileta, pTieneQuincho) {
        if (pObservacion === void 0) { pObservacion = ""; }
        if (pEstaEnVenta === void 0) { pEstaEnVenta = false; }
        if (pTienePileta === void 0) { pTienePileta = false; }
        if (pTieneQuincho === void 0) { pTieneQuincho = false; }
        var _this = _super.call(this, pProvincia, pBarrio, pNombreCalle, pAltura, pEsBarrioPrivado, pTieneCloaca, pTieneGas, pContacto, pAmbientes, pObservacion, pEstaEnVenta) || this;
        _this._tienePileta = pTienePileta;
        _this._tieneQuincho = pTieneQuincho;
        return _this;
    }
    Casa.prototype.mostrarInformacion = function () {
        var mensaje = "";
        mensaje = "Casa - Contacto " + this.contacto.info() + " / Superficie: " + this.superficieTotal() + " Ambientes: " + this.cantidadAmbientes() + " (Barrio Privado: " + this.esBarrioPrivado + ")";
        return mensaje;
    };
    Object.defineProperty(Casa.prototype, "tieneQuincho", {
        get: function () {
            return this._tieneQuincho;
        },
        set: function (value) {
            this._tieneQuincho = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Casa.prototype, "tienePileta", {
        get: function () {
            return this._tienePileta;
        },
        set: function (value) {
            this._tienePileta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Casa;
}(inmueble_1.default));
exports.default = Casa;
