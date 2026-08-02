"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myNode_1 = require("./myNode");
var pacientes_1 = require("./pacientes");
var MyLista = /** @class */ (function () {
    function MyLista() {
        this.head = undefined;
    }
    MyLista.prototype.push = function (value) {
        var node = new myNode_1.default(value);
        var headAux = this.head;
        while (headAux && headAux.next) {
            headAux = headAux.next;
        }
        if (!headAux) {
            this.head = node;
        }
        else {
            headAux.next = node;
        }
        return node;
    };
    MyLista.prototype.pop = function () {
        var value = undefined;
        var headAux = this.head;
        var previous = undefined;
        while (headAux && headAux.next) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = undefined;
        }
        else {
            previous.next = undefined;
        }
        value = headAux.value;
        return value;
    };
    MyLista.prototype.insertFirst = function (value) {
        var node = new myNode_1.default(value);
        node.next = this.head;
        this.head = node;
        return node;
    };
    MyLista.prototype.removeFirst = function () {
        var value = undefined;
        if (this.head) {
            value = this.head.value;
            this.head = this.head.next;
        }
        return value;
    };
    MyLista.prototype.insertOrdered = function (value) {
        var node = new myNode_1.default(value);
        var headAux = this.head;
        var previous = undefined;
        while (headAux && headAux.value < value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = node;
        }
        else {
            previous.next = node;
        }
        node.next = headAux;
        return node;
    };
    MyLista.prototype.insertUnique = function (value) {
        var node = this.search(value);
        if (!node) {
            this.insertOrdered(value);
        }
        return node;
    };
    MyLista.prototype.delete = function (value) {
        var headAux = this.head;
        var previous = undefined;
        while (headAux && headAux.value !== value) {
            previous = headAux;
            headAux = headAux.next;
        }
        if (!previous) {
            this.head = headAux.next;
        }
        else {
            previous.next = headAux.next;
        }
        return headAux.value;
    };
    MyLista.prototype.insertarElementoDespuesDe = function (value, elementoBefore) {
        var newNode = new myNode_1.default(value);
        var nodoAnterior = new myNode_1.default(elementoBefore);
        var nodoAuxiliar = nodoAnterior.next.value;
        //newNode.next = (nodoAuxiliar as MyNode<Paciente>);
        nodoAnterior.next = newNode;
        if (newNode != this.head)
            newNode.next = nodoAuxiliar;
        return newNode;
    };
    MyLista.prototype.search = function (value) {
        var headAux = this.head;
        while (headAux && headAux.value !== value) {
            headAux = headAux.next;
        }
        return headAux;
    };
    MyLista.prototype.sort = function () {
        var value;
        var listAux = new MyLista();
        while (this.head) {
            value = this.removeFirst();
            listAux.insertOrdered(value);
        }
        this.head = listAux.head;
        listAux.clear();
    };
    MyLista.prototype.imprimirTodo = function () {
        this.imprimir(this.head);
    };
    MyLista.prototype.imprimir = function (pNodo) {
        if (pNodo.value instanceof pacientes_1.default)
            console.log(pNodo.value.codigo);
        if (pNodo.next) {
            this.imprimir(pNodo.next);
        }
    };
    MyLista.prototype.clear = function () {
        while (this.head) {
            this.removeFirst();
        }
    };
    return MyLista;
}());
exports.default = MyLista;
