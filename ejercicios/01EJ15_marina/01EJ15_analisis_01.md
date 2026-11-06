## AUD-TS-05: alcance de las correcciones

### Ambigüedad de la unicidad y decisión adoptada

La consigna habla de gestionar «su flota» y dice que hay únicamente un barco
hospital. No exige una única instancia global por proceso ni prescribe Singleton.
El principal ya lo describe como «el único barco hospital de esta flota», y el
análisis histórico contempla controlar la unicidad desde Flota. Se adopta ese
alcance: **cada Flota admite como máximo un BarcoHospital**, incluidas sus
subclases, sin estado global ni patrones adicionales. Flotas distintas pueden
representar escenarios independientes y tener sus propios hospitales.

Una Flota comienza vacía para permitir la carga incremental de sus navíos; la
demostración completa incluye a Sibelancia. No se exige un hospital en el
constructor de Flota ni se implementa un registro global de barcos. La regla se
aplica por tipo, aunque el hospital cambie de nombre: no se confunde identidad con
el texto del nombre ni con la implementación de una interfaz. Agregar un segundo
hospital, o agregar de nuevo el mismo hospital, debe rechazarse antes de modificar
la colección, conservando el contrato `agregarNavio(navio: Navio): void` mediante
un `Error` descriptivo. No se introduce una regla de nombres únicos para los demás
barcos, ausente en el enunciado.

### Encapsulamiento y datos del hospital

`getNavios()` debe devolver una copia superficial del arreglo. Agregar, eliminar,
reemplazar u ordenar elementos de esa copia no cambia la pertenencia ni el orden
de la flota. Los elementos siguen siendo los navíos originales: sus getters y
setters explícitos continúan disponibles; no se promete una copia profunda ni
inmutabilidad de las entidades.

BarcoHospital ya inicia con nombre `Sibelancia`, capacidad `75`, flotabilidad `100`
y estabilidad `100`. Se conservan esos valores y todos sus setters, incluido el
nombre heredado. La consigna describe el hospital de la demostración, pero no
define un contrato que prohíba cambiar esos datos. La expresión «nombre fijo» del
análisis histórico se interpreta aquí como nombre inicial del caso solicitado,
no como autorización para eliminar setters. Las escalas numéricas de flotabilidad,
estabilidad, etc. son decisiones del ejemplo, no rangos definidos por la consigna.

### Revisión POO y UML histórico

Se conserva Navio abstracto, las cuatro subclases y las interfaces pequeñas
existentes. Acorazado implementa `IArmado` e `IBlindado`; Destructor, `IArmado`;
BarcoHospital, `IHospital`; y LanchaMedica, `IMotorFueraBorda` e `IConGrua`.
Sus contratos son getters y setters, no métodos llamados como las interfaces.
La restricción pertenece a Flota; las clases concretas conservan sus datos y el
resumen sigue usando los getters comunes de Navio. No se añaden Singleton,
Factory Method, interfaces nuevas ni fórmulas de estabilidad no especificadas.

`01EJ15_.dio` se conserva íntegro como diagrama histórico. Discrepancias:

- Reúne interfaces en `Classifier1` y escribe operaciones como `IArmado()` o
  `IConGrua()`; el código tiene cinco interfaces separadas con sus métodos
  `get.../set...`.
- Menciona `IManiobrable`, `IMedico` e `IMotorExterno` como propuestas; no son las
  interfaces implementadas. No hace falta agregarlas para cerrar este ejercicio.
- `buscarPorNombre()` puede devolver `undefined`, omitido en el UML; tampoco
  figura el contrato de copia de `getNavios()` ni el máximo de un hospital.
- Algunas relaciones terminan en celdas de atributos u operaciones, como la de
  Flota hacia Navio y la herencia de Acorazado, en vez de las cajas de clase.
- Faltan getters/setters y aparece el error de escritura `motorFueraDeBorada`.

### Verificaciones de cierre

Desde la raíz, con las dependencias existentes:

```bash
npm run typecheck
npm run build
npm run ejercicio -- ejercicios/01EJ15_marina/01EJ15_index.ts
npm run ejercicio -- ejercicios/01EJ15_marina/verificar_marina.ts
```

Las comprobaciones de tipos y compilación pasan. El principal conserva exactamente
la salida previa con cinco navíos. Principal y pruebas se ejecutan tanto desde TS
como desde el JS compilado, con salidas coincidentes. También se puede ejecutar
`node dist/ejercicios/01EJ15_marina/verificar_marina.js` después de compilar.

`verificar_marina.ts` usa aserciones de Node sin dependencias nuevas. Comprueba:

- Datos iniciales de los cuatro tipos de navío, los 75 pacientes de Sibelancia,
  los nombres de las dos lanchas, su motor y su grúa de 300 kg.
- Agregado normal, cantidad, búsqueda presente/ausente y resumen de cinco navíos.
- Rechazo de otro hospital, del mismo objeto repetido, de uno renombrado y de una
  subclase, dejando la colección intacta tras cada intento.
- Protección de la colección frente a inserción, eliminación, reemplazo,
  reordenamiento y vaciado del arreglo obtenido mediante `getNavios()`.
