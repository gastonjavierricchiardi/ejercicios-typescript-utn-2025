import Claustrofobico from "./Micros/claustrofobico";
import Empleado from "./Micros/empleado";
import Micro from "./Micros/micro";


const objMicro1 = new Micro(0, 4, 150);
const empeladosACargo : Set<Empleado> = new Set<Empleado>();

const empleClaustro = new Claustrofobico("José", "Juarez", "123", undefined, empeladosACargo);
const empleadoObsecuento = new Obsecuente ();

if (empleClaustro.meSuboEnMicro(objMicro1))
    console.log("Me puedo subir al micro");
else
    console.log("No me puedo subir en el micro");

