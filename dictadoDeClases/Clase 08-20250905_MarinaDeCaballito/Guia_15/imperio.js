"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Imperio = /** @class */ (function () {
    function Imperio(pNombre, pFlota) {
        this._nombre = pNombre;
        this._flota = pFlota;
    }
    Object.defineProperty(Imperio.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Imperio.prototype.Presentarse = function () {
        var mensaje;
        mensaje = "Soy el imperio " + this.nombre + "\n";
        mensaje = mensaje + "Y tengo " + this._flota.length + " de flota";
        return mensaje;
    };
    return Imperio;
}());
exports.default = Imperio;
