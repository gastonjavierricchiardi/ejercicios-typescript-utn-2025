---

## 1. Herencia y Reutilización (Ejercicios 8 y 9)

En estos ejercicios, el cambio fundamental fue pasar de tres clases aisladas a una estructura jerárquica.

* **Lo que se hizo:** Se definió `Persona` como la **clase padre** (o superclase) y se hizo que `Visitante` y `Guardia` heredaran de ella mediante la palabra clave `extends`.
* **La ventaja clave:** Si mañana necesitas agregar un atributo "fecha de nacimiento" a todas las personas, solo lo escribes en `Persona.ts` una vez, y automáticamente tanto el Guardia como el Visitante lo tendrán. Esto evita la duplicación de código (principio DRY: *Don't Repeat Yourself*).

---

## 2. Polimorfismo y `super` (Ejercicio 10)

Aquí es donde el código se pone interesante con el método `presentarse()`.

- **Override (Sobrescritura):** En `guardia.ts`, volviste a definir `presentarse()`. Al hacerlo, TypeScript entiende que cuando un objeto es de tipo `Guardia`, debe usar su propia versión y no la del padre.
- **El uso de `super`:** ```typescript
return `Hola, mi nombre es ${super.presentarse()} y soy el guardia.`;

```
Esto es una excelente práctica. En lugar de volver a escribir `this.getNombre() ...`, le pides al "padre" (`super`) que haga su parte del trabajo y tú solo le agregas la especialización ("... y soy el guardia").

```

---

## 3. Encapsulamiento y Tipado (Ejercicio 11)

Al agregar el `dni` en `Visitante`, mantuviste el principio de **Encapsulamiento**:

- El atributo `_dni` es `private`.
- La única forma de acceder a él es mediante `getDni()` y `setDni()`.
  Esto protege los datos y permite, por ejemplo, que en el `setDni` puedas validar que el número no sea negativo antes de asignarlo.

---

## 4. Inyección de Objetos vs. Parámetros Primitivos (Ejercicio 12)

Este es el punto más importante para debatir. En el Ejercicio 11, `controlarDocumento` recibía un `number`. En el 12, recibe un objeto `Visitante`.

### Análisis de pasar un único parámetro (el objeto completo):

| Aspecto           | Ventajas                                                                                                                                                      | Desventajas                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Flexibilidad**  | Si mañana el mensaje de control necesita mostrar también el apellido, no tienes que cambiar la firma del método, porque ya tienes todo el objeto `visitante`. | **Acoplamiento**: Ahora la clase `Guardia` "conoce" y depende de la clase `Visitante`. Si `Visitante` cambia mucho, podría afectar a `Guardia`.      |
| **Legibilidad**   | El código es más semántico: `controlarDocumento(per2)` se lee más natural que pasar una lista larga de números y strings.                                     | **Carga de Memoria**: Aunque en TypeScript es despreciable, estás pasando una referencia a un objeto completo en lugar de un simple valor primitivo. |
| **Escalabilidad** | Puedes invocar métodos del visitante dentro del guardia (como hiciste con `visitante.presentarse()`).                                                         | **Pruebas (Testing)**: Para probar el método del guardia, ahora estás obligado a crear un objeto `Visitante` completo.                               |

---

## Observaciones Técnicas Finales

1. **Constructores:** En `visitante.ts`, usaste correctamente `super(nombre, apellido)`. Es obligatorio llamar al constructor del padre antes de usar `this` en una clase que extiende de otra.
2. **Modularización:** Tienes un archivo por clase. Esto es estándar en la industria y facilita mucho el mantenimiento a medida que el proyecto crece.
3. **Implementación en el Main:** El archivo `index_01EJ08...ts` demuestra que entendiste la jerarquía, ya que tratas a cada objeto según su tipo pero aprovechas los métodos heredados de forma transparente.
