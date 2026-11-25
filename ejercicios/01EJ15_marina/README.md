# EJ15 — Marina de Caballito: diseño definitivo

Esta es la documentación vigente del ejercicio, conforme al modelo académico C# 2026 y al cierre documental aprobado en AUD-TS-05. El [enunciado original](01EJ15.md) se conserva como referencia de los requisitos.

## Alcance

El ejercicio modela los datos de los distintos navíos, sus relaciones de herencia y la creación de instancias para mostrar sus atributos por pantalla. La implementación utiliza una clase abstracta y cuatro clases concretas, con atributos privados, constructores y getters manuales de solo lectura.

## Modelo de clases

| Clase | Herencia | Atributos propios |
| --- | --- | --- |
| [`Navio`](navio/navio.ts), abstracta | — | `_nombre: string`, `_flotabilidad: string`, `_estabilidad: string` |
| [`Acorazado`](navio/guerra/acorazado.ts) | `Navio` | `_solidez: string`, `_blindaje: string`, `_potenciaFuego: string`, `_velocidadCrucero: number` |
| [`Destructor`](navio/guerra/destructor.ts) | `Navio` | `_solidez: string`, `_potenciaFuego: string`, `_maniobrabilidad: string`, `_velocidadCrucero: number` |
| [`BarcoHospital`](navio/hospital/barcoHospital.ts) | `Navio` | `_capacidadPacientes: number` |
| [`LanchaMedica`](navio/hospital/lanchaMedica.ts) | `Navio` | `_maniobrabilidad: string`, `_tipoMotor: string`, `_capacidadGrua: number` |

### Constructores

El constructor de `Navio` es protegido y recibe `nombre: string`, `flotabilidad: string` y `estabilidad: string`. Cada subclase tiene un constructor público que recibe primero esos tres parámetros, llama a `super()` y luego inicializa los atributos propios. El orden de los parámetros adicionales es:

- `Acorazado`: `solidez: string`, `blindaje: string`, `potenciaFuego: string`, `velocidadCrucero: number`.
- `Destructor`: `solidez: string`, `potenciaFuego: string`, `maniobrabilidad: string`, `velocidadCrucero: number`.
- `BarcoHospital`: `capacidadPacientes: number`.
- `LanchaMedica`: `maniobrabilidad: string`, `tipoMotor: string`, `capacidadGrua: number`.

### Acceso a los datos

`Navio` ofrece `getNombre(): string`, `getFlotabilidad(): string` y `getEstabilidad(): string`, heredados por las cuatro subclases. Los getters propios son:

| Clase | Getters |
| --- | --- |
| `Acorazado` | `getSolidez(): string`, `getBlindaje(): string`, `getPotenciaFuego(): string`, `getVelocidadCrucero(): number` |
| `Destructor` | `getSolidez(): string`, `getPotenciaFuego(): string`, `getManiobrabilidad(): string`, `getVelocidadCrucero(): number` |
| `BarcoHospital` | `getCapacidadPacientes(): number` |
| `LanchaMedica` | `getManiobrabilidad(): string`, `getTipoMotor(): string`, `getCapacidadGrua(): number` |

Los valores se asignan mediante los constructores. El modelo vigente no expone setters.

## Instancias del programa principal

[`01EJ15_index.ts`](01EJ15_index.ts) crea las siguientes instancias y muestra sus atributos mediante getters:

| Clase y nombre | Flotabilidad | Estabilidad | Datos adicionales |
| --- | --- | --- | --- |
| Acorazado: Ara Caballito | Alta | Alta | Solidez Alta; blindaje Pesado; potencia de fuego Alta; velocidad crucero 25 |
| Destructor: ARA Demoledor | Alta | Alta | Solidez Alta; potencia de fuego Alta; maniobrabilidad Muy alta; velocidad crucero 30 |
| BarcoHospital: Sibelancia | Excelente | Extrema | Capacidad de 75 pacientes |
| LanchaMedica: La Gaucha | Elevada | No muy buena | Maniobrabilidad Afectada; motor Fuera de borda; grúa de 300 kg |
| LanchaMedica: El Gaucho | Elevada | No muy buena | Maniobrabilidad Afectada; motor Fuera de borda; grúa de 300 kg |

## Decisiones del modelo vigente

- La clase base contiene únicamente los datos comunes a todos los navíos. Solidez y velocidad crucero pertenecen a `Acorazado` y `Destructor`.
- El escenario crea un único barco hospital: Sibelancia. Su constructor es parametrizable; la clase no impone unicidad global ni fija sus valores. La existencia de una sola instancia se cumple en el programa principal.
- La mención de la velocidad máxima del destructor contextualiza su estabilidad y maniobrabilidad. El modelo académico registra la velocidad crucero y no incorpora un atributo `velocidadMaxima` ni una simulación de navegación.
- El tipo de motor de las lanchas se representa como `string`, y la capacidad de la grúa se expresa en kilogramos.
- Para este alcance, la creación directa de las instancias y su presentación resuelven la consigna. Las propuestas históricas de `Flota`, interfaces de capacidades, Singleton y Factory no forman parte del diseño definitivo.

## UML vigente y material histórico

La página **`FINAL`** del archivo [`01EJ15_.dio`](01EJ15_.dio) es el UML vigente. Su representación exportada es [`01EJ15_.png`](01EJ15_.png). Ambos describen las cinco clases del modelo actual y sus relaciones de herencia.

Las páginas **`MIO-UML`** y **`GPT`** del mismo DIO se conservan como antecedentes históricos. Sus propuestas de atributos, tipos, setters, interfaces, `Flota` y Singleton no describen la implementación vigente. Para consultar o continuar el ejercicio se debe utilizar la página `FINAL`.

También se conservan íntegramente los cuerpos de los análisis anteriores:

- [`01EJ15_Analisis_00.md`](01EJ15_Analisis_00.md): extracción inicial de los requisitos.
- [`01EJ15_analisis_01.md`](01EJ15_analisis_01.md): propuesta preliminar de diseño, con alternativas que no fueron adoptadas.

Este cierre actualiza únicamente la documentación Markdown. Los archivos TypeScript, las páginas del DIO y la imagen PNG se conservan intactos.
