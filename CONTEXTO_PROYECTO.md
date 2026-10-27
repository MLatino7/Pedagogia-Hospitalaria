# Contexto del proyecto y levantamiento de requerimientos

> **Estado del documento:** contexto inicial elaborado a partir de las conversaciones de definición del proyecto. Debe actualizarse cuando el equipo académico confirme el nombre institucional, los contenidos definitivos, la identidad visual y los responsables.

## 1. Resumen ejecutivo

El proyecto consiste en diseñar y construir un sitio web demostrativo sobre **pedagogía hospitalaria**. La intención es presentar el tema de una manera accesible, humana y visualmente atractiva, explicando su importancia y reuniendo contenidos educativos que ayuden a comprender cómo puede acompañarse el aprendizaje cuando niños, niñas o adolescentes atraviesan una situación de enfermedad u hospitalización.

La web se plantea inicialmente como una **demo académica e informativa**, no como una plataforma clínica ni como un sistema de gestión educativa. Su primera versión será un sitio estático, adaptable a dispositivos móviles y preparado para publicarse mediante GitHub Pages.

Este archivo complementa la documentación técnica: describe el propósito, los criterios que guiaron el diseño, el alcance inicial y los asuntos que siguen pendientes de validación.

## 2. Idea y propósito del proyecto

La idea central es comunicar que una situación de hospitalización no elimina la importancia del aprendizaje, la expresión, la curiosidad ni los vínculos educativos. La pedagogía hospitalaria se presenta como un enfoque que busca acompañar los procesos de aprendizaje considerando el contexto, el bienestar y las necesidades de cada estudiante.

El sitio pretende:

- Explicar de forma introductoria qué es la pedagogía hospitalaria.
- Comunicar su relevancia desde una perspectiva humana y educativa.
- Presentar principios de acompañamiento, adaptación y trabajo colaborativo.
- Reunir artículos, videos y otros recursos relevantes.
- Servir como presentación digital del proyecto académico y como base para futuras mejoras.

**Importante:** los textos incluidos en la primera versión son contenido demostrativo. No deben interpretarse como una revisión académica final ni como orientación médica. Las afirmaciones y los recursos definitivos deben revisarse con el equipo responsable y apoyarse en fuentes verificables.

## 3. Antecedentes y levantamiento de requerimientos

El alcance se fue definiendo mediante conversaciones de descubrimiento sobre la necesidad de una web para un proyecto académico de pedagogía hospitalaria. En ese proceso se identificaron tanto necesidades de comunicación como decisiones de implementación.

### Necesidades identificadas

1. **Presentación institucional:** se requiere una experiencia web con apariencia profesional, coherente con un proyecto educativo. El nombre definitivo de la institución o iniciativa todavía está pendiente de confirmación.
2. **Contenido informativo:** el sitio debe explicar el propósito del proyecto e incluir información como presentación, misión, visión y contenido educativo, según los materiales que proporcione el equipo.
3. **Recursos multimedia:** se contempla incluir artículos, videos y enlaces a redes sociales u otros recursos pertinentes.
4. **Experiencia visual narrativa:** se solicitó un estilo de *scrollytelling*, en el que el desplazamiento de la página acompaña la narración visual mediante transiciones, efectos de parallax, secciones fijadas (*pinned*) y una experiencia destacada en el hero.
5. **Desarrollo local aislado:** se pidió trabajar en un equipo Linux usando Docker y Docker Compose para contenerizar el entorno de desarrollo y evitar instalar las dependencias de la aplicación directamente en el sistema anfitrión.
6. **Control de versiones y publicación:** el proyecto debe poder mantenerse en un repositorio GitHub y contar con una ruta de despliegue inicial mediante GitHub Pages.
7. **Documentación para continuidad:** una persona que encuentre el repositorio debe poder comprender tanto la idea del proyecto como la estructura técnica y la forma de ejecutarlo.

### Decisiones de alcance inicial

- Se seleccionó React con Vite para construir la interfaz y generar archivos estáticos.
- Se seleccionó GSAP con ScrollTrigger para las animaciones relacionadas con el desplazamiento.
- Se preparó Dockerfile y Compose para el entorno de desarrollo local.
- Se incluyó un workflow de GitHub Actions como base para publicar en GitHub Pages.
- Se definió que el primer alcance no requiere backend ni base de datos.

Estas decisiones describen la base técnica planteada; la ejecución, las pruebas y el despliegue deben verificarse en el entorno real antes de considerar el proyecto listo para producción.

