## 1) Qué “cosas” existen en el problema (entidades) y qué datos pide cada una

### A) Lo común a _todos_ los barcos

Hay un paquete de datos que se repite en varios:

- **nombre** (bautizado)
- **flotabilidad**
- **solidez**
- **estabilidad**
- **velocidad crucero**

👉 Esto nos pide a gritos una **abstracción base** (tipo `Navio`/`Barco`) con esos datos mínimos comunes.

---

### B) Tipos concretos y “extras” (lo que diferencia a cada uno)

**Acorazado**

- - **blindaje**
- - **potencia de fuego**
- (y los comunes)

**Destructor**

- - **potencia de fuego**
- - **maniobrabilidad**
- - (detalle del enunciado) “estabilidad cuando alcanza su **velocidad máxima**”
    ⇒ aparece un dato nuevo: **velocidadMaxima** (porque no es lo mismo que crucero).
- (y los comunes)

**Barco hospital** (único, “Sibelancia”)

- nombre fijo: **“Sibelancia”**
- “excelente flotabilidad” y “estabilidad extrema” (siguen siendo atributos, solo que con valores altos)
- - **capacidad de pacientes = 75**

**Lanchas médicas** (dos instancias: “La gaucha” y “El gaucho”)

- - **motor fuera de borda** (dato/atributo)
- - **grúa** con límite **300 kg**
- “elevada flotabilidad” (valor alto)
- “estabilidad no muy buena” que afecta la maniobrabilidad
  ⇒ acá conviene que **maniobrabilidad** exista como atributo (aunque no lo pida explícito para lanchas, el texto lo relaciona directo con estabilidad), o bien derivarla como “valor calculado”. Para el parcial/guía suele ser más claro **registrarla como dato** si el enunciado la menciona.

---

## 2) Enfoque de diseño que cumple SOLID (y evita meter “optionalitis” en la clase base)

### Propuesta de modelo (alto nivel)

1. **`Navio` (abstracto)** con lo común.
2. Subclases:
   - `Acorazado`
   - `Destructor`
   - `BarcoHospital`
   - `LanchaMedica`

Hasta acá es el típico **modelo por herencia**.

### Para cumplir mejor ISP/SRP (sin inflar `Navio`)

En vez de poner en `Navio` cosas que “a veces sí, a veces no” (blindaje, grúa, potencia de fuego, pacientes), lo más limpio para SOLID es separar **capacidades** en interfaces chicas:

- `IArmado` → potenciaFuego
- `IBlindado` → blindaje
- `IManiobrable` → maniobrabilidad (y si aplica, velocidadMaxima)
- `IMedico` → capacidadPacientes (y/o tipo de servicio)
- `IConGrua` → capacidadGruaKg
- `IMotorExterno` → tipoMotor / fueraDeBorda

Esto va directo a **ISP** (“no forzar a clases a depender de métodos/datos que no usan”) .

📌 Ojo: _no hace falta_ que haya métodos complejos; con que la interfaz marque el “contrato” y la clase tenga esos datos, ya te ordena el diseño.

---

## 3) Patrones (los mínimos que “sumen” y no ensucien)

### A) Restricción de unicidad (“Sibelancia” es única)

Acá hay 2 caminos “de cursada”:

1. **Singleton** para `BarcoHospital` (típico: “solo puede existir uno”).
2. Alternativa más SOLID: **la unicidad la controla la “Flota/Registro”** (o una Factory/Repository), evitando estado global.

Si en la cursada vieron **Singleton** y lo esperan, es el candidato obvio. Pero si querés alinearte fuerte a SOLID/DIP, yo lo pondría como **regla del gestor de flota** y listo. (Lo dejamos anotado y elegimos en el próximo paso.)

### B) Creación de barcos sin acoplar el “cliente” a clases concretas

Para que el código que arma la flota no tenga mil `new`, podés usar **Factory Method** (o una “simple factory” si la guía no exige tanto). Esto acompaña OCP/DIP: agregar un tipo nuevo sin tocar al cliente, y depender de abstracciones .

---

## 4) Relación central del sistema: “Flota”

Necesitás una entidad tipo `Flota` (o `Marina`) que **administre una colección de navíos**:

- Relación: **Flota 1 ── contiene ── \* Navio**
- Esto suele ser **agregación** (los barcos existen aunque “cambies” la flota) o **composición** si querés decir que “sin flota no existen” (en este dominio, más lógico agregación).

---
