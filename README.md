# Canelita Games Web

Web estática de Canelita Games hecha con Astro.

## Desarrollo

Desde la raíz del proyecto:

```sh
npm install
npm run dev
```

Build de producción:

```sh
npm run build
```

## Despliegue en GitHub Pages

El repositorio ya incluye el workflow de GitHub Actions en `.github/workflows/deploy.yml`.

Para publicar:

1. Sube este proyecto a un repositorio de GitHub.
2. En GitHub, entra en `Settings > Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions`.
4. Haz push a `main` y GitHub publicará automáticamente el contenido de `dist/`.
5. Configura el dominio personalizado `canelitagames.com` en GitHub Pages.

## Dominio personalizado

El archivo `public/CNAME` ya está configurado con:

```text
canelitagames.com
```

Después hay que apuntar el DNS del dominio desde OVH a GitHub Pages.

## SEO y monetización

El proyecto incluye:

1. Sitemap automático con `@astrojs/sitemap`.
2. `robots.txt` generado desde Astro.
3. Metadatos Open Graph y Twitter.
4. JSON-LD para organización y catálogo de juegos.
5. Integración preparada para Google AdSense.

Variables opcionales para anuncios:

```text
PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
PUBLIC_GOOGLE_ADSENSE_SLOT_HOME_TOP=1234567890
```

Nota: para una web debes usar Google AdSense, no AdMob. AdMob es para apps móviles.