## 4. Objetivos

### Objetivo general

Desarrollar una web demostrativa, accesible y adaptable que comunique el propósito de la pedagogía hospitalaria mediante una experiencia narrativa visual, con una estructura técnica reproducible y documentada.

### Objetivos específicos

- Presentar el tema de manera clara y cercana.
- Organizar la información en secciones fáciles de recorrer.
- Ofrecer un espacio para recursos educativos y audiovisuales.
- Aplicar una experiencia de scrollytelling sin sacrificar la lectura ni la navegación móvil.
- Mantener el entorno de desarrollo encapsulado con Docker.
- Facilitar el control de versiones y el despliegue de una versión estática.
- Dejar documentados los supuestos, límites y siguientes pasos.

## 5. Usuarios y partes interesadas

Los grupos previstos para esta primera versión son:

- **Equipo académico o responsable del proyecto:** valida los objetivos, la exactitud del contenido, los créditos y la identidad institucional.
- **Visitantes del sitio:** personas interesadas en conocer la pedagogía hospitalaria y consultar recursos introductorios.
- **Equipo de desarrollo:** mantiene el código, la infraestructura de desarrollo, el repositorio y el proceso de publicación.

No se ha definido todavía un sistema de roles, cuentas de usuario ni perfiles personalizados, ya que no forman parte del alcance de la demo estática.

## 6. Requerimientos funcionales

| ID | Requerimiento | Estado inicial |
|---|---|---|
| RF-01 | Mostrar una sección de inicio que presente el tema y guíe al visitante hacia el contenido. | Implementado como propuesta inicial |
| RF-02 | Explicar qué es la pedagogía hospitalaria y por qué importa. | Contenido demostrativo |
| RF-03 | Presentar ideas o principios de acompañamiento educativo. | Implementado como propuesta inicial |
| RF-04 | Disponer de una sección para artículos, videos y otros recursos. | Estructura de muestra; faltan recursos reales |
| RF-05 | Incluir un área de contacto o llamada a la acción. | Marcador de posición; faltan datos reales |
| RF-06 | Permitir navegación y lectura en dispositivos móviles. | Adaptación CSS inicial; requiere pruebas |
| RF-07 | Incorporar transiciones de scroll, parallax y paneles fijados en escritorio. | Implementación inicial; requiere pruebas |
| RF-08 | Permitir actualizar los textos, enlaces e imágenes desde el código del proyecto. | Sí, mediante cambios en el repositorio |
| RF-09 | Publicar el sitio como aplicación estática. | Cumplido y verificado: GitHub Actions completó build/deploy y la URL pública respondió HTTP 200 el 27 de octubre de 2026 |

El estado actual de los requisitos visibles de la página, con evidencia y datos pendientes, se mantiene en [ESTADO_REQUISITOS.md](ESTADO_REQUISITOS.md). La revisión de esa matriz no equivale a una auditoría exhaustiva en todos los navegadores o dispositivos.

## 7. Requerimientos no funcionales

- **Usabilidad:** navegación comprensible, textos legibles y jerarquía visual clara.
- **Diseño adaptable:** soporte para escritorio, tabletas y móviles.
- **Accesibilidad básica:** controles navegables, textos alternativos cuando corresponda y una alternativa a animaciones intensas para usuarios que prefieren movimiento reducido.
- **Rendimiento:** imágenes optimizadas, animaciones moderadas y evitar dependencias innecesarias.
- **Mantenibilidad:** componentes y estilos organizados, código versionado y documentación útil.
- **Reproducibilidad:** entorno de desarrollo basado en Docker Compose.
- **Seguridad operativa:** no incluir credenciales, tokens ni secretos en el repositorio; usar configuración apropiada si en el futuro se incorporan servicios externos.
- **Privacidad:** no recopilar información personal en esta versión. Si se agregan formularios o analítica, deberán evaluarse su propósito, tratamiento de datos y avisos correspondientes.
- **Calidad del contenido:** los textos académicos y los recursos publicados deben verificarse, atribuirse y contar con permisos de uso adecuados.

## 8. Experiencia de usuario y dirección visual

La experiencia se plantea como un recorrido narrativo:

