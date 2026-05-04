# Constructora Litop

Sitio web estático corporativo para **Constructora Litop**, orientado a presentar la empresa, sus servicios y los medios de contacto.

## Estructura del proyecto

```text
Litop/
├── index.html
├── quienes-somos.html
├── nuestros-servicios.html
├── contacto.html
├── style.css
├── script.js
└── imagen/
    ├── icono.png
    ├── icono2.png
    ├── logonombre.png
    └── next.png
```

## Secciones del sitio

- `index.html`: página principal
- `quienes-somos.html`: presentación de la empresa
- `nuestros-servicios.html`: catálogo de servicios
- `contacto.html`: formulario, datos de contacto y ubicación en Google Maps

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (`Montserrat` y `Roboto`)
- Google Maps embebido por `iframe`

## Cómo abrir el proyecto

No requiere instalación ni compilación.

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`.

También puedes abrirlo con una extensión de servidor local si prefieres previsualizarlo desde tu editor.

## Archivos principales

### `style.css`

Contiene todos los estilos globales del sitio:

- cabecera y navegación
- slider principal
- tarjetas de servicios
- secciones internas
- formulario de contacto
- mapa y ubicación
- footer
- responsive

La identidad visual actual usa una línea sobria con verde corporativo, gris oscuro y fondos neutros.

### `script.js`

Controla las interacciones básicas:

- menú móvil
- slider automático de portada
- navegación por flechas y puntos
- reseteo visual del formulario de contacto tras envío

### `contacto.html`

Incluye:

- datos de contacto
- horarios de atención
- formulario
- ubicación física con Google Maps

Las páginas `quienes-somos.html`, `nuestros-servicios.html` y `contacto.html` usan una cabecera visual estática superior sin texto encima; el título de cada sección aparece en el bloque siguiente.

## Guía rápida de edición

### Cambiar textos

Edita directamente los archivos `.html`:

- portada: `index.html`
- empresa: `quienes-somos.html`
- servicios: `nuestros-servicios.html`
- contacto: `contacto.html`

### Cambiar colores o estilo general

Edita las variables CSS al inicio de `style.css`:

- `--primary`
- `--accent`
- `--dark`
- `--bg-*`
- `--text-*`

### Cambiar imágenes

Puedes:

- reemplazar imágenes locales dentro de `imagen/`
- cambiar URLs externas directamente en los `style=""` o etiquetas `<img>`

### Cambiar datos de contacto

Revisar principalmente:

- enlaces `tel:`
- enlaces `mailto:`
- horarios en `contacto.html`
- mapa embebido en `contacto.html`

## Comportamiento actual

- diseño responsive para escritorio, tablet y móvil
- menú hamburguesa en pantallas pequeñas
- botón flotante de contacto por WhatsApp
- mapa embebido en la página de contacto
- cabeceras estáticas para las páginas internas principales

## Recomendaciones de mantenimiento

- usar codificación UTF-8 al editar los archivos
- optimizar imágenes antes de reemplazarlas
- mantener consistencia tipográfica entre títulos y textos
- probar visualmente `index.html`, `nuestros-servicios.html` y `contacto.html` después de cada cambio importante

## Pendientes opcionales a futuro

- conectar el formulario a un backend o servicio real de envío
- reemplazar imágenes externas por recursos propios optimizados
- agregar SEO más detallado por página
- añadir favicon y metadatos sociales más completos
