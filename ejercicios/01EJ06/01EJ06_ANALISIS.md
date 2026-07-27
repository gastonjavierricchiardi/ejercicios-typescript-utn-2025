6.​ Crear una clase Fruta con variables privadas color, peso, esEstacional.

- Crear setters y getters.

- Escribir una función llamada esComestible() que devuelva verdadero cuando la fruta pesa menos de 200 gr y es de estación, y falso en cualquier otro caso.

- Definir dos constructores de modo tal que la fruta pueda crearse con los valores color, peso y estacional al momento de instanciarse, o bien crearse sin valores iniciales.

---

## primer análisis

En la cursada, pensá el **constructor** como “el momento de nacimiento del objeto”: el lugar donde garantizás que el objeto arranca con un estado válido (o al menos definido).

### Cuándo “se necesita” un constructor

- **Si el objeto puede nacer sin datos**, podés no escribir constructor y dejar valores por defecto.
- **Si el objeto debe nacer con datos obligatorios**, usás constructor con parámetros.
- Y si el enunciado pide **dos formas de crear**, entonces necesitás contemplar **ambas**.

En tu Ej 6, el enunciado te está diciendo explícitamente:

> la fruta puede crearse **con valores** (color, peso, esEstacional) **o** crearse **sin valores iniciales**.
> Eso es “dos constructores” (dos formas de instanciar).

---

## Cómo encararlo en TypeScript (sin resolverte el código)

En TS no existen dos constructores “reales” como en Java/C#. Se hace así:

1. **Definís dos firmas** de constructor (sobrecarga), por ejemplo:

- una firma “vacía” (sin parámetros)
- otra firma con los 3 parámetros

2. **Implementás un solo constructor**, que recibe parámetros opcionales y decide:

- si vinieron, asigna esos valores
- si no, usa defaults

---

## Qué decisiones tenés que tomar (y ahí está el aprendizaje)

1. **Defaults** para “sin valores iniciales”
   Ej: `color = ""`, `peso = 0`, `esEstacional = false` (o lo que vos elijas, pero que sea coherente).

2. **Dónde se valida peso** (si querés validar)
   Podés dejarlo sin validación porque el enunciado no lo pide, o decidir que no acepte negativos.

3. **`esComestible()`** depende del estado actual
   O sea, aunque nazca “vacía”, si después seteás `peso` y `esEstacional`, puede pasar a ser comestible.

---

### Pregunta rápida (para alinear tu UML)

Cuando la fruta se crea “sin valores”: ¿qué querés que valga `peso` por defecto: `0` o `undefined`?
(Con `0` es más simple y típico para esta guía.)

---

### CORRECCIONES

¡Muy buen laburo! Está **casi** redondo, pero hay **2 errores reales** (uno en la clase y uno en el main) que te cambian los resultados del lote de pruebas.

---

## 1) `fruta.ts` — error crítico en el constructor

Tu implementación del constructor ignora el parámetro `_esEstacional`:

```ts
this._esEstacional = this._esEstacional ?? false;
```

Eso está usando **el mismo atributo** (que ya arranca en `false`) y por eso **SIEMPRE te queda `false`**, aunque instancies con `true`.

✅ La línea correcta (mínimo cambio) es:

```ts
this._esEstacional = _esEstacional ?? false;
```

> Con eso, recién ahí `new Fruta("Roja", 150, true)` va a quedar estacional = true como esperabas.

---

## 2) `index_01EJ06.ts` — error en el lote de pruebas (caso C)

En el caso C imprimís:

```ts
console.log("Fruta C ---> es comestible?", frutaA.esComestible());
```

Ahí estás evaluando **frutaA**, no **frutaC**.

✅ Debe ser:

```ts
console.log("Fruta C ---> es comestible?", frutaC.esComestible());
```

---

## 3) Resultados del lote de pruebas

### A) Con tu código tal como está ahora (con los 2 errores)

- `frutaA` → Estacional queda **false** (por bug constructor) → `esComestible()` **false**
- `frutaB` → la seteás estacional true y peso 220 → `esComestible()` **false**
- `frutaC` → también queda estacional **false** (por bug) y encima evaluás frutaA → te vuelve a dar **false**

O sea: te da **todo false**, incluso el caso A que esperabas true.

### B) Con los 2 arreglos aplicados

- **Fruta A** (150, true) → `150 < 200` y estacional true → ✅ **true**
- **Fruta B** (220, true) → `220 < 200` no se cumple → ❌ **false**
- **Fruta C** (201, true) → `201 < 200` no se cumple → ❌ **false**

---

## 4) ¿El lote de pruebas es suficiente?

Casi. Te falta **probar el otro motivo de falsedad**: cuando **no es estacional**.

Ahora estás probando:

- ✅ true por (peso ok + estacional ok)
- ❌ false por (peso no ok)

Te falta:

- ❌ false por (peso ok pero **no estacional**)

Podés agregar un caso D (no te lo escribo completo si querés seguir 1:1), pero conceptualmente sería algo como: peso < 200 y estacional = false → debe dar false.

---

Cuando me digas “OK, corregí constructor y el caso C”, pasamos al UML: ahí sí te digo si conviene mostrar getters/setters como **métodos** o como **propiedades** (porque vos los implementaste con `get`/`set` de TS).
