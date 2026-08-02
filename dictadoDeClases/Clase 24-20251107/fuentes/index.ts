import Cliente from "./Examen2/cliente";
import Compresion from "./Examen2/compresion";
import Documento from "./Examen2/documento";
import Encriptacion from "./Examen2/encriptacion";


const objFormaComprimir : Compresion = new Compresion();
const objFormaEncriptar : Encriptacion = new Encriptacion();
const documento : Documento = new Documento("unarchivo", "el contenido del archivo");

const objCliente : Cliente = new Cliente(documento, objFormaComprimir);

console.log(objCliente.mostrarInformacionDelDocumento());
objCliente.procesarArchivo();
console.log(objCliente.mostrarInformacionDelDocumento());


objCliente.cambiarForma(objFormaEncriptar);
objCliente.procesarArchivo();

console.log(objCliente.mostrarInformacionDelDocumento());


