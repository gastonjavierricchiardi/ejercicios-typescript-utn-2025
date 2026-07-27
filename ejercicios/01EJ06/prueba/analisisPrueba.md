1. **Con el `index` que ya tenés, la primera clase es la correcta.**
   Ese `index` usa propiedades:

```ts
frutaA.color;
frutaB.peso = 220;
frutaB.esEstacional = true;
```

Por eso `Fruta` debe tener getters y setters con esta sintaxis:

```ts
public get color(): string
public set color(value: string)
```

2. **Tu clase no funciona por una incompatibilidad con el `index`.**
   Vos definiste métodos tradicionales:

```ts
getColor();
setColor();
getPeso();
setPeso();
```

Por lo tanto, tu clase debería utilizarse así:

```ts
frutaA.getColor();
frutaB.setPeso(220);
frutaB.setEsEstacional(true);
```

TypeScript te marcará errores como:

```text
Property 'color' does not exist on type 'Fruta'
Property 'peso' does not exist on type 'Fruta'
```

3. **El constructor de tu clase sí funciona, pero está menos ajustado al enunciado.**
   Con parámetros opcionales permite cero, uno, dos o tres argumentos. El ejercicio pide específicamente dos posibilidades: ningún argumento o los tres argumentos. La forma más precisa es declarar las dos firmas y una única implementación:

```ts
constructor();
constructor(color: string, peso: number, esEstacional: boolean);
constructor(color?: string, peso?: number, esEstacional?: boolean) {
    this._color = color ?? "";
    this._peso = peso ?? 0;
    this._esEstacional = esEstacional ?? false;
}
```

**Conclusión:** tu lógica de `esComestible()` está bien. El problema principal no es la lógica ni el constructor: es que tu clase usa `getColor()`/`setColor()`, mientras que el `index` espera propiedades `color`, `peso` y `esEstacional`.
