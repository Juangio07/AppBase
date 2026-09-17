---
name: fixelar-identity
description: Conserva la identidad visual, de interacción y técnica de la familia Fixelar al crear o modificar aplicaciones y módulos Fixelar.
metadata:
  short-description: Mantener la identidad de la familia Fixelar
---

# Identidad Fixelar

## Propósito

Mantener una familia coherente de aplicaciones Fixelar. Cada producto puede resolver una necesidad de negocio diferente, pero debe seguir siendo reconociblemente Fixelar en su acceso, navegación, componentes, estados, colores y comportamiento.

Esta skill define cómo debe verse y comportarse la aplicación. La temática, alcance, usuarios, roles y funcionalidades particulares deben provenir de `AppSpecification` o de una petición explícita.

## Base obligatoria

Toda aplicación Fixelar parte de la base existente, no de una aplicación vacía. Debe conservar:

- Pantalla de Acceso/Login.
- Menu/AppShell.
- Sidebar y topbar.
- Comportamiento de sidebar colapsado.
- Configuración compartida.
- Estilos y tokens compartidos.
- Entrada Electron y preload seguro.
- Logos oficiales.
- Font Awesome Classic Solid.

No rediseñar Acceso ni Menu para resolver una necesidad específica de un módulo. Las nuevas pantallas deben parecer parte del mismo producto.

## Fuente de identidad

Leer `Shared/Config/AppConfig.js` antes de modificar identidad o interfaz. La configuración central debe controlar, cuando corresponda:

- Nombre de la aplicación.
- Logos.
- Colores principales, secundarios y de acento.
- Fondos de identidad.
- Textos del Login.
- Clasificación, slogan y descripción funcional.

`Shared/Config/FixelarGlobal.js` conecta esa configuración con las variables CSS en tiempo de ejecución.

Usar `Shared/Css/Variables.css` para tokens estructurales, neutros, radios, sombras, tipografía y estados. Usar `Shared/Css/Global.css` para reglas y componentes globales.

Los colores de producto no deben escribirse directamente en CSS de módulos ni en componentes. Consumir variables semánticas como:

- `--brand-primary`.
- `--brand-primary-hover`.
- `--brand-primary-light`.
- `--brand-on-primary`.
- `--app-accent`.
- `--success`, `--warning` y `--danger`.

Los logos deben provenir de `Assets/Logos` y configurarse desde `AppConfig.js`; no deben copiarse ni incrustarse desde otra aplicación.

## Lenguaje visual compartido

Conservar la línea visual de Acceso y Menu en:

- Tipografía y jerarquía.
- Espaciados y proporciones.
- Radios y sombras.
- Tarjetas, paneles, tablas e inputs.
- Botones primarios y secundarios.
- Estados hover, focus, activo, deshabilitado, vacío y error.
- Transiciones.
- Responsive.
- Accesibilidad y navegación por teclado.
- Iconografía Font Awesome Classic Solid.

No introducir emojis, librerías de iconos incompatibles, colores aislados ni componentes que parezcan pertenecer a otro producto.

## Estilo de módulos funcionales

Todo módulo nuevo debe seguir el patrón visual establecido por el módulo de Usuarios, adaptándolo a su propia responsabilidad sin copiar lógica de negocio.

### Estructura de pantalla

- Encabezado con eyebrow o clasificación, título y descripción breve.
- Acción principal visible y coherente con el botón de Acceso.
- Barra de búsqueda, filtros y contador cuando el módulo gestione listados.
- Panel o tarjeta principal con borde, radio y sombra del sistema.
- Estados vacíos claros, centrados y útiles.
- Feedback visual mediante mensajes o toast coherentes con Fixelar.

### Formularios y modales

- Usar tarjetas modales con el mismo lenguaje de bordes, radios, sombras y espaciado.
- Los campos obligatorios deben indicarse visualmente con asterisco.
- Las validaciones deben marcar el campo afectado y mostrar un mensaje claro.
- Los inputs, selects y botones deben compartir alturas, radios y estados de foco.
- Las contraseñas deben incluir confirmación y control mostrar/ocultar cuando aplique.
- Las confirmaciones destructivas deben utilizar un diálogo visual Fixelar, no una interacción sin contexto.

### Tablas y controles

- Mantener encabezados, filas, estados y acciones con la jerarquía de Usuarios.
- Mostrar nombres legibles en lugar de identificadores internos cuando exista una relación, conservando el ID solo internamente.
- Usar estados semánticos: editar en `success`, activar/inactivar en `warning` y eliminar en `danger`.
- Las acciones deben usar nombres de clase claros según su intención: `edit`, `deactivate`, `delete` u otros equivalentes.
- Incluir búsqueda, filtros, estados vacíos y paginación cuando el volumen lo justifique.
- Agrupar la paginación para evitar listados antiestéticos; mostrar como máximo tres números por grupo y no mostrar páginas inexistentes.
- Mantener búsqueda, filtros y página al editar o cambiar estados, salvo que el flujo requiera explícitamente reiniciarlos.

### Colores y estados

- El botón principal de los módulos debe seguir la identidad del botón “Iniciar sesión”, usando las variables de marca configuradas.
- Los estados de éxito, advertencia y peligro deben usar las variables semánticas compartidas.
- No introducir valores hexadecimales nuevos en un módulo cuando exista un token reutilizable.
- Los estados activo e inactivo deben ser distinguibles visualmente y también mediante texto o semántica accesible.

## Arquitectura de módulos

Cada funcionalidad específica debe vivir dentro de su módulo:

```text
Modulos/<Nombre>/
├── Frontend/
│   ├── <Nombre>.html
│   ├── <Nombre>.css
│   └── <Nombre>.js
└── Backend/
    ├── <Nombre>.controller.js
    ├── <Nombre>.service.js
    ├── <Nombre>.repository.js
    └── <Nombre>.ipc.js
```

La comunicación debe respetar:

```text
Frontend → IPC/API → Controller → Service → Repository → SQLite/API
```

El Frontend no accede directamente a SQLite, PostgreSQL, filesystem, secretos ni servicios privados. Los módulos solo deben implementar funcionalidades definidas por la especificación del producto o solicitadas explícitamente.

## Electron y seguridad

Conservar siempre:

- `contextIsolation: true`.
- `nodeIntegration: false`.
- Preload mínimo.
- IPC con allowlist.
- Validación de payloads.
- Sin exponer `fs` completo.
- Sin exponer `child_process`.
- Sin exponer la base de datos al renderer.
- Sin secretos privados en el proyecto.

PostgreSQL pertenece a la plataforma central y solo debe utilizarse mediante la API Fixelar. SQLite local solo puede utilizarse cuando la especificación lo requiera.

## Menú y navegación

Las divisiones y opciones del menú se definen manualmente en el HTML de Menu. `AppConfig.js` no debe generar automáticamente la navegación.

Cada opción debe identificar claramente su módulo de destino, respetar el AppShell existente y abrir el contenido dentro del espacio principal cuando la experiencia de la aplicación así lo establezca. No reemplazar el sidebar ni el topbar al abrir módulos.

## Reglas de alcance

- No inventar endpoints, roles, pagos, integraciones ni reglas comerciales.
- No copiar lógica de negocio entre aplicaciones.
- Compartir únicamente estilos, tokens y componentes realmente comunes.
- Documentar como decisión pendiente cualquier aspecto del producto que no esté definido.
- No modificar Acceso, Menu, configuración global o estilos compartidos para resolver un problema que pertenece a un módulo.

## Validación antes de finalizar

Antes de declarar terminado un cambio:

- Verificar que la identidad proviene de `AppConfig.js`.
- Verificar que los colores del módulo consumen variables semánticas.
- Verificar logos, rutas, imports y assets.
- Verificar Font Awesome.
- Verificar responsive y accesibilidad.
- Verificar estados de foco, error, vacío, activo e inactivo.
- Verificar que no haya referencias a otra aplicación.
- Revisar la separación Frontend/Backend.
- Revisar la seguridad Electron.
- Ejecutar las pruebas disponibles.
- Revisar el diff y confirmar que solo se modificaron los archivos autorizados.

## Definition of Done

Un cambio está terminado cuando:

- Respeta la identidad visual y técnica Fixelar.
- Sigue la línea de Acceso, Menu y del módulo de Usuarios.
- Usa la identidad configurada y no colores hardcodeados.
- Conserva AppShell, sidebar y topbar.
- Mantiene la separación Frontend/Backend.
- Incluye estados, validaciones y feedback adecuados a su interfaz.
- No introduce funcionalidades inventadas.
- No rompe módulos existentes.
- Las pruebas y verificaciones relevantes pasan correctamente.
