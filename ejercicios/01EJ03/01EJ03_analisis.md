3.​Crear una clase Articulo que tenga los atributos privados marca y modelo. // listo

●​ Crear métodos públicos para la asignación de valores. // listo

●​ Crear una instancia y asignarle valores.

●​ Notar que no es posible mostrar los valores por pantalla y analizar el motivo por lo que
esto ocurre.

+++++*****+++++
1- atributos
2- constructor
3- propiedades
4- métodos
+++++*****+++++

Análisis:
Según la cursada, este ejercicio **no es de “patrón” GoF**, es de **visibilidad + encapsulación**.

## Qué está midiendo el enunciado (y por qué “no podés mostrar”)

1. **Marca y modelo son privados**, entonces **desde `main` no se pueden referenciar** con el punto. La cursada define que **private** “puede ser referenciado únicamente desde el interior de la clase y no presenta salida al exterior”.
   ➡️ Por eso, si intentás `console.log(articulo.marca)` te va a dar error: **no es accesible**.

2. El enunciado te pide **métodos públicos para asignación**, o sea: **setters**. Y justamente la cursada dice que, por convención, los atributos se dejan **privados** y se acceden por **setters/getters** (set = asignar, get = leer).
   ➡️ Si vos creás **solo setters** (asignás valores) pero **no creás getters**, entonces el objeto queda **“escribible” pero no “legible”** desde afuera. Eso explica el “no es posible mostrar”.

3. Además, el apunte remarca que podés tener acceso **solo lectura, solo escritura o ambos** según qué métodos publiques.
   ➡️ Este ejercicio te hace experimentar el caso “solo escritura” (sin getters).

## SOLID (si corresponde acá)

* **SRP**: evitá meter `console.log` dentro de `Articulo` solo para “mostrar”. La idea de la unidad SOLID marca como problema mezclar “lógica del objeto” con “impresión”.
  ➡️ Mejor: `Articulo` modela datos; la salida por consola vive en `main` (o en otra clase de presentación). Para poder mostrar, necesitás **un método de lectura** (getter o algo que devuelva un string), no necesariamente imprimir desde adentro.

## Patrones

* **Ninguno necesario** en este punto. Es un ejercicio de **encapsulación** y de entender cómo la visibilidad “cierra” los miembros hacia afuera.

Si querés, pasame tu “esqueleto” (solo la clase `Articulo` con privados + setters) y te hago checkpoint rápido: si cumple el enunciado y si el “no puedo mostrar” te va a ocurrir exactamente como esperan.
