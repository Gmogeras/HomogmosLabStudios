# HomogmosLab Studios — v0.6

Web estática editorial (Astro). Mantiene el 75 % menos de texto de la v0.5 y mejora detalles tipográficos, portadas, responsividad, accesibilidad y metadatos sociales.

## Antes de publicar

1. Sube el **contenido** de esta carpeta a un repositorio GitHub (no el ZIP entero).
2. En Cloudflare Pages conecta el repositorio, elige la rama `main` y configura:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
3. Tras asignar tu URL real, define la variable de entorno `PUBLIC_SITE_URL` en Cloudflare Pages, por ejemplo `https://mi-sitio.pages.dev`, y vuelve a desplegar. Así se activan URLs canónicas y previsualización social con URL absoluta.
4. Configura un sistema de contacto real antes de activar el formulario. Actualmente **no envía correos**.

## Actualizaciones automáticas

Con GitHub conectado a Cloudflare Pages: cada push a `main` dispara una compilación y despliegue automático. Un build fallido no actualiza correctamente la web. No reemplaces solamente el ZIP: descomprímelo y sube los archivos.

## Desarrollo local

```bash
npm install
npm run dev
npm run build
```

## Nota científica

Las portadas de `public/visuals/` son ilustraciones conceptuales, no documentación fósil. El contenido de las historias demo está marcado como «En desarrollo».

**Slogan:** Exploring life. One thought at a time.
