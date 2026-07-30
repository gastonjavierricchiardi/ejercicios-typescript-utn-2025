Perfecto ✅ entonces no separamos todavía y arrancamos con el Ej 11.

Para que avances con el **punto 1** sin sorpresas, el checklist es:

### Punto 1 (Visitante)

- En `Visitante` agregás:
  - `private _dni: number;`
  - `getDni(): number`
  - `setDni(v: number): void`

- Y definís cómo se inicializa:
  - o lo pasás por constructor (y llamás `super(...)`)
  - o lo inicializás con un valor por defecto y lo seteás después

---

¡Está perfecto! ✅

Con ese cambio ya cumplís el **Ej 11** tal cual:

- `Visitante` tiene `dni` privado + get/set ✅
- `Guardia.controlarDocumento(dni)` **recibe un parámetro** y **devuelve** el mensaje ✅
- En el `index` lo **mostrás por consola** (sin meter `console.log` dentro del modelo → SRP ok) ✅

### Mini mejora (opcional, para que “aproveches” el dni del Visitante)

Ahora estás probando con un número fijo (26079449). Si querés que quede redondo con lo que agregaste en `Visitante`, podés sumar:

```ts
console.log("NUEVO:", per1.controlarDocumento(per2.getDni()));
```

y si querés “mostrar valores” del visitante como pide el enunciado, podés imprimir el DNI también:

```ts
console.log(
  `En Visitante = Nombre:`,
  per2.getNombre(),
  `- Apellido:`,
  per2.getApellido(),
  `- DNI:`,
  per2.getDni(),
);
```
