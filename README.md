# Ejercicios / Exercises

## Español

Esta carpeta contiene las resoluciones de los ejercicios desarrollados durante la cursada 2025 de Programación II.

Los ejercicios se incorporarán progresivamente, incluyendo trabajos terminados, en desarrollo y pendientes de revisión.

## Instalación y ejecución

Para ejecutar los ejercicios es necesario tener instalados Node.js y npm.

Luego de clonar el repositorio, ubicarse en la carpeta raíz e instalar las dependencias:

```bash
npm ci
```

Para verificar tipos sin generar archivos y compilar los archivos verificables:

```bash
npm run typecheck
npm run build
```

La compilación conserva las carpetas originales dentro de `dist/`. Por ejemplo:

```bash
node dist/ejercicios/01EJ02/01EJ02_index.js
```

Para ejecutar directamente un ejercicio TypeScript:

```bash
npm run ejercicio -- ejercicios/01EJ02/01EJ02_index.ts
```

El repositorio incluye los siguientes archivos de configuración:

- `package.json`: define las dependencias y los datos generales del proyecto.
- `package-lock.json`: conserva las versiones exactas instaladas.
- `tsconfig.json`: configuración estricta común que incluye `ejercicios/` y
  `dictadoDeClases/`. Solo requiere tipos de Node y da preferencia a fuentes `.ts`
  durante la ejecución con `ts-node`, aunque existan archivos `.js` vecinos.
- `tsconfig.verificables.json`: selección para `typecheck` y `build`, separando
  los ejemplos con errores de compilación conocidos. Que un archivo compile no
  significa que su ejercicio esté completo ni que su lógica esté verificada.
- `tsconfig.ejemplos.json`: selección de los ejemplos negativos e incompletos,
  con las mismas comprobaciones estrictas y sin generar archivos.

### Ejemplos negativos e incompletos

```bash
npm run typecheck:ejemplos
npm run typecheck:all
```

Ambos comandos devuelven un código de salida distinto de cero mientras existan
errores. El primero revisa la selección separada y el segundo todo el código de
las dos carpetas, sin las exclusiones de `tsconfig.verificables.json`. Los errores
sintácticos pueden impedir que el compilador muestre otros diagnósticos en esa
misma ejecución. No se omiten comprobaciones de tipos ni se modifica el código
para hacer pasar estos comandos.

Los casos separados, identificados en AUD-TS-01, son:

| Caso | Motivo de separación |
| --- | --- |
| `01EJ03/index_01ej03.ts` | Demostración deliberada de acceso rechazado a atributos privados |
| `01EJ06/prueba/index_fruta.ts` | Variante experimental con propiedades incompatibles con su clase |
| Clase 04 | Imports cuya capitalización no coincide con `Persona.ts` |
| Clases 06 y 08, Marina | Inicialización de atributos no aceptada por `strict`; en clase 08 se conserva la comprobación de `indexColecciones.ts` |
| Clase 10, Micros | Código incompleto con errores sintácticos y de tipos |
| Clase 14, `SegregationInterface/` | Calculadoras incompletas; el resto de SOLID sigue incluido |
| Clase 17, `myLista.ts` e `index.ts` | Errores en el uso de genéricos |
| Clase 19, Factory Method e `index.ts` | Inicialización de atributos e import de Singleton incorrecto; la clase Singleton sigue incluida |

La lista de exclusiones y la selección de ejemplos deben mantenerse alineadas.
Al corregir un caso en una etapa posterior, se debe reincorporar a la selección
verificable. No hay una suite de pruebas automatizadas configurada: estos comandos
comprueban tipos; las comprobaciones funcionales requieren ejecutar cada ejemplo.

La carpeta `node_modules` se genera automáticamente mediante `npm ci` y no se incluye en el repositorio. Los archivos compilados quedan en `dist/`, también ignorado por Git. `noEmitOnError` impide generar una compilación parcial cuando hay errores; no elimina salidas de compilaciones anteriores.

## Organización

Cada ejercicio tendrá su propia carpeta:

```text
ejercicios/
└── 01-nombre-del-ejercicio/
    ├── README.md
    ├── archivos TypeScript
    ├── subcarpetas necesarias
    └── uml/                    # Opcional
        └── diagrama-clases.png
```

La estructura interna podrá variar según la complejidad del ejercicio.

Cada carpeta podrá contener:

- Un `README.md` bilingüe.
- La resolución en TypeScript.
- Las subcarpetas necesarias para organizar el código.
- Diagramas UML propios dentro de una carpeta `uml`, cuando corresponda.
- Archivos necesarios para ejecutar o comprender la solución.

## Convención de nombres

Las carpetas utilizarán números correlativos y nombres descriptivos en minúsculas separados por guiones.

Ejemplos:

```txt
Esta estructura aún no la resuelvo
```

## Índice

|    N.º | Ejercicio                                                                                                                                                                                                                                         | Estado                         |
| -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 01EJ01 | Crear una clase `Persona` que tenga los atributos públicos nombre y apellido [...]                                                                                                                                                                | Resuelto ✅                    |
| 01EJ02 | Crear una clase `Vehículo` que tenga atributos públicos y privados                                                                                                                                                                                | Resuelto ✅                    |
| 01EJ03 | Crear una clase `Articulo` que tenga los atributos privados marca y modelo.                                                                                                                                                                       | Resuelto ✅                    |
| 01EJ04 | ​Crear una clase `Cine` que tenga los atributos privados película y horario                                                                                                                                                                       | Resuelto ✅                    |
| 01EJ05 | Ampliación del Ej04 (nota: sin \*.dio)                                                                                                                                                                                                            | Resuelto ✅                    |
| 01EJ06 | Crear una clase `Fruta` con variables privadas color, peso, esEstacional.                                                                                                                                                                         | Resuelto ✅                    |
| 01EJ07 | Crear una clase `Ninja` con las variables privadas arteMarcial, arma, fuerza (entero) y salto (entero).                                                                                                                                           | Resuelto ✅                    |
| 01EJ08 | ​Crear una clase `Persona` que tenga los atributos privados:                                                                                                                                                                                      | Resuelto ✅                    |
| 01EJ09 | Modificar el Ej 08 y extender `Persona`                                                                                                                                                                                                           | Resuelto ✅                    |
| 01EJ10 | Continuamos modificamos el EJ 08 ahora sobre escribimos el método `presentarse(): string {}`                                                                                                                                                      | Resuelto ✅                    |
| 01EJ11 | Continuamos con modificaciones desde el **EJ08**                                                                                                                                                                                                  | Resuelto ✅                    |
| 01EJ12 | Continuamos con modificaciones desde el **EJ08**                                                                                                                                                                                                  | Resuelto ✅                    |
| 01EJ13 | ​El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo sistema de tracción puede ser personalizado para que se adapte mejor al terreno.                                                                  | Resuelto ✅                    |
| 01EJ14 | Una empresa de seguridad que se dedica a la vigilancia mediante el empleo de drones, ha desarrollado un sistema de montaje que permitirá que los drones puedan cargar, además de la cámara de vigilancia, una herramienta accionable a distancia. | Resuelto ✅                    |
| 01EJ15 | La Marina del reino de Caballito quiere desarrollar un sistema que le permita gestionar su flota de navíos                                                                                                                                        | ⏳ Pendiente                   |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                                                                                                                                                                       | ⏳ Pendiente ✅ ❌ `✅` y `❌` |

---
