import assert from "node:assert/strict";
import { Flota } from "./flota/flota";
import { Navio } from "./navio/navio";
import { Acorazado } from "./navio/guerra/acorazado";
import { Destructor } from "./navio/guerra/destructor";
import { BarcoHospital } from "./navio/hospital/barcoHospital";
import { LanchaMedica } from "./navio/hospital/lanchaMedica";
import { IArmado, IBlindado, IHospital, IMotorFueraBorda, IConGrua } from "./navio/capacidades/interfaces";

const acorazado = new Acorazado("La Argentina", 95, 90, 85, 45, 88, 92);
const destructor = new Destructor("El Rayo", 90, 80, 78, 42, 85, 92, 60);
const hospital = new BarcoHospital();
const gaucha = new LanchaMedica("La gaucha", 95, 70, 40, 48, 55, true, 300);
const gaucho = new LanchaMedica("El gaucho", 95, 70, 40, 48, 55, true, 300);
const barcos: Navio[] = [acorazado, destructor, hospital, gaucha, gaucho];

assert.deepEqual(
    barcos.map(n => [n.getNombre(), n.getFlotabilidad(), n.getSolidez(), n.getEstabilidad(), n.getVelocidadCrucero()]),
    [
        ["La Argentina", 95, 90, 85, 45],
        ["El Rayo", 90, 80, 78, 42],
        ["Sibelancia", 100, 80, 100, 35],
        ["La gaucha", 95, 70, 40, 48],
        ["El gaucho", 95, 70, 40, 48]
    ]
);
assert.deepEqual([acorazado.getBlindaje(), acorazado.getPotenciaFuego()], [88, 92]);
assert.deepEqual([destructor.getPotenciaFuego(), destructor.getManiobrabilidad(), destructor.getVelocidadMaxima()], [85, 92, 60]);
assert.equal(hospital.getCapacidadPacientes(), 75);
for (const lancha of [gaucha, gaucho]) {
    assert.deepEqual([lancha.getMotorFueraBorda(), lancha.getCapacidadGruaKg(), lancha.getManiobrabilidad()], [true, 300, 55]);
}

const flota = new Flota();
assert.equal(flota.cantidad(), 0);
assert.equal(flota.buscarPorNombre("Sibelancia"), undefined);
for (const barco of barcos) flota.agregarNavio(barco);
assert.equal(flota.cantidad(), 5);
assert.deepEqual(flota.getNavios(), barcos);
assert.equal(flota.buscarPorNombre("Sibelancia"), hospital);
assert.equal(flota.buscarPorNombre("Inexistente"), undefined);

function verificarRechazo(otroHospital: BarcoHospital): void {
    assert.throws(() => flota.agregarNavio(otroHospital), /La flota ya tiene un barco hospital\./);
    assert.equal(flota.cantidad(), 5);
    assert.deepEqual(flota.getNavios(), barcos, "El rechazo no debe alterar el estado");
}

verificarRechazo(new BarcoHospital());
verificarRechazo(hospital);
const otroHospital = new BarcoHospital();
otroHospital.setNombre("Otro hospital");
verificarRechazo(otroHospital);
class HospitalDePrueba extends BarcoHospital {}
verificarRechazo(new HospitalDePrueba());

const copia = flota.getNavios();
assert.notEqual(copia, flota.getNavios());
copia.push(new BarcoHospital());
assert.deepEqual(flota.getNavios(), barcos);
copia.pop();
assert.deepEqual(flota.getNavios(), barcos);
copia[0] = otroHospital;
assert.deepEqual(flota.getNavios(), barcos);
copia.reverse();
assert.deepEqual(flota.getNavios(), barcos);
copia.length = 0;
assert.equal(flota.cantidad(), 5);
assert.deepEqual(flota.getNavios(), barcos);

// Una copia es una instantánea del arreglo, no una copia de los navíos.
assert.equal(flota.getNavios()[2], hospital);
const independiente = new Flota();
const instantaneaVacia = independiente.getNavios();
const hospitalIndependiente = new HospitalDePrueba();
independiente.agregarNavio(hospitalIndependiente);
assert.deepEqual(instantaneaVacia, []);
assert.equal(independiente.cantidad(), 1);
assert.notEqual(hospitalIndependiente, hospital);
assert.throws(() => independiente.agregarNavio(new BarcoHospital()), /La flota ya tiene un barco hospital\./);
assert.equal(independiente.cantidad(), 1);
assert.equal(flota.cantidad(), 5);

const mensajes: unknown[][] = [];
const logOriginal = console.log;
console.log = (...args: unknown[]): void => { mensajes.push(args); };
try {
    flota.mostrarResumen();
} finally {
    console.log = logOriginal;
}
assert.equal(mensajes.length, 6);
assert.deepEqual(mensajes[0], ["--- Flota (5 navíos) ---"]);
assert.deepEqual(mensajes[3], ["Nombre: Sibelancia | Flotabilidad: 100 | Solidez: 80 | Estabilidad: 100 | Vel. Crucero: 35"]);

// Los setters explícitos y los contratos de las interfaces se conservan.
const armado: IArmado = acorazado;
const blindado: IBlindado = acorazado;
armado.setPotenciaFuego(93);
blindado.setBlindaje(89);
assert.deepEqual([armado.getPotenciaFuego(), blindado.getBlindaje()], [93, 89]);
const destructorArmado: IArmado = destructor;
destructorArmado.setPotenciaFuego(86);
destructor.setManiobrabilidad(91);
destructor.setVelocidadMaxima(61);
assert.deepEqual([destructorArmado.getPotenciaFuego(), destructor.getManiobrabilidad(), destructor.getVelocidadMaxima()], [86, 91, 61]);
const medico: IHospital = hospital;
medico.setCapacidadPacientes(80);
hospital.setNombre("Hospital actualizado");
assert.equal(medico.getCapacidadPacientes(), 80);
assert.equal(flota.buscarPorNombre("Hospital actualizado"), hospital);
assert.equal(flota.buscarPorNombre("Sibelancia"), undefined);
verificarRechazo(new BarcoHospital());

const motor: IMotorFueraBorda = gaucha;
const grua: IConGrua = gaucha;
motor.setMotorFueraBorda(false);
grua.setCapacidadGruaKg(250);
gaucha.setManiobrabilidad(50);
assert.deepEqual([motor.getMotorFueraBorda(), grua.getCapacidadGruaKg(), gaucha.getManiobrabilidad()], [false, 250, 50]);
gaucho.setNombre("Lancha actualizada");
gaucho.setFlotabilidad(94);
gaucho.setSolidez(71);
gaucho.setEstabilidad(41);
gaucho.setVelocidadCrucero(47);
assert.deepEqual([gaucho.getNombre(), gaucho.getFlotabilidad(), gaucho.getSolidez(), gaucho.getEstabilidad(), gaucho.getVelocidadCrucero()], ["Lancha actualizada", 94, 71, 41, 47]);

// La unicidad del hospital no impone un único barco de cada tipo.
flota.agregarNavio(new Acorazado("Otro acorazado", 90, 90, 90, 40, 80, 80));
assert.equal(flota.cantidad(), 6);
assert.equal(flota.getNavios().filter(n => n instanceof BarcoHospital).length, 1);
assert.equal(independiente.getNavios().filter(n => n instanceof BarcoHospital).length, 1);

console.log("Marina: datos, interfaces, unicidad por flota, rechazos y copia de colección verificados.");