1. **Hero:** introducción al tema y una composición visual que invite a continuar.
2. **Contexto:** explicación introductoria de la pedagogía hospitalaria.
3. **Narrativa por scroll:** paneles que presentan ideas clave de forma progresiva.
4. **Principios de acompañamiento:** tarjetas con conceptos centrales.
5. **Recursos:** espacio para artículos, videos y experiencias.
6. **Cierre y contacto:** mensaje final y datos institucionales cuando se confirmen.

La dirección visual inicial utiliza una paleta suave, formas orgánicas, tipografía editorial y mensajes breves. Se trata de una propuesta provisional, no de una identidad de marca aprobada.

El efecto de “secuencia de imágenes” solicitado para el hero deberá confirmarse con el equipo. La base actual incluye una imagen principal con parallax; **no es todavía una secuencia cinematográfica de fotogramas controlada por scroll**. Para conseguir ese efecto de manera completa será necesario disponer de una secuencia de imágenes autorizadas y optimizadas o acordar una alternativa de transición entre imágenes.

## 9. Alcance incluido en la primera versión

- Sitio informativo estático.
- Secciones de introducción, principios, recursos y contacto.
- Diseño adaptable a distintos tamaños de pantalla.
- Animaciones iniciales con GSAP/ScrollTrigger.
- Desarrollo local con Docker y Docker Compose.
- Estructura de repositorio Git.
- Workflow base de GitHub Actions para GitHub Pages.
- Documentación técnica y de contexto.

## 10. Fuera de alcance por ahora

No se ha solicitado ni se incluye en esta versión:

- Backend, API propia o base de datos.
- Registro e inicio de sesión.
- Panel de administración o CMS.
- Edición de contenido desde una interfaz administrativa.
- Formularios con almacenamiento o envío real de información.
- Gestión de usuarios, permisos o expedientes.
- Integraciones con hospitales, clínicas, sistemas académicos o servicios de salud.
- Dominio personalizado, correo institucional o alojamiento de pago.
- Garantía de cumplimiento normativo institucional sin una revisión específica.
- Producción final de fotografías, ilustraciones o videos.

Cualquiera de estas funciones requeriría evaluar nuevos requerimientos, riesgos, costos y arquitectura.

## 11. Supuestos, dependencias y riesgos

### Supuestos actuales

- La primera entrega es una demo académica e informativa.
- GitHub Pages es una opción adecuada para la publicación inicial.
- El contenido final será proporcionado o validado por el equipo académico.
- La identidad institucional y los datos de contacto todavía no están definidos en el código.

### Dependencias pendientes

- Nombre de la institución o iniciativa.
- Logotipo, paleta y lineamientos de marca, si existen.
- Textos finales, incluyendo misión y visión si se requieren.
- Artículos, videos, enlaces sociales y referencias académicas.
- Imágenes con autorización de uso y créditos.
- Correo y demás información de contacto.
- Nombre definitivo del repositorio de GitHub.

### Riesgos principales

- **Contenido provisional publicado como definitivo:** mitigación, revisar y validar los textos antes de publicar.
- **Uso de imágenes sin permiso o con enlaces externos inestables:** mitigación, utilizar recursos autorizados, atribuidos y preferiblemente alojados en el proyecto.
- **Animaciones que dificulten la navegación:** mitigación, probar en móvil, ofrecer movimiento reducido y evitar fijar secciones en pantallas pequeñas.
- **Ruta de GitHub Pages incorrecta:** mitigación, confirmar el nombre del repositorio y probar el despliegue.
- **Expectativas de funcionalidades no contempladas:** mitigación, acordar por escrito el alcance antes de añadir backend, formularios u otras capacidades.

## 12. Criterios de aceptación propuestos

La demo podrá considerarse lista para una revisión inicial cuando:

- La web cargue y se pueda recorrer sin errores bloqueantes.
- Las secciones principales se entiendan y la navegación funcione.
- El diseño se adapte a escritorio y móvil.
- Las animaciones no impidan acceder al contenido.
- Los textos, enlaces, imágenes y créditos hayan sido revisados por el equipo responsable.
- El entorno local se pueda iniciar con el comando documentado.
- El repositorio contenga las instrucciones de ejecución y publicación.
- El despliegue de GitHub Pages haya sido probado y la URL resultante funcione.

Estos criterios son una propuesta de aceptación y deben confirmarse con las personas responsables del proyecto.

## 13. Arquitectura técnica inicial

