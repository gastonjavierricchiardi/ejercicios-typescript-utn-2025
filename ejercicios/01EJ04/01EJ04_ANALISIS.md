4. ​Crear una clase Cine que tenga los atributos privados película y horario:

- Crear métodos públicos para la asignación y recuperación de valores.
- Crear un método público obtenerCartelera() que devuelva el nombre de la película y el horario.
- Crear una instancia y asignarle valores.
- Mostrar por pantalla los valores.

breve análisis:
Visto ✅ (sin resolver).

**Qué cambia respecto al Ej 3:**

- Ahora te piden **asignación y recuperación** ⇒ necesitás **setters y getters** (o properties get/set).
- Además, te piden un método público **`obtenerCartelera()`** que **devuelva** (no imprima) una combinación de _película + horario_ (probablemente un `string`).

**Criterio SOLID acá (mínimo):**

- Mantené `Cine` como modelo: que `obtenerCartelera()` **devuelva** el texto.
- El `console.log` queda en `main`, no dentro de la clase (SRP).

**Patrones:**

- No aplica patrón GoF; es encapsulación + método de consulta.

Cuando me pidas, revisamos tu esqueleto y te marco checkpoints como venimos haciendo.

---

primer check point
Checkpoint ✅ **muy bien hasta acá**.

### cine.ts

- `_pelicula` y `_horario` **private** ✅ (bien para encapsulación).
- Tenés **setters y getters** para asignación y recuperación ✅ (cumple el 2º punto del enunciado).
- La estructura por secciones (atributos / propiedades / métodos) está prolija ✅

### index.ts

- Import y `main()` listo para instanciar y probar ✅

### Lo único que falta (próximo checkpoint)

1. En `Cine` te falta el método público **`obtenerCartelera()`** que **devuelva** película + horario (no imprime).
2. En `main` te falta: **crear instancia**, **asignar valores** (con setters) y **mostrar** (con `console.log`).

Cuando vos quieras, pasame tu primera versión de `obtenerCartelera()` (solo esa función) y te doy el OK o ajuste mínimo.

---

checkpoint

Lo veo **muy bien** ✅ y ya cumple exactamente el enunciado.

### `cine.ts`

- `_pelicula` y `_horario` **private** ✅
- Tenés **setters** y **getters** ✅
- `obtenerCartelera()` es **público** y **devuelve** película + horario ✅
- Además, lo hiciste prolijo usando `getPelicula()` y `getHorario()` dentro del método (consistencia) ✅

### `index_01EJ04.ts`

- Creás instancia ✅
- Asignás valores con setters ✅
- Mostrás por pantalla usando `console.log(salaX.obtenerCartelera())` ✅
- Incluso probaste con 2 salas: perfecto como lote de prueba ✅

### Único detalle mínimo (no es error)

En `cine.ts`, por estilo, podrías agregar `public` también a `getPelicula/getHorario/set...` (o dejarlos como están; en TS ya son públicos por defecto). No cambia nada.

Si querés, el próximo paso puede ser: **agregar un constructor opcional** (sin romper setters/getters), pero solo si el apunte/cursada lo permite y te conviene.

+++++**\***+++++
cierre
+++++**\***+++++
Sí, eso que te dijeron **tiene sentido**, pero hay que leerlo con la “letra chica” de la cursada:

### 1) Por convención, _sí_ se usan getters/setters… **salvo casos particulares**

En el apunte se plantea que, **por convención**, los atributos deberían ser **privados** y accederse **a través de setters/getters**.

### 2) Pero no siempre “van los dos”: depende de lo que quieras permitir

El mismo material aclara un caso típico donde **NO** conviene tener setters:
si querés crear el objeto con ciertos valores e **impedir que se cambien después**, “la clase no debería contar con los setters de los atributos afectados”.

Eso encaja con lo que vos decís: _no se ponen “por deporte”_, se ponen cuando hacen falta para controlar acceso.

### 3) Entonces, regla práctica para tu guía

- Si el ejercicio pide **atributos públicos** (Ej 1), **no necesitás** getters/setters.
- Si el ejercicio pide **privados + asignación/recuperación** (Ej 4), ahí **sí** corresponde exponer métodos (set/get) porque si no, no podrías cumplir lo pedido.
- Si querés que algo **no cambie**, omitís el **setter** de ese atributo (como te pasó con patente).

Si querés, para el UML: cuando el enunciado **no los pide**, podés dejarlos fuera del diagrama (resumen). Cuando el enunciado **sí los pide**, conviene dibujarlos para que quede alineado con la consigna.
