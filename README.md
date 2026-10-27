# Pedagogía hospitalaria — entorno DevOps

Demo estática con React, Vite y GSAP/ScrollTrigger. Incluye parallax en el hero, sección narrativa fijada en escritorio y disposición vertical en móvil. La ilustración principal es un SVG original incluido en el proyecto; los recursos y textos señalados como muestra son ficticios.

## Requisitos
- Docker Engine
- Docker Compose v2 (`docker compose`)
- Git recomendado

No necesitas instalar Node.js ni npm en el Linux anfitrión.

## Ejecutar
Desde la raíz del repositorio:

```bash
docker compose up --build
```

Abre http://localhost:5173. El código local está montado dentro del contenedor y los cambios se reflejan mediante hot reload. Las dependencias quedan en el volumen Docker `node_modules`.

Detener el entorno:

```bash
docker compose down
```

## GitHub Pages
1. En el repositorio, abre `Settings > Pages`, selecciona `GitHub Actions` como origen y confirma que quede guardado.
2. Abre `Actions` y ejecuta `Deploy to GitHub Pages` con `Run workflow` en la rama `main` (o sube un nuevo cambio a `main`).
3. El workflow `.github/workflows/deploy.yml` instala dependencias, compila y publica `dist/`.
4. Revisa `Actions` hasta que ambos trabajos (`build` y `deploy`) terminen correctamente; la URL aparecerá en el resumen de la ejecución y en `Settings > Pages`.

La ruta base se toma automáticamente del nombre real del repositorio usando `GITHUB_REPOSITORY`, incluyendo mayúsculas. Si `configure-pages` indica que Pages no está habilitado, vuelve a guardar `GitHub Actions` en `Settings > Pages` y ejecuta el workflow manualmente.

GitHub Free requiere un repositorio público para Pages. La página publicada es accesible públicamente incluso si el plan permite mantener privado el repositorio; no subas información sensible.

GitHub Pages sirve archivos estáticos: no hace falta ejecutar Docker en producción.

## Antes de publicar
- Confirmar nombre institucional, identidad visual y datos de contacto.
- Sustituir imágenes de demostración por imágenes autorizadas, idealmente locales en `public/images/`.
- Reemplazar los recursos de ejemplo por fuentes verificadas.
- Revisar el contenido con el equipo académico.

## Alcance
No incluye backend, base de datos, autenticación, panel administrativo ni persistencia de formularios. Las animaciones respetan `prefers-reduced-motion` y el pinning se limita a escritorio.
