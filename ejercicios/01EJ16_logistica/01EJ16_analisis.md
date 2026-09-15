16.​Una empresa de logística que se encarga de realizar envíos, pone a disposición de sus clientes
dos tipos de vehículos:
●​ Una camioneta con capacidad para llevar cómodas, heladeras y lavarropas.
●​ Un auto con espacio suficiente como para llevar televisores, bicicletas plegables y cajas
pequeñas.
Modelar las entidades teniendo en cuenta las siguientes consideraciones:
●​ Los vehículos deben ofrecer el método cargar() para ir incrementando su carga, razón
por la cual la función debe recibir el dato por parámetro.
●​ Mediante el empleo del método listarItems() el vehículo deberá facilitar el listado que
compone la carga.
●​Todos los elementos poseen una descripción, dimensiones y un número que los
identifica pero, además, resulta de interés:
i.​ Cómodas: superficie y cantidad de cajones.
ii.​ Heladeras: voltaje al que trabaja y si posee freezer.
iii.​ Lavarropas: voltaje al que trabaja, carga y revoluciones de centrifugado.
iv.​ Televisores: voltaje al que trabaja, si es de led o lcd y si es inteligente.
v.​ Bicicletas: tamaño de rodado, si son eléctricas y cantidad de cambios.
Analizar, diseñar, diagramar las relaciones e implementar el código considerando que la
capacidad máxima de carga del auto es de 5 elementos, mientras que para la camioneta
es de 10.

+++++
Cómenzamos el Análisis
+++++

​Una empresa de logística que se encarga de realizar envíos, pone a disposición de sus clientes
dos tipos de vehículos:

    ●​ Una camioneta:
        con capacidad para llevar cómodas, heladeras y lavarropas.
    ●​ Un auto:
        con espacio suficiente como para llevar televisores, bicicletas plegables y cajas
        pequeñas.

Modelar las entidades teniendo en cuenta las siguientes consideraciones:


●​ Los vehículos deben ofrecer el método cargar() para ir incrementando su carga, razón
por la cual la función debe recibir el dato por parámetro.

●​ Mediante el empleo del método listarItems() el vehículo deberá facilitar el listado que
compone la carga.

● ​Todos los elementos poseen una descripción, dimensiones y un número que los
identifica pero, además, resulta de interés:

    i.​ Cómodas: superficie y cantidad de cajones.
    ii.​ Heladeras: voltaje al que trabaja y si posee freezer.
    iii.​ Lavarropas: voltaje al que trabaja, carga y revoluciones de centrifugado.
    iv.​ Televisores: voltaje al que trabaja, si es de led o lcd y si es inteligente.
    v.​ Bicicletas: tamaño de rodado, si son eléctricas y cantidad de cambios.

Analizar, diseñar, diagramar las relaciones e implementar el código considerando que la
capacidad máxima de carga del ---> auto:
                                    es de 5 elementos <---, mientras que para la 
                                    camioneta: es de 10.

+++++*****+++++
ANALISIS GPT:
+++++*****+++++
Dale, **solo análisis (sin codear)** para el Ejercicio 16. Te propongo un enfoque que respeta **SOLID** y te deja el diseño listo para diagrama + implementación.

---

## 1) Qué problema estamos modelando

Tenés 2 cosas claras:

1. **Vehículos** que “cargan” items en una **colección interna**.
2. **Items** con datos comunes (id, descripción, dimensiones) + datos específicos por tipo.

Además:

* **Auto**: capacidad máxima **5 elementos**
* **Camioneta**: capacidad máxima **10 elementos**
* Cada vehículo “está pensado” para ciertos tipos de items (auto vs camioneta).

---

## 2) Entidades principales (clases) y responsabilidades

### A) `Item` (o `ElementoCarga`) como clase base

**Común para todos los elementos**:

* `id` (number)
* `descripcion` (string)
* `dimensiones` (un objeto propio, ej. `Dimensiones`)

**Hija / especializada para cada tipo**:

* `Comoda`: + `superficie`, + `cantidadCajones`
* `Heladera`: + `voltaje`, + `tieneFreezer`
* `Lavarropas`: + `voltaje`, + `carga`, + `rpmCentrifugado`
* `Televisor`: + `voltaje`, + `tipoPantalla` (LED/LCD), + `esInteligente`
* `Bicicleta`: + `rodado`, + `esElectrica`, + `cantidadCambios`
* `CajaPequena`: *no pide extras*, así que puede quedarse como clase simple que hereda sin agregar campos (o directamente instancias de la base si te lo permiten, pero suele quedar más claro con clase propia).

