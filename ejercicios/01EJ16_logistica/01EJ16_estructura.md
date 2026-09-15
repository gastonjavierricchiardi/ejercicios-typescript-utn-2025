src/01EJXX/01EJ16_logistica/
├─ 01EJ16_index.ts
├─ dimensiones/
│  └─ dimensiones.ts
├─ interfaces/
│  ├─ ICriterioCarga.ts
│  └─ IConVoltaje.ts              (opcional, por ahora puede quedar vacío)
├─ item/
│  ├─ item.ts                     (abstract)
│  ├─ comoda.ts
│  ├─ heladera.ts
│  ├─ lavarropas.ts
│  ├─ televisor.ts
│  ├─ bicicleta.ts
│  └─ cajaPequena.ts
├─ criterio/
│  ├─ criterioAuto.ts
│  └─ criterioCamioneta.ts
└─ vehiculo/
   ├─ vehiculo.ts                 (abstract)
   ├─ auto.ts
   └─ camioneta.ts