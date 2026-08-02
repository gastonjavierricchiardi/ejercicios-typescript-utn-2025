14. Una empresa de seguridad que se dedica a la vigilancia mediante el empleo de drones, ha desarrollado un sistema de montaje que permitirá que los drones puedan cargar, además de la cámara de vigilancia, una herramienta accionable a distancia.

**Actualmente el sistema de anclaje admite:**

- Sensor infrarrojo: pesa 250 gramos
- Taser: pesa 300 gramos
- Brazo robótico: pesa 500 gramos

El dron puede soportar hasta 200 gramos sin sufrir penalizaciones de velocidad (5 mts/s) ni altura (100 mts); luego, por cada 50 gramos extras, el dron reduce su velocidad en 2% y la altura en 5%.

Analizar, diseñar, diagramar las relaciones e implementar el código.

Crear instancias de cada una de las clases y asignarle al dron las distintas herramientas, procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones:

velocidad, altura y tipo de herramienta que lleva.

---

### En qué es igual al EJ13

- Tenés un “vehículo” fijo (**Dron**) con valores base.
- Tenés un componente intercambiable (**Herramienta**) con variantes concretas.
- Cambiás la herramienta y mostrás datos entre asignaciones.
- Modelo natural: **composición** + interfaz (Strategy).

### En qué cambia (lo importante)

- En el EJ13 la tracción ya te daba “penalización hp” y “km”.
- Acá la herramienta te da **peso** y el dron calcula:
  - si pesa ≤ 200g → sin penalización
  - si pesa > 200g → por cada 50g extra, baja **velocidad 2%** y **altura 5%**

O sea, el “dato” principal de la herramienta es **peso**, y el comportamiento sale del dron.

### ¿Sirve la misma idea de diseño?

Sí. Te va a quedar algo como:

- `Dron` (velocidadBase, alturaBase, herramientaActual)
- `IHerramienta` (tipo(), pesoGramos())
- `SensorInfrarrojo`, `Taser`, `BrazoRobotico` implementan `IHerramienta`

Y el dron tiene métodos tipo:

- `velocidadActual()`
- `alturaActual()`
- `tipoHerramienta()`

> No lo implemento, pero conceptualmente es eso.
