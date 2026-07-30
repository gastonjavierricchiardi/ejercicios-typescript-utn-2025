# Ejercicios / Exercises

## Español

Esta carpeta contiene las resoluciones de los ejercicios desarrollados durante la cursada 2025 de Programación II.

Los ejercicios se incorporarán progresivamente, incluyendo trabajos terminados, en desarrollo y pendientes de revisión.

## Instalación y ejecución

Para ejecutar los ejercicios es necesario tener instalados Node.js y npm.

Luego de clonar el repositorio, ubicarse en la carpeta raíz e instalar las dependencias:

```bash
npm install
```

Para ejecutar un ejercicio:

```bash
npx ts-node ejercicios/01EJ02/index.ts
```

El repositorio incluye los siguientes archivos de configuración:

- `package.json`: define las dependencias y los datos generales del proyecto.
- `package-lock.json`: conserva las versiones exactas instaladas.
- `tsconfig.json`: contiene la configuración de TypeScript.

La carpeta `node_modules` se genera automáticamente mediante `npm install` y no se incluye en el repositorio.

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

|    N.º | Ejercicio                                                                                               | Estado                         |
| -----: | ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 01EJ01 | Crear una clase `Persona` que tenga los atributos públicos nombre y apellido [...]                      | Resuelto ✅                    |
| 01EJ02 | Crear una clase `Vehículo` que tenga atributos públicos y privados                                      | Resuelto ✅                    |
| 01EJ03 | Crear una clase `Articulo` que tenga los atributos privados marca y modelo.                             | Resuelto ✅                    |
| 01EJ04 | ​Crear una clase `Cine` que tenga los atributos privados película y horario                             | Resuelto ✅                    |
| 01EJ05 | Ampliación del Ej04 (nota: sin \*.dio)                                                                  | Resuelto ✅                    |
| 01EJ06 | Crear una clase `Fruta` con variables privadas color, peso, esEstacional.                               | Resuelto ✅                    |
| 01EJ07 | Crear una clase `Ninja` con las variables privadas arteMarcial, arma, fuerza (entero) y salto (entero). | Resuelto ✅                    |
| 01EJ08 | ​Crear una clase `Persona` que tenga los atributos privados:                                            | Resuelto ✅                    |
| 01EJ09 | Modificar el Ej 08 y extender `Persona`                                                                 | Resuelto ✅                    |
| 01EJ10 | Continuamos modificamos el EJ 08 ahora sobre escribimos el método `presentarse(): string {}`            | Resuelto ✅                    |
| 01EJ11 | Continuamos con modificaciones desde el **EJ08**                                                        | Resuelto ✅                    |
| 01EJ12 | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |
|      — | Los ejercicios se agregarán progresivamente                                                             | ⏳ Pendiente ✅ ❌ `✅` y `❌` |

---
