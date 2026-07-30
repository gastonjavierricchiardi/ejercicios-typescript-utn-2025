8. ​Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y
   getters.

- Crear una clase llamada Visitante con los mismos atributos.
- Crear una clase Guardia con los mismos atributos.
- Crear una instancia de cada una de las clases y asignarle valores.
- Mostrar por pantalla los valores.

---

# 1er analisis:

Perfecto, charlamos el Ej 08 sin resolver ✅

## Qué hay que detectar antes de dibujar UML

Acá hay **tres clases** con “los mismos atributos” (`nombre`, `apellido`) y setters/getters.

La pregunta clave (para aplicar lo aprendido) es:

### ¿Esto pide herencia?

- Si `Visitante` y `Guardia` son **Personas** (conceptualmente), lo más limpio es:

- `Persona` como clase base

- `Visitante extends Persona`

- `Guardia extends Persona`

Eso evita duplicar atributos y getters/setters.

📌 En SOLID:

- Esto ayuda a **DRY** y mantiene el modelo consistente.

- No hay un patrón GoF acá; es **herencia básica** (generalización UML).

## Preguntas para ver si lo detectaste (antes del UML)

1. ¿Vas a repetir `nombre/apellido` en `Visitante` y `Guardia`, o vas a hacer `extends Persona`?

2. ¿`Persona` se puede instanciar directamente o querés dejarla como base (igual el enunciado no prohíbe instanciarla)?

## UML esperado (si usás herencia)

- `Persona` con:

- `- nombre: string`

- `- apellido: string`

- `+ getNombre()/setNombre()`

- `+ getApellido()/setApellido()`

- `Visitante` y `Guardia` con flecha de **herencia** hacia `Persona`

- (línea continua + triángulo blanco apuntando a `Persona`)

## Lote de pruebas

En `main`:

- crear 1 `Persona`, 1 `Visitante`, 1 `Guardia`

- setear valores (con setters)

- mostrar por pantalla (con getters o con un método que devuelva string si preferís SRP)

---

## Entonces, ¿qué hacemos con el Ej 8?

Coincido con vos: **en este punto no vale la pena implementarlo duplicando todo**, porque ya tenés el 9 hecho (herencia).

Lo que sí haría para cerrar prolijo es:

### Ventajas del uso de herencia (para “estudiar”)

- **Evita duplicación**: `nombre/apellido` y getters/setters están una sola vez (`Persona`).
- **Mantenimiento**: si cambiás una regla (por ejemplo validar `trim()`), lo hacés en un solo lugar.
- **Consistencia**: `Guardia` y `Visitante` garantizan misma interfaz (heredan los mismos métodos).
- **Extensión**: mañana podés agregar `legajo` solo a `Guardia` sin tocar `Visitante`.

📌 Y un aviso sano: **no usar herencia si no hay relación “es un”** (“Guardia es una Persona” sí; “Motor es un Auto” no).
