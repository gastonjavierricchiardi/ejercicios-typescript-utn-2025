"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inmueble = /** @class */ (function () {
    function Inmueble(pProvincia, pBarrio, pNombreCalle, pAltura, pEsBarrioPrivado, pTieneCloaca, pTieneGas, pContacto, pAmbientes, pObservacion, pEstaEnVenta) {
        if (pObservacion === void 0) { pObservacion = ""; }
        if (pEstaEnVenta === void 0) { pEstaEnVenta = false; }
        this._ambientes = new Array();
        this._altura = pAltura;
        this._ambientes = pAmbientes;
        this._tieneCloaca = pTieneCloaca;
        this._barrio = pBarrio;
        this._nombreCalle = pNombreCalle;
        this._esBarrioPrivado = pEsBarrioPrivado;
        this._tieneSuministroAGas = pTieneGas;
        this._provincia = pProvincia;
        this._contacto = pContacto;
        this._observacion = pObservacion;
        this._estaEnVenta = pEstaEnVenta;
    }
    Object.defineProperty(Inmueble.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "barrio", {
        get: function () {
            return this._barrio;
        },
        set: function (value) {
            this._barrio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "nombreCalle", {
        get: function () {
            return this._nombreCalle;
        },
        set: function (value) {
            this._nombreCalle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            this._altura = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "observacion", {
        get: function () {
            return this._observacion;
        },
        set: function (value) {
            this._observacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "esBarrioPrivado", {
        get: function () {
            return this._esBarrioPrivado;
        },
        set: function (value) {
            this._esBarrioPrivado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "tieneCloaca", {
        get: function () {
            return this._tieneCloaca;
        },
        set: function (value) {
            this._tieneCloaca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "tieneSuministroAGas", {
        get: function () {
            return this._tieneSuministroAGas;
        },
        set: function (value) {
            this._tieneSuministroAGas = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "estaEnVenta", {
        get: function () {
            return this._estaEnVenta;
        },
        set: function (value) {
            this._estaEnVenta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Inmueble.prototype, "contacto", {
        get: function () {
            return this._contacto;
        },
        set: function (value) {
            this._contacto = value;
        },
        enumerable: false,
        configurable: true
    });
    Inmueble.prototype.cantidadAmbientes = function () {
        return this._ambientes.length;
    };
    Inmueble.prototype.superficieCubierta = function () {
        var superficie = 0;
        for (var _i = 0, _a = this._ambientes; _i < _a.length; _i++) {
            var unAmbiente = _a[_i];
            if (unAmbiente.esCubierto)
                superficie = +unAmbiente.dimension();
        }
        return superficie;
    };
    Inmueble.prototype.superficieDescubierta = function () {
        var superficie = 0;
        for (var _i = 0, _a = this._ambientes; _i < _a.length; _i++) {
            var unAmbiente = _a[_i];
            if (!unAmbiente.esCubierto)
                superficie = +unAmbiente.dimension();
        }
        return superficie;
    };
    Inmueble.prototype.superficieTotal = function () {
        console.log("Superficie techada: " + this.superficieDescubierta());
        console.log("Superficie cubierta: " + this.superficieCubierta());
        return this.superficieCubierta() + this.superficieDescubierta();
    };
    return Inmueble;
}());
exports.default = Inmueble;
