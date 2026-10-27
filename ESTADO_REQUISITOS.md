# Estado de requisitos de la landing page

**Revisión:** 27 de octubre de 2026  
**Enfoque de esta revisión:** contenido, secciones y funciones visibles de la landing. La revisión detallada de accesibilidad, navegadores y dispositivos queda para una etapa posterior.

Este documento registra lo que se ve en el código y en el sitio publicado. No convierte los textos ficticios en contenido aprobado. El contexto del proyecto sigue siendo la fuente principal de propósito y alcance; este archivo vincula esos requisitos con el estado actual y los datos que faltan.

## Estados

- **Cumplido y verificado:** se implementó y hay evidencia de que funciona.
- **Implementado, pendiente de probar:** está en el código, pero aún falta comprobarlo de forma suficiente.
- **Parcial:** hay una propuesta visible, pero falta contenido, una parte funcional o una decisión.
- **Pendiente:** no aparece implementado.
- **Bloqueado:** depende de datos o recursos que debe proporcionar el equipo.

## Requisitos funcionales de la página

| Requisito | Estado actual | Evidencia y pendiente |
|---|---|---|
| Presentar el propósito de la pedagogía hospitalaria | Parcial | Hero y sección “¿Qué es?” en `src/App.jsx`. El texto es demostrativo y falta revisión académica y bibliografía. |
| Explicar principios del acompañamiento educativo | Parcial | “Acompañamiento” presenta tres ideas y “Principios” tres tarjetas. Los temas se solapan; el equipo debe decidir si ambas secciones se conservan o se integran. |
| Navegar entre las secciones | Implementado, pendiente de repaso completo | El menú enlaza a inicio, qué es, acompañamiento, recursos y contacto. “Principios” se alcanza al desplazarse, pero no tiene enlace propio en el menú. |
| Mostrar recursos educativos relacionados | Parcial | Hay tres tarjetas etiquetadas como muestras ficticias. Faltan recursos reales, autor o institución, fecha, fuente, enlace y crédito/licencia. |
| Incorporar llamadas a la acción y contacto | Parcial | Existe una sección de cierre. El correo de ejemplo se retiró para no ofrecer un contacto falso; los canales reales y el destino de la llamada a la acción siguen pendientes. |
| Ofrecer scrollytelling | Implementado, pendiente de validación visual | Hay paneles narrativos, parallax y animación fijada en escritorio. En móvil los paneles se muestran en flujo vertical. La secuencia de fotogramas del hero sigue sin estar implementada y requiere confirmación de prioridad. |
| Adaptar el recorrido a móvil, tableta y escritorio | Implementado, pendiente de probar en tamaños/dispositivos diversos | Hay reglas responsive y menú móvil. La verificación exhaustiva se posterga a la siguiente revisión. |
| Mantener formularios, backend y base de datos fuera del alcance | Cumplido según el alcance actual | No aparecen en la página; esta demo es estática. |

## Secciones que existen hoy

1. **Inicio / hero:** título, mensaje y una ilustración original con parallax. El lema y la identidad visual son provisionales.
2. **¿Qué es?:** explicación inicial y tres mensajes breves. No son estadísticas; son frases de contenido que también deben validarse.
3. **Acompañamiento:** tres paneles narrativos sobre aprendizaje, adaptación y colaboración.
4. **Principios:** tres tarjetas sobre contexto, relaciones y bienestar.
5. **Recursos:** tres muestras ficticias, sin fuentes reales ni enlaces a materiales.
6. **Cierre / contacto:** mensaje de cierre y un marcador no interactivo para el canal de contacto pendiente.
7. **Pie de página:** lema provisional y retorno al inicio.

La separación entre “Acompañamiento” y “Principios” no es un requisito independiente confirmado: los principios sí aparecen en el alcance documentado, mientras que la duplicación de bloques es una decisión de diseño que falta validar. No se añade misión o visión como sección hasta confirmar que el equipo las necesita.

## Información que se debe poder completar

### Identidad y presentación

- [ ] Nombre oficial del proyecto o institución.
- [ ] Logotipo y lineamientos visuales aprobados.
- [ ] Lema definitivo, si se utilizará.
- [ ] Audiencia principal y propósito concreto de la landing.
- [ ] Texto institucional de presentación.
- [ ] Confirmar si misión y visión forman parte de los requisitos.

### Contenido educativo

- [ ] Definición aprobada de pedagogía hospitalaria.
- [ ] Ideas o principios que deben explicarse y su orden.
- [ ] Fuentes académicas que respalden las afirmaciones.
- [ ] Decisión sobre conservar juntas o integrar las secciones “Acompañamiento” y “Principios”.
- [ ] Decisión sobre si el hero necesita una secuencia de imágenes o basta la ilustración actual.

### Cada recurso

- [ ] Tipo: artículo, video, guía, experiencia u otro.
- [ ] Título y autor/institución responsable.
- [ ] Fecha o año, si corresponde.
- [ ] Descripción breve.
- [ ] URL comprobada.
- [ ] Fuente, atribución y permiso/licencia para materiales e imágenes.

### Contacto

- [ ] Correo y/o canales oficiales.
- [ ] Enlaces sociales que se quieran mostrar.
- [ ] Texto y destino de la llamada a la acción.

## Decisiones pendientes para cerrar la estructura

- [ ] ¿Se conservan “Acompañamiento” y “Principios” como dos secciones, o se integran?
- [ ] ¿Misión y visión se requieren para esta landing?
- [ ] ¿La institución o iniciativa debe tener una presentación propia además del hero?
- [ ] ¿El hero debe llevar una secuencia de imágenes controlada por scroll?
- [ ] ¿Qué clases de recursos se incluirán y qué campos deben verse en sus tarjetas?
- [ ] ¿Qué canales de contacto y redes son oficiales?

## Comprobaciones aplazadas

La inspección visual detallada de resoluciones, la auditoría de teclado/contraste, y las pruebas de navegación en diferentes navegadores y dispositivos no se consideran cerradas en esta revisión. Se mantienen para la siguiente etapa, después de acordar el contenido y la estructura.
