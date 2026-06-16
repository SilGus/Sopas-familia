# Método Sopas que Deshinchan

Landing estática, liviana y mobile first para venta directa del infoproducto.

## Archivos principales

- `index.html`: estructura, copy, secciones, placeholders de Meta Pixel y testimonios.
- `styles.css`: diseño responsive sin frameworks ni fuentes externas.
- `main.js`: `CHECKOUT_URL`, sticky CTA y FAQ accesible.
- `assets/img/`: tapas optimizadas usadas en la landing.

## Cambiar checkout

En `main.js`, reemplazar:

```js
const CHECKOUT_URL = "#oferta"; // Reemplazar por URL real de checkout
```

por la URL final de pago. Todos los botones usan `data-checkout` y toman esa constante.

## Reemplazar testimonios

En `index.html`, buscar el comentario:

```html
<!-- Reemplazar estos testimonios por testimonios reales o capturas reales cuando estén disponibles. -->
```

Ahí se pueden pegar testimonios reales o cambiar la sección por capturas reales, evitando simular WhatsApp si no son capturas verificadas.

## Reemplazar imágenes

Las imágenes están en `assets/img/`:

- `tapa-metodo-sopas.jpg`
- `tapa-sopa-guia-complementaria.jpg`
- `sopa-placeholder.jpg`: foto provisoria para las tarjetas de recetas.
- `garantia-placeholder.svg`: imagen provisoria para reemplazar por el sello real de garantía.

Mantener proporciones verticales y atributos `width`/`height` para evitar saltos de layout.

Las tarjetas de libros y bonos usan las dos tapas principales como marcadores visuales. En `index.html`, reemplazar el `src` de cada `.material-card img` por la tapa final correspondiente cuando esté diseñada.

## Agregar Meta Pixel

En el `<head>` de `index.html`, buscar:

```html
<!-- META PIXEL PLACEHOLDER -->
<!-- Agregar aquí el código base de Meta Pixel cuando esté disponible -->
```

Pegar ahí el código base cuando esté listo.

## Publicar en Vercel

1. Subir el proyecto completo.
2. Crear un proyecto estático en Vercel.
3. No configurar build command.
4. Usar `index.html` como entrada principal.
5. Cuando cambie el checkout, editar solo `main.js`.