📌 **Repetición de “voltaje”** (Heladera/Lavarropas/Televisor):
Para SOLID, podés marcarlo con una interfaz:

* `IConVoltaje` → `getVoltaje()/setVoltaje()`
  Así no lo metés en la clase base (porque no todos tienen voltaje).

---

### B) `Vehiculo` como clase abstracta

Tiene:

* una colección interna: `items: Item[]`

Y ofrece:

* `cargar(item: Item)` → intenta agregar (incrementa carga)
* `listarItems()` → lista lo que tiene cargado

Pero el **límite de capacidad** cambia por tipo, entonces:

* `Vehiculo` define el algoritmo general (cargar y validar)
* cada hijo define su capacidad máxima (5 o 10)

📌 Esto es muy limpio como **Template Method** (sin sobrecomplicar):
`Vehiculo.cargar()` hace:

1. validar capacidad
2. validar si el item está permitido para ese vehículo (si decidimos aplicar esa regla)
3. agregar a la colección

Y lo variable se resuelve con métodos “ganchos”:

* `getCapacidadMaxima(): number` (abstracto o protegido)
* `puedeCargar(item: Item): boolean` (abstracto o estrategia; ver abajo)

---

### C) `Auto` y `Camioneta` como especializaciones

* `Auto` → capacidad máxima 5
* `Camioneta` → capacidad máxima 10

---

## 3) Regla de “qué puede cargar cada vehículo”

Acá hay 2 interpretaciones posibles:

### Opción 1 (simple): no restringir tipos, solo capacidad

Cumplís enunciado mínimo (cargar/listar/capacidad), pero ignorás la “especialización” de items por vehículo.

### Opción 2 (recomendada): restringir por tipo de item

* Auto: Televisor, Bicicleta (plegable), CajaPequena
* Camioneta: Comoda, Heladera, Lavarropas

Para hacerlo SOLID (sin if gigante), hay dos enfoques buenos:

**A) Método abstracto `puedeCargar(item)` en cada vehículo**

* `Auto.puedeCargar(...)` decide si entra
* `Camioneta.puedeCargar(...)` decide si entra
  Pros: simple. Contras: si aparecen nuevos vehículos, se replica lógica.

**B) Strategy (más SOLID)**

* `Vehiculo` tiene una dependencia: `criterioCarga: ICriterioCarga`
* `ICriterioCarga.permite(item: Item): boolean`
* Implementaciones:

  * `CriterioAuto`
  * `CriterioCamioneta`
    Pros: OCP mejor (podés cambiar reglas sin tocar vehículos). Es muy de “patrones”.

👉 Como vos venís cuidando patrones/SOLID, **yo usaría Strategy**.

---

## 4) Qué relaciones van en el diagrama UML

* `Auto` hereda de `Vehiculo`
* `Camioneta` hereda de `Vehiculo`
* `Vehiculo` *tiene muchos* `Item` (agregación/composición; en práctica es composición: la lista vive dentro del vehículo)
* `Item` es abstracta y las otras heredan:

  * Comoda, Heladera, Lavarropas, Televisor, Bicicleta, CajaPequena
* (Opcional SOLID) `IConVoltaje` implementada por Heladera/Lavarropas/Televisor
* (Si hacemos Strategy) `Vehiculo` usa `ICriterioCarga` y `Auto/Camioneta` configuran cuál criterio usan

---

## 5) Punto exacto donde estamos y próximo paso 1:1

✅ Análisis y enfoque definidos: **clases + relaciones + decisión de estrategia**.

**Siguiente paso (sin codear todavía):** armamos el **UML Mermaid Lite** del Ejercicio 16 con:

* Vehiculo (abstract)
* Auto / Camioneta
* Item (abstract) + subclases
* ICriterioCarga + CriterioAuto/CriterioCamioneta (si confirmamos Strategy)
* IConVoltaje (opcional)

Si me decís “sí, usemos Strategy”, te dibujo el diagrama ya con esa estructura. Si preferís el método abstracto `puedeCargar`, también lo dibujo así.

