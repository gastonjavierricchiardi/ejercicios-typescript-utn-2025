# Resolución de Ejercicio: Scanner de Juancito Jaquer
**Materia:** Programación II / POO
**Metodología:** Protocolo de Resolución 2.0

---

## 🛠️ Fase 1: Extracción de Lógica (Limpieza de "Lore")

### 1.1 Frase Objetivo
Un sistema que permita modelar y clasificar objetos según sus propiedades físicas y su ubicación dentro de una estructura de contención, con el fin de determinar su rol jerárquico (Simple, Contenedor, Contenido y Sambuchito).

### 1.2 Entidades del Dominio (Sustantivos)
* **OBJETO:** La entidad principal (Clase).
* **SCANNER:** El componente que procesa (Clase opcional / Main).
* **MATERIAL:** Conjunto de opciones fijas (Type/Enum).
* **CONTENIDO:** Lista de elementos dentro de un objeto (Atributo).
* **TIPO DE OBJETO:** Clasificación final (Dato derivado/Getter).

### 1.3 Acciones del Sistema (Verbos)
* **MODELAR:** Construir objetos con material y volumen.
* **VINCULAR:** Establecer qué objetos están dentro de otros.
* **CLASIFICAR:** Determinar el rol jerárquico según la contención.
* **REPORTAR:** Mostrar características y tipo resultante.

---

## 📊 Fase 2: Tablero de Datos y Reglas

### 2.1 Atributos Explícitos
* `material`: metal, cuero, madera, vidrio, plástico, líquido, textil, goma, otro.
* `volumen`: número (cm³).
* `contenido`: Array de objetos.

### 2.2 Atributos Derivados
1.  `contieneAlgo`: Verdadero si `contenido.length > 0`.
2.  `estaContenido`: Verdadero si el objeto tiene una referencia a un `padre`.

### 2.3 Matriz de Decisiones
| Tipo de Objeto | `contieneAlgo` | `estaContenido` |
| :--- | :---: | :---: |
| **Simple** | NO | NO |
| **Contenedor** | SÍ | NO |
| **Contenido** | NO | SÍ |
| **Sambuchito** | SÍ | SÍ |

---

## 🗺️ Fase 3: Mapa de Escenarios (Pruebas)

* **Mamushka:** M1 (Raíz) -> M2 (Medio) -> M3 (Fin).
* **Portafolios:** P1 (Vacío, sin padre).
* **Botiquín:** B1 -> (Gasa, Agua).
* **Bolsa:** S1 -> (Peine, Botiquín B).

**Valores Esperados:**
* M2: **Sambuchito** (Tiene padre M1 e hijo M3).
* P1: **Simple** (No tiene padre ni hijos, aunque tenga capacidad).
* Botiquín B: **Sambuchito** (Está en la bolsa y contiene insumos).

---

## 🏗️ Fase 4: Diseño de Arquitectura (UML Lite)

* **4.1 Definición de Tipos:** * `Material`: Literal Type.
    * `Clasificacion`: Literal Type.
* **4.2 Contratos:**
    * `agregarContenido(obj)`: Vincula padre e hijo.
    * `obtenerResumen()`: Imprime datos.
* **4.3 Relaciones:** Composición (Un objeto tiene a otro).
* **4.4 Decisiones Técnicas:** El "Tipo de Objeto" es un **Getter**.

---

## 💻 Fase 5: Implementación (TypeScript)

```typescript
// 1. Estructura Base (4.1)
type Material = 'metal' | 'cuero' | 'madera' | 'vidrio' | 'plástico' | 'líquido' | 'textil' | 'goma' | 'otro';
type Clasificacion = 'Simple' | 'Contenedor' | 'Contenido' | 'Sambuchito';

// 2. Clase y Constructor (4.2)
class ObjetoScanner {
    private contenidos: ObjetoScanner[] = [];
    public padre: ObjetoScanner | null = null;

    constructor(
        public material: Material,
        public volumen: number,
        public nombre: string
    ) {}

    // 3. Lógica Interna (4.2 y 4.4)
    public agregarContenido(hijo: ObjetoScanner): void {
        hijo.padre = this; // Vinculación para "estaContenido"
        this.contenidos.push(hijo); // Vinculación para "contieneAlgo"
    }

    private get contieneAlgo(): boolean {
        return this.contenidos.length > 0;
    }

    private get estaContenido(): boolean {
        return this.padre !== null;
    }

    public get tipo(): Clasificacion {
        if (this.contieneAlgo && this.estaContenido) return 'Sambuchito';
        if (this.contieneAlgo) return 'Contenedor';
        if (this.estaContenido) return 'Contenido';
        return 'Simple';
    }

    public mostrarResumen(): void {
        console.log(`[${this.nombre}] -> Mat: ${this.material} | Vol: ${this.volumen}cm3 | Tipo: ${this.tipo}`);
    }
}

// 4. Instanciación de Pruebas (Fase 3)
const m1 = new ObjetoScanner('madera', 500, 'Mamushka G');
const m2 = new ObjetoScanner('madera', 300, 'Mamushka M');
const m3 = new ObjetoScanner('madera', 100, 'Mamushka C');
m1.agregarContenido(m2);
m2.agregarContenido(m3);

const bolsa = new ObjetoScanner('cuero', 2000, 'Bolsa');
const botiquinB = new ObjetoScanner('plástico', 800, 'Botiquín Interno');
const gasa = new ObjetoScanner('textil', 50, 'Gasa');
bolsa.agregarContenido(botiquinB);
botiquinB.agregarContenido(gasa);

// 5. Ejecución
const lote = [m1, m2, m3, bolsa, botiquinB, gasa];
lote.forEach(obj => obj.mostrarResumen());