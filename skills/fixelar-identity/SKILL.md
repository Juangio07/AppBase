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

## Plantilla visual común de módulos

Los módulos de Usuarios y Roles establecen la plantilla inicial de todos los módulos funcionales de la aplicación. Un módulo nuevo no debe diseñarse desde cero: debe conservar esta distribución y cambiar únicamente la información, los campos, las columnas y las funcionalidades propias de su dominio.

La similitud entre módulos debe ser intencional. Productos, Ventas, Inventario, Reportes y cualquier módulo futuro deben parecer parte de la misma aplicación, aunque sus reglas de negocio sean diferentes.

### Estructura base de pantalla

Mantener, en este orden y con dimensiones equivalentes a Usuarios y Roles:

- Encabezado con eyebrow o clasificación.
- Título y descripción breve.
- Acción principal en la misma posición, usando el botón de identidad Fixelar.
- Barra de búsqueda con las mismas dimensiones.
- Filtros alineados en la misma posición.
- Contador de registros.
- Tarjeta principal con borde, radio, sombra y overflow coherentes.
- Tabla o listado con la misma jerarquía visual.
- Estado vacío centrado y explicativo.
- Paginación ubicada debajo del control principal.
- Toasts y mensajes de feedback con el mismo lenguaje visual.

No cambiar la distribución general para un módulo nuevo salvo que exista una necesidad funcional justificada.

### Barra de búsqueda, filtros y paginación

- La barra de búsqueda debe conservar el ancho, alto, padding, borde, radio y estado de foco de Usuarios.
- Los filtros deben conservar la misma altura, separación y posición relativa.
- El contador debe permanecer alineado al extremo derecho en pantallas amplias y adaptarse correctamente en responsive.
- Los filtros deben mantenerse al editar, eliminar o cambiar el estado de un registro cuando el flujo continúe en el mismo listado.
- La paginación debe mostrarse debajo de la tabla o control principal, nunca dentro de un formulario modal.
- Mostrar como máximo tres números de página por grupo.
- Mostrar solo números que existan realmente.
- Las flechas deben avanzar o retroceder una página y deshabilitarse únicamente en el primer o último registro de paginación.
- Si existen una, dos o tres páginas, mostrar exactamente las páginas disponibles.

### Tablas y acciones

- Mantener encabezados, filas, estados y acciones con la jerarquía visual de Usuarios y Roles.
- Mostrar nombres legibles en lugar de identificadores internos cuando exista una relación; conservar el ID solo internamente.
- Usar acciones con nombres de clase claros según su intención: `edit`, `deactivate`, `delete` u otros equivalentes.
- Editar debe utilizar el estado semántico `success`.
- Activar o inactivar debe utilizar el estado semántico `warning`.
- Eliminar debe utilizar el estado semántico `danger`.
- Los estados activo e inactivo deben distinguirse mediante color, texto y semántica accesible.
- Mantener acciones, tamaños, separación e iconografía consistentes entre módulos.

### Formularios y modales

- Usar modales con las mismas dimensiones, bordes, radios, sombras y espaciado de Usuarios y Roles.
- Mantener la distribución de campos y botones: título, campos, mensaje de validación y acciones inferiores.
- Los campos obligatorios deben identificarse con un asterisco junto a la etiqueta.
- Las validaciones deben marcar visualmente el campo afectado y mostrar un mensaje claro.
- Inputs y selects deben compartir alturas, padding, radios, bordes y estados de foco.
- Las contraseñas deben incluir confirmación y controles mostrar/ocultar cuando aplique.
- Las confirmaciones destructivas deben utilizar un diálogo visual Fixelar con acciones claras.
- Los botones de guardar y cancelar deben conservar su jerarquía y posición.

### Permisos y controles de Roles

El módulo de Roles es la referencia para administrar acceso y permisos sin alterar la plantilla visual común:

- Todos los módulos existentes aparecen habilitados inicialmente.
- El rol autorizado puede quitar acceso a módulos específicos.
- Sin acceso a un módulo, este no debe aparecer ni poder abrirse directamente.
- Los permisos iniciales por módulo son: ver, registrar, editar, eliminar y activar/inactivar.
- La sección de permisos debe conservar el patrón de tarjetas, filas, bordes, espaciado y controles de Roles.
- La lógica de permisos pertenece al módulo o backend correspondiente; la plantilla visual no debe copiar reglas de negocio a otros módulos.

### Colores, estados e iconos

- El botón principal de cada módulo debe seguir la identidad del botón “Iniciar sesión”, usando variables de marca configuradas.
- Los estados de éxito, advertencia y peligro deben usar `--success`, `--warning`, `--danger` y sus variantes claras.
- No introducir valores hexadecimales nuevos cuando exista un token reutilizable.
- Los logos deben configurarse desde `AppConfig.js`.
- Las interfaces deben usar Font Awesome Classic Solid.
- Los iconos deben comunicar la acción sin introducir emojis ni sistemas visuales ajenos.

## Plantilla del sistema de alertas

Todas las alertas del sistema deben utilizar una plantilla visual común, tomando como referencia la alerta de eliminación implementada en Usuarios, Roles y Menu.

La estructura no debe cambiar entre módulos:

- Overlay semitransparente cubriendo toda la aplicación.
- Alerta centrada horizontal y verticalmente sobre el sistema completo.
- Icono superior dentro de un círculo.
- Título claro.
- Mensaje breve y contextual.
- Acciones alineadas y consistentes.
- Mismos tamaños, bordes, radios, sombras, espaciados y estados de foco.

Cada alerta debe modificar únicamente la información que representa su propósito:

- Mensaje.
- Título.
- Color semántico.
- Icono Font Awesome.
- Texto y acción de los botones.

Usar las variables semánticas del sistema según el tipo de alerta:

- Eliminación o peligro: `--danger`, `--danger-light`, `fa-solid fa-trash`.
- Advertencia: `--warning`, `--warning-light`, `fa-solid fa-triangle-exclamation`.
- Éxito: `--success`, `--success-light`, `fa-solid fa-circle-check`.
- Información: color de identidad o variable informativa disponible, `fa-solid fa-circle-info`.

Las alertas destructivas deben explicar que la acción puede ser irreversible y ofrecer siempre una cancelación clara. No usar alertas nativas del navegador cuando el flujo requiera conservar la identidad visual Fixelar.

La alerta debe renderizarse sobre el AppShell completo, incluyendo sidebar, topbar y contenido. Los módulos cargados dentro del panel principal deben solicitar la alerta al contenedor principal cuando necesiten cubrir toda la aplicación; no deben limitarla al área interna del módulo.

Los futuros módulos deben reutilizar esta plantilla y cambiar solo el tipo, mensaje, icono, color y acciones necesarios para cada caso.

### Responsive y accesibilidad

- Mantener el comportamiento responsive de Usuarios y Roles como referencia.
- En pantallas pequeñas, apilar encabezado, búsqueda, filtros y contador sin perder jerarquía.
- Permitir desplazamiento horizontal controlado en tablas anchas.
- Mantener foco visible, etiquetas asociadas, `aria-label`, `aria-live` y roles adecuados.
- Los estados no deben depender únicamente del color.

### Adaptación por módulo

La plantilla permanece estable; solo cambia la información específica:

- Usuarios: nombre, documento, teléfono, rol, estado y acciones.
- Roles: nombre, descripción, módulos, permisos, estado y acciones.
- Productos: nombre, categoría, precio, inventario, estado y acciones.
- Ventas: cliente, fecha, total, estado y acciones.

Estos ejemplos orientan la adaptación visual. No autorizan a inventar entidades, permisos o reglas comerciales que no estén definidos.

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
