"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Micro = /** @class */ (function () {
    function Micro(pCapacidadDeSentados, pCapacidadDeParados, pVolumen) {
        this.sentados = new Array();
        this.parados = new Array();
        this._capacidadDeSentados = pCapacidadDeSentados;
        this._capacidadDeParados = pCapacidadDeParados;
        this._volumen = pVolumen;
    }
    Object.defineProperty(Micro.prototype, "capacidadDeSentados", {
        get: function () {
            return this.capacidadDeSentados;
        },
        enumerable: false,
        configurable: true
    });
    Micro.prototype.espaciosLibres = function () {
        var espacioLibreSentado = this._capacidadDeSentados;
        espacioLibreSentado = espacioLibreSentado - this.sentados.length;
        var espacioLibreParado = this._capacidadDeParados;
        espacioLibreParado = espacioLibreParado - this.parados.length;
        return (espacioLibreParado + espacioLibreSentado);
    };
    Object.defineProperty(Micro.prototype, "volumen", {
        get: function () {
            return this._volumen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Micro.prototype, "capacidadDeParados", {
        get: function () {
            return this._capacidadDeParados;
        },
        enumerable: false,
        configurable: true
    });
    Micro.prototype.capacidadTotal = function () {
        return this._capacidadDeParados + this.capacidadDeSentados;
    };
    Micro.prototype.hayLugar = function () {
        if (this.sentados.length + this.parados.length < this.capacidadTotal())
            return true;
        return false;
    };
    Micro.prototype.hayLugarParado = function () {
        if (this.parados.length < this._capacidadDeParados)
            return true;
        else
            return false;
    };
    Micro.prototype.hayLugarSentado = function () {
        //return (this.sentados.size < this._capacidadDeSentados);
        if (this.sentados.length < this._capacidadDeSentados)
            return true;
        else
            return false;
    };
    Micro.prototype.estaVacio = function () {
        if (this.parados.length == 0 && this.sentados.length == 0)
            return true;
        else
            return false;
    };
    Micro.prototype.ultimoEmpleadoEnSubirseySentarse = function () {
        if (!this.estaVacio()) {
            return this.sentados.pop();
        }
        return undefined;
    };
    Micro.prototype.ultimoEmpleadoEnSubirseParado = function () {
        if (!this.estaVacio()) {
            return this.parados.pop();
        }
        return undefined;
    };
    Micro.prototype.bajarEmpleado = function () {
        if (this.estaVacio())
            throw new Error("El micro esta vacio, no se puede bajar alguien que no existe");
        if (this.parados.length > 0) {
            this.parados.pop();
            return true;
        }
        return false;
    };
    return Micro;
}());
exports.default = Micro;
