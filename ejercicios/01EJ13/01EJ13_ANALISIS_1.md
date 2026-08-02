13. ​El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo sistema de tracción puede ser personalizado para que se adapte mejor al terreno.

## El robot, llamado KT-2020, tiene las siguientes características:

- Número de serie: KT-2020-P
- Potencia de tracción base (PTB): 10 hp
- Tracción: cualquiera de las dos opciones desarrolladas.

**Los sistemas de tracción disponibles son:**

- **Rueda de caucho:** ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el rodado de hasta 100 km; cuando se gasta, debe reemplazarse.

- **Oruga:** para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la temperatura.

### Analizar, diseñar, diagramar las relaciones e implementar el código.

Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción, procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:

1. Número de serie
2. potencia de tracción final
3. tipo de tracción,
4. cuanto puede avanzar
5. y datos sobre cualquier característica adicional que posea.

---

#### ANÁLISIS:

## 1) Qué está pidiendo el dominio (qué hay que modelar)

Tenés 2 “cosas grandes”:

- **Robot KT-2020** (tiene identidad + una potencia base)
- **Sistema de tracción** (es intercambiable y afecta potencia + kilómetros + extras)

El robot debe poder **cambiar** su tracción y, tras cada asignación, **mostrar**:

- Número de serie
- Potencia final (PTB – penalización de la tracción)
- Tipo de tracción
- Cuánto puede avanzar (km)
- “Característica adicional” (solo la oruga: temperatura con sensores Meke-M0)

## 2) Relación correcta entre Robot y Tracción

Acá la relación natural es **composición** (o al menos agregación) porque:

- El robot _usa_ una tracción para comportarse (potencia final y alcance).
- Y _querés_ poder **reasignarla en runtime** (le saco rueda, le pongo oruga).

📌 En UML: `Robot 1 ---- 1 Traccion` (o `0..1` si permitís “sin tracción”, pero el enunciado sugiere que siempre tiene una).

Esto además coincide con la idea de que **composición permite variar comportamiento en tiempo de ejecución reasignando componentes**.

## 3) ¿Se usa un patrón? Sí: encaja perfecto como Strategy

Sin meterlo “a la fuerza”, esto **es Strategy** casi directo:

- `Robot` = **Context**
- `ITraccion` (o `Traccion` abstracta) = **Strategy**
- `RuedaCaucho` y `Oruga` = **ConcreteStrategy**

Porque tenés _un comportamiento variable_ (cómo se calcula potencia final, alcance, extras) **intercambiable** sin cambiar el robot.

Esto está alineado con lo que vieron: **Strategy permite intercambiar “algoritmos/variantes” dinámicamente usando composición**.

> Ojo: no hace falta “nombrarlo” Strategy en el código, pero en la **justificación** del ejercicio, lo podés defender como Strategy.

## 4) Qué responsabilidades tendría cada clase (SRP bien aplicado)

**Robot**

- Guarda: `numeroSerie`, `ptb`, `traccionActual`
- Sabe: calcular o exponer `potenciaFinal` (usando la tracción)
- Sabe: “mostrar estado” (o devolver un DTO/string con los datos a imprimir)

**Tracción (abstracción)**

- Debe poder responder:
  - `tipo()` (o `getNombre()`)
  - `penalizacionHp()` (1 o 3)
  - `kmMaximos()` (100 o 400)
  - `infoExtra()` (rueda: “sin extra”; oruga: temperatura)

**RuedaCaucho**

- Implementa lo anterior con: penalización 1, km 100, sin sensores.

**Oruga**

- Implementa lo anterior con: penalización 3, km 400
- - “extra”: **temperatura** vía sensores Meke-M0

**SensorMekeM0** (opcional, pero prolijo)

- Responsabilidad única: proveer/leer temperatura.
- Así Oruga no “mezcla” lógica de tracción con lógica de sensor.

## 5) SOLID, aplicado a este caso (sin chamuyo)

- **SRP**: Robot no debería tener lógica específica de “rueda vs oruga”; eso vive en cada tracción.
- **OCP**: si mañana aparece “Patines magnéticos”, agregás `PatinMagnetico` sin tocar Robot (solo nueva clase que implementa la interfaz).
- **LSP**: cualquier `ITraccion` debe poder reemplazar a otra sin romper al Robot (ej: siempre devolver números válidos, no lanzar excepciones raras).
- **ISP**: interfaz chica: no obligues a Rueda a implementar cosas que solo tiene Oruga (ej. `getTemperatura()`). Mejor `infoExtra()` o una interfaz extra tipo `ITraccionConTemperatura`.
- **DIP**: Robot depende de **abstracción** (`ITraccion`), no de `new Oruga()` adentro. Se la asignás por constructor o setter.

## 6) Punto “fino” del enunciado: “cuando se gasta, debe reemplazarse”

Acá tenés dos caminos de diseño (elegís uno según cómo venga la guía):

**Opción A (simple, probablemente suficiente para el ejercicio):**

- Modelás solo “km máximos antes de reemplazo” (100 / 400).
- No simulás desgaste real.

**Opción B (más realista):**

- La tracción guarda `kmDisponibles` o `kmRestantes`.
- Robot tiene un método tipo `avanzar(km)` y reduce el resto.
- Si llega a 0 → “requiere reemplazo”.

Como tu consigna principal es “mostrar datos entre asignaciones”, **A** suele alcanzar.

---
