7.​ Crear una clase Ninja con las variables privadas arteMarcial, arma, fuerza (entero) y salto (entero).

- Crear setters y getters manualmente.
- Crear una función saltar() que reciba un parámetro multiplicador (entero); imprimir por consola salto x parámetro.
- Crear la función ataque() que imprima por consola el arma que usa el ninja y el arte marcial.
- Crear dos instancias de Ninja, asignar distintos valores para cada uno de los atributos e invocar las funciones saltar() y ataque().

---

## Qué está pidiendo el ejercicio (lo esencial)

Vas a modelar una clase `Ninja` con **4 atributos privados:**

- `arteMarcial` (string)

- `arma` (string)

- `fuerza` (entero)

- `salto` (entero)

Y después:

1. **Setters y getters manuales**

&nbsp; Acá “manual” suele significar **métodos tipo `getX()` / `setX()`**, no properties `get x()` / `set x()`.

2. `saltar(multiplicador: entero)`

&nbsp; Tiene que **imprimir** `salto \* multiplicador`.

3. `ataque()`

&nbsp; Tiene que **imprimir** el arma y el arte marcial.

4. En `main`: crear **2 ninjas**, asignar valores distintos y ejecutar `saltar()` y `ataque()` en ambos.

---

## ¿Patrones de diseño?

Para este ejercicio, **no aplica ningún patrón GoF** de manera natural. Es un ejercicio de encapsulación + métodos.

---

## ¿SOLID?

Acá sí hay un tema: **SRP (Single Responsibility)**.

- Si seguimos el enunciado literal, `saltar()` y `ataque()` **imprimen** por consola → la clase mezcla “modelo del dominio” con “salida por consola”.

- En SRP puro, lo ideal sería que esos métodos **devuelvan un string** (o un número) y que el `console.log` quede en `main` (o en otra clase).

📌 PERO: como el enunciado dice explícitamente “imprimir por consola”, probablemente la cátedra quiere verlo así, aunque no sea SRP perfecto.

### Entonces necesito que me digas cómo seguimos

¿Querés que lo hagamos:

1. **Literal al enunciado** (los métodos imprimen), o

2. **SRP estricto** (los métodos devuelven y `main` imprime), y en un comentario aclaramos que el enunciado pedía imprimir?

---

# Resumen

Tranquilo, estás **muy cerca**, pero te mezclaste en 3 puntos. Te lo dejo **directo y cortito** para destrabar.

---

## 1) `Ninja.ts`: sacá esos `export {}` pegados y el `;` final raro

Tu archivo debería terminar **solo** con la clase. Nada de:

```ts
}; export {};
```

✅ Dejalo así al final:

```ts
}
```

(El `export {}` se usa en otros ejercicios para “forzar módulo”, pero acá ya estás exportando la clase, no hace falta.)

---

## 2) `acciones.ts`: NO lo hagas clase, hacelo funciones sueltas

Vos dijiste que `acciones.ts` iba a tener funciones sueltas. Entonces no uses `class Acciones`.

✅ `acciones.ts` debería ser así:

```ts
import Ninja from "./Ninja";

export function imprimirSalto(ninja: Ninja, multiplicador: number): void {
  console.log(ninja.saltar(multiplicador));
}

export function imprimirAtaque(ninja: Ninja): void {
  console.log(ninja.ataque());
}
```

Listo. SRP OK: Ninja no imprime, acciones sí.

---

## 3) `index_01EJ07.ts`: estás llamando mal a `imprimirSalto`

Esto que pusiste:

```ts
(imprimirSalto, mininja1);
```

no llama nada.

✅ Tenés que **importar las funciones** y llamarlas bien:

```ts
import Ninja from "./Ninja";
import { imprimirSalto, imprimirAtaque } from "./acciones";

function main(): void {
  const ninja1 = new Ninja("Karate", "Nunchaku", 9, 5);
  const ninja2 = new Ninja("Ninjutsu", "Katana", 7, 3);

  imprimirSalto(ninja1, 2);
  imprimirAtaque(ninja1);

  imprimirSalto(ninja2, 3);
  imprimirAtaque(ninja2);
}

main();
```

---

### Resumen del “arreglo”

- `Ninja.ts` = solo la clase (sin `export {}` al final).
- `acciones.ts` = **funciones sueltas exportadas** (no clase).
- `index` = `import { imprimirSalto, imprimirAtaque }` y llamadas con paréntesis.

Aplicá esos 3 cambios y me pegás **solo el error que te quede** (si queda alguno).
