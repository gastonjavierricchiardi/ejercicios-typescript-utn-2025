Perfecto, con **A** queda clarísimo: **la herramienta solo aporta peso y tipo**, y el **Dron** calcula todo.

Para empezar el análisis bien fino (sin codear), el esquema mínimo sería:

## 1) Clases / interfaz

* **Dron**

  * atributos: `velocidadBase` (5), `alturaBase` (100), `herramientaActual` (IHerramienta)
  * métodos: `velocidadActual()`, `alturaActual()`, `tipoHerramienta()`

* **IHerramienta** (interfaz)

  * `tipo(): string`
  * `pesoGramos(): number`

* **SensorInfrarrojo** (250g) implementa IHerramienta

* **Taser** (300g) implementa IHerramienta

* **BrazoRobotico** (500g) implementa IHerramienta

## 2) Regla de penalización (cómo pensarla)

* Si `peso <= 200` → velocidad = 5, altura = 100.
* Si `peso > 200`:

  * `exceso = peso - 200`
  * “por cada 50g extras” → cantidad de tramos = **exceso / 50**
    (acá hay un punto fino: si no es múltiplo de 50, normalmente se redondea hacia arriba, pero el enunciado no lo aclara; como los pesos dados son 250, 300, 500, son múltiplos, así que no te afecta por ahora)
  * Por cada tramo:

    * velocidad baja 2% (sobre la base)
    * altura baja 5% (sobre la base)

## 3) Lo que tenés que mostrar en pantalla

En cada asignación de herramienta:

* `tipoHerramienta`
* `velocidadActual`
* `alturaActual`

---

Si querés seguir 1:1, el próximo micro-paso es definir **el cálculo exacto** en palabras:

¿La reducción la aplicás como:

* **(a)** un porcentaje acumulado sobre la base (ej: 2 tramos = 4% menos de la base), o
* **(b)** compuesta (2% del resultado anterior, repetido)?

En la mayoría de guías, es **(a)** (lineal) porque dice “por cada 50g reduce X%” (se suma), pero te lo dejo para que lo decidas antes de diagramar.