- Instantáneas de colección y conservación de las referencias a los navíos,
  flotas independientes, setters explícitos y contratos de las cinco interfaces.
- La regla no impide tener varios acorazados ni cambia por renombrar el hospital.

La prueba detectaba antes que agregar otro hospital no producía ningún rechazo;
ahora pasa con el control en Flota. La consigna, el principal, las clases concretas,
las interfaces y el diagrama histórico no se modifican. No se cambian otros
ejercicios, configuraciones generales, dependencias ni políticas de red.

Las propuestas de patrones y las anotaciones siguientes se conservan como
historial, no como requisitos pendientes ni decisiones vigentes.

---

## Análisis histórico

## 1) Qué “cosas” existen en el problema (entidades) y qué datos pide cada una

### A) Lo común a _todos_ los barcos

Hay un paquete de datos que se repite en varios:

- **nombre** (bautizado)
- **flotabilidad**
- **solidez**
- **estabilidad**
- **velocidad crucero**

👉 Esto nos pide a gritos una **abstracción base** (tipo `Navio`/`Barco`) con esos datos mínimos comunes.

---

### B) Tipos concretos y “extras” (lo que diferencia a cada uno)

**Acorazado**

- - **blindaje**
- - **potencia de fuego**
- (y los comunes)

**Destructor**

- - **potencia de fuego**
- - **maniobrabilidad**
- - (detalle del enunciado) “estabilidad cuando alcanza su **velocidad máxima**”
    ⇒ aparece un dato nuevo: **velocidadMaxima** (porque no es lo mismo que crucero).
- (y los comunes)

**Barco hospital** (único, “Sibelancia”)

- nombre fijo: **“Sibelancia”**
- “excelente flotabilidad” y “estabilidad extrema” (siguen siendo atributos, solo que con valores altos)
- - **capacidad de pacientes = 75**

**Lanchas médicas** (dos instancias: “La gaucha” y “El gaucho”)

- - **motor fuera de borda** (dato/atributo)
- - **grúa** con límite **300 kg**
- “elevada flotabilidad” (valor alto)
- “estabilidad no muy buena” que afecta la maniobrabilidad
  ⇒ acá conviene que **maniobrabilidad** exista como atributo (aunque no lo pida explícito para lanchas, el texto lo relaciona directo con estabilidad), o bien derivarla como “valor calculado”. Para el parcial/guía suele ser más claro **registrarla como dato** si el enunciado la menciona.

---

## 2) Enfoque de diseño que cumple SOLID (y evita meter “optionalitis” en la clase base)

### Propuesta de modelo (alto nivel)

1. **`Navio` (abstracto)** con lo común.
2. Subclases:
   - `Acorazado`
   - `Destructor`
   - `BarcoHospital`
   - `LanchaMedica`

Hasta acá es el típico **modelo por herencia**.

### Para cumplir mejor ISP/SRP (sin inflar `Navio`)

En vez de poner en `Navio` cosas que “a veces sí, a veces no” (blindaje, grúa, potencia de fuego, pacientes), lo más limpio para SOLID es separar **capacidades** en interfaces chicas:

- `IArmado` → potenciaFuego
- `IBlindado` → blindaje
- `IManiobrable` → maniobrabilidad (y si aplica, velocidadMaxima)
- `IMedico` → capacidadPacientes (y/o tipo de servicio)
- `IConGrua` → capacidadGruaKg
- `IMotorExterno` → tipoMotor / fueraDeBorda

Esto va directo a **ISP** (“no forzar a clases a depender de métodos/datos que no usan”) .

📌 Ojo: _no hace falta_ que haya métodos complejos; con que la interfaz marque el “contrato” y la clase tenga esos datos, ya te ordena el diseño.

---

## 3) Patrones (los mínimos que “sumen” y no ensucien)

### A) Restricción de unicidad (“Sibelancia” es única)

Acá hay 2 caminos “de cursada”:

1. **Singleton** para `BarcoHospital` (típico: “solo puede existir uno”).
2. Alternativa más SOLID: **la unicidad la controla la “Flota/Registro”** (o una Factory/Repository), evitando estado global.

Si en la cursada vieron **Singleton** y lo esperan, es el candidato obvio. Pero si querés alinearte fuerte a SOLID/DIP, yo lo pondría como **regla del gestor de flota** y listo. (Lo dejamos anotado y elegimos en el próximo paso.)

### B) Creación de barcos sin acoplar el “cliente” a clases concretas

Para que el código que arma la flota no tenga mil `new`, podés usar **Factory Method** (o una “simple factory” si la guía no exige tanto). Esto acompaña OCP/DIP: agregar un tipo nuevo sin tocar al cliente, y depender de abstracciones .

---

## 4) Relación central del sistema: “Flota”

Necesitás una entidad tipo `Flota` (o `Marina`) que **administre una colección de navíos**:

- Relación: **Flota 1 ── contiene ── \* Navio**
- Esto suele ser **agregación** (los barcos existen aunque “cambies” la flota) o **composición** si querés decir que “sin flota no existen” (en este dominio, más lógico agregación).

---
