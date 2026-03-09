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

## Variables del repositorio en GitHub

Para que el build de GitHub Pages publique los archivos de anuncios correctamente, crea variables de Actions en:

`Settings > Secrets and variables > Actions > Variables`

Variables recomendadas:

```text
PUBLIC_ADS_TXT_LINES=google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
PUBLIC_APP_ADS_TXT_LINES=google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
PUBLIC_GOOGLE_ADSENSE_SLOT_HOME_TOP=1234567890
```

Notas:

1. Usa `Variables`, no `Secrets`, porque son valores públicos que terminan en archivos estáticos o HTML.
2. `PUBLIC_ADS_TXT_LINES` controla el contenido de `/ads.txt`.
3. `PUBLIC_APP_ADS_TXT_LINES` controla el contenido de `/app-ads.txt`, necesario para verificar el dominio en AdMob.
4. Si no defines `PUBLIC_ADS_TXT_LINES` pero sí `PUBLIC_GOOGLE_ADSENSE_CLIENT`, el sitio generará una línea estándar de Google automáticamente para `ads.txt`.

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
PUBLIC_ADS_TXT_LINES=google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
PUBLIC_APP_ADS_TXT_LINES=google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
PUBLIC_GOOGLE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
PUBLIC_GOOGLE_ADSENSE_SLOT_HOME_TOP=1234567890
```

`app-ads.txt` sirve para verificar el dominio web de tus apps móviles en AdMob. `ads.txt` y la carga del script en la web siguen perteneciendo a AdSense.