- **Interfaz:** React.
- **Servidor de desarrollo y compilación:** Vite.
- **Animación:** GSAP y ScrollTrigger.
- **Contenedores:** Docker.
- **Orquestación local:** Docker Compose.
- **Control de versiones:** Git y GitHub.
- **Integración y despliegue:** GitHub Actions.
- **Publicación inicial:** GitHub Pages para archivos estáticos.

Docker Compose se utiliza principalmente para que el entorno de desarrollo sea reproducible. GitHub Pages, por su parte, sirve el resultado estático de la compilación; no ejecuta el contenedor de desarrollo en producción.

## 14. Cómo continuar el levantamiento

Antes de dar por cerrada la definición funcional, confirmar con el equipo:

- [ ] Nombre oficial del proyecto y de la institución.
- [ ] Audiencia principal y objetivo académico de la página.
- [ ] Contenidos obligatorios y extensión esperada.
- [ ] Misión, visión y descripción institucional definitivas.
- [ ] Fuentes académicas y recursos audiovisuales que deben aparecer.
- [ ] Imágenes, autorizaciones y créditos.
- [ ] Enlaces a redes sociales y contacto.
- [ ] Si el hero necesita realmente una secuencia de fotogramas o si basta una transición entre imágenes.
- [ ] Requisitos de accesibilidad o lineamientos institucionales.
- [ ] Responsable de aprobar contenido y diseño.
- [ ] Fecha objetivo y criterios finales de aceptación.

## 15. Estado del proyecto

La demo cuenta con una estructura narrativa y una base técnica ejecutable. La publicación estática en GitHub Pages quedó verificada; el contenido definitivo, los recursos reales, la identidad institucional y la decisión sobre algunas secciones siguen pendientes.

Este documento debe mantenerse actualizado junto con el código. Cuando se aprueben nuevos requerimientos, conviene registrar aquí qué cambió, por qué se decidió y cómo afecta el alcance.

## 16. Avance de continuidad — 27 de octubre de 2026

- Se corrigió una pantalla en blanco causada por el uso de JSX en `src/App.jsx` sin importar React. Se añadió un límite de error para mostrar un mensaje útil si vuelve a fallar el renderizado.
- Se reemplazó la fotografía remota del hero por `src/assets/hero-aprendizaje.svg`, una ilustración original creada para esta demo.
- Se implementó un menú móvil desplegable con estado accesible y navegación a las secciones.
- Las tarjetas de recursos ahora se identifican como muestras ficticias y dejaron de enlazar al contacto sin motivo.
- El movimiento reducido se respeta en las animaciones y el desplazamiento programático.
- Se corrigieron los saltos de línea de `.gitignore` y `.dockerignore`; ahora excluyen correctamente compilados, dependencias, `.git` y archivos de entorno.
- `npm ci`, la compilación local y la compilación para GitHub Pages se ejecutan con las dependencias fijadas; la última auditoría de npm reportó cero vulnerabilidades.
- El primer workflow de Pages falló porque el sitio aún no estaba habilitado para Actions. Se corrigió el flujo y el segundo intento terminó correctamente.
- Se actualizó el workflow para compilar antes de configurar Pages y mostrar instrucciones concretas si falta habilitar el sitio. Se ajustó `vite.config.js` para tomar el nombre del repositorio desde `GITHUB_REPOSITORY`; esto respeta el uso de mayúsculas de `Pedagogia-Hospitalaria`.
- El commit `dbab00d` se subió a `main`; los trabajos `build` y `deploy` terminaron correctamente y `https://mlatino7.github.io/Pedagogia-Hospitalaria/` respondió HTTP 200.
- Se creó `ESTADO_REQUISITOS.md` para vincular las secciones actuales con requisitos, evidencia, contenido provisional y datos faltantes. Se retiró el `mailto` de ejemplo y se dejó un marcador no interactivo para el canal de contacto.
- Se diseñó un footer profesional con resumen del proyecto, navegación a las secciones, enlace a contacto, créditos pendientes de confirmar y nota informativa. Se añadió el ancla de navegación para “Principios”.

### Pendientes para la siguiente iteración

- Revisar visualmente el diseño en escritorio y distintos móviles.
- Sustituir o validar los textos y recursos ficticios con el equipo académico.
- Validar identidad visual, correo institucional, contenido académico y fuentes antes de considerar definitiva la demo.
- Resolver las decisiones y campos de contenido abiertos en `ESTADO_REQUISITOS.md`.
- Completar la revisión responsive, accesibilidad y navegación en distintos dispositivos en una siguiente etapa.
