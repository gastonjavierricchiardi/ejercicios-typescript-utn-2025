1. **Sí, agregá los dos constructores** en la sección de métodos:

```text
+ Fruta()
+ Fruta(color: string, peso: number, esEstacional: boolean)
```

2. Como el enunciado exige getters y setters, el UML completo debería incluirlos:

```text
+ getColor(): string
+ setColor(color: string): void
+ getPeso(): number
+ setPeso(peso: number): void
+ getEsEstacional(): boolean
+ setEsEstacional(esEstacional: boolean): void
+ esComestible(): boolean
```

3. **No coloques en el UML** el constructor técnico de TypeScript con parámetros opcionales:

```ts
constructor(color?: string, peso?: number, esEstacional?: boolean)
```

Eso es la implementación interna necesaria para soportar la sobrecarga. En UML se muestran las **dos formas públicas de crear la fruta**.
