# Chill Out Rio Beach Club

Sitio web del Chill Out · Rio Beach Club by Finns (Sushi Praiano), em Recreio dos Bandeirantes.

## Stack
- React 18 + Vite 5
- Tailwind CSS v4
- lucide-react (íconos)

## Cómo correrlo local

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

## ⚠️ ANTES DE HACER DEPLOY — bajar las fotos del hero

Las URLs de Google Maps están bloqueadas por hotlink. Tenés que descargar las fotos vos y ponerlas en `/public`:

1. Abrí estas URLs en el navegador, click derecho → "Guardar imagen como…":
   - **Dark**: https://lh3.googleusercontent.com/p/AF1QipO0hiGRDM6WVU1-DAyWHh7tQ9Q2BvSXDcQdneM8=s1360-w1360-h1020-rw
     - Guardar como: `public/hero-dark.jpg`
   - **Light**: https://lh3.googleusercontent.com/gps-cs-s/APNQkAHDv7xgsjA7q52u4OsT0itSMehuWEJtQP72t-kOdtl6dW3diqaldNfTqkTAuHnE7BKxv1dD1lA6OuRWkxTaaKm_ybQYOVj3U0UoXPMoLAaXFGSnp5P3QasyihBtOElItk3unkiJDpK24rDi=s1360-w1360-h1020-rw
     - Guardar como: `public/hero-light.jpg`

Si las URLs ya caducaron, descargá las fotos de Finns Rio del perfil de Google Maps:
https://www.google.com/maps/place/Finns+Rio+Beach+Club

## Deploy a GitHub Pages (automático con GitHub Actions)

### Paso 1 — Crear el repo en GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create chillout-rio --public --source=. --push
# o manualmente: crear repo en github.com, después:
# git remote add origin https://github.com/TU_USUARIO/chillout-rio.git
# git push -u origin main
```

### Paso 2 — Configurar el `base` en `vite.config.js`

Si tu sitio queda en `https://TU_USUARIO.github.io/chillout-rio/` (lo más común):
- Editá `.github/workflows/deploy.yml` línea con `VITE_BASE` y poné el nombre real de tu repo: `VITE_BASE: '/nombre-de-tu-repo/'`
- Si vas a usar un dominio propio (ej. `chillout.com.br`): `VITE_BASE: '/'`

### Paso 3 — Habilitar GitHub Pages

En el repo de GitHub:
1. Andá a **Settings → Pages**
2. En "Source" elegí **GitHub Actions**
3. Listo. Cada vez que hagas push a `main`, el workflow va a buildear y deployar.

### Paso 4 — Esperar el primer deploy

Andá a la pestaña **Actions** del repo. El primer deploy tarda ~2 min. Cuando termina, vas a ver el link en `Settings → Pages`.

## Edición de menú / textos

- **Menú**: editá el array `menu` en `src/App.jsx` (~líneas 250-450)
- **Textos i18n**: objeto `i18n` arriba del archivo (~líneas 25-200)
- **Datos de contacto**: WhatsApp, teléfono, IG están en el componente `App` dentro del bloque "COMO CHEGAR"

## Estructura

```
.
├── public/
│   ├── hero-dark.jpg      ← tenés que ponerla vos
│   └── hero-light.jpg     ← tenés que ponerla vos
├── src/
│   ├── App.jsx            ← toda la app, incluye 60+ fotos en base64
│   ├── main.jsx
│   └── index.css
├── .github/workflows/
│   └── deploy.yml         ← deploy automático
├── package.json
├── vite.config.js
└── index.html
```

## Tamaño

`src/App.jsx` pesa ~1.6 MB porque las fotos de platos están embebidas en base64. Esto evita 60+ requests HTTP separados pero infla el bundle inicial. Si más adelante querés optimizar, mové las fotos a `/public/dishes/` y usá paths como `/dishes/001.jpg`.
