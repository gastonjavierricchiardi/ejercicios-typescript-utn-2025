Para el **Ej 12**, el cambio clave es este:

## Qué cambia en `controlarDocumento()`

Antes (Ej 11): recibía un `number` (dni) y armaba el mensaje.

Ahora (Ej 12): el mensaje necesita **dos datos del visitante**:

* nombre completo
* dni

Entonces tenés 2 caminos (y esto conecta con la pregunta del “único parámetro”):

### Opción A — seguir pasando datos sueltos (2 parámetros)

```ts
controlarDocumento(nombreCompleto: string, dni: number): string
```

✅ simple, directo
❌ más parámetros, más riesgo de pasar mal el orden

### Opción B — pasar un único parámetro (el objeto Visitante)

```ts
controlarDocumento(visitante: Visitante): string
```

✅ 1 solo parámetro, más “OO”, accedés a `visitante.presentarse()` y `visitante.getDni()`
❌ `Guardia` queda acoplado a la clase `Visitante` (si mañana controlás `Persona` sin dni, hay que repensar)

## Ventajas/desventajas (breve, para el análisis del enunciado)

* **Un único parámetro (Visitante)**:

  * ✅ menos errores de llamada, más expresivo
  * ✅ el guardia “controla visitantes”, suena natural
  * ❌ dependencia fuerte a `Visitante` (acoplamiento)
* **Parámetros sueltos (nombre, dni)**:

  * ✅ menos acoplamiento entre clases
  * ✅ sirve aunque no tengas objeto Visitante
  * ❌ crece la lista de parámetros (y errores)

---

Si querés mantenerte “bien POO” para este bloque, lo más natural para el 12 es **pasar el Visitante como único parámetro** y armar el mensaje con:

* `visitante.presentarse()` (nombre completo)
* `visitante.getDni()` (dni)

+++++*****+++++
Análisis mas fino
+++++*****+++++
Entiendo. Para **alinearte con lo visto en la cursada** (POO básica + herencia + override) y con **SOLID sin complicarla**, yo tomaría esta decisión:

## ✅ Para el Ej 12: elegí “un único parámetro” = pasar el objeto `Visitante`

Porque el enunciado te pide *analizar* si se puede pasar un único parámetro, y en POO lo más natural es que el guardia “controle a un visitante”, no “controle un número”.

### Cómo quedaría la idea (sin resolverte todo)

* Cambiás la firma a:

  * `controlarDocumento(visitante: Visitante): string`
* Adentro armás el mensaje usando:

  * `visitante.presentarse()`  → nombre completo
  * `visitante.getDni()` → dni

Eso respeta SRP (devuelve string, no imprime) y está alineado con el modelo OO.

---

## ¿Y SOLID?

* **SRP**: ok (Guardia construye el mensaje; imprimir queda afuera).
* **OCP / LSP**: no los estás rompiendo en este nivel.
* Lo único a notar es el **acoplamiento**: Guardia queda “pegado” a `Visitante`. Pero para este ejercicio es aceptable y muy típico.

👉 Si quisieras “más SOLID” a futuro, la evolución sería pasar un tipo más general (una interfaz tipo `IdentificableConDni`), pero eso probablemente **se va de lo que pide la guía**.

---

## Patrones

No hay un patrón GoF obligatorio acá. Esto es **modelado OO** y paso natural hacia polimorfismo / tipado.

---

## Qué tenés que hacer concretamente (paso 1)

1. En `guardia.ts`, cambiá la firma de `controlarDocumento` para que reciba un `Visitante`.
2. Ajustá el `index` para llamar:

   * `per1.controlarDocumento(per2)` (en vez de pasar el dni)

Si me pegás tu `guardia.ts` actual, te marco el cambio mínimo exacto (1:1).
