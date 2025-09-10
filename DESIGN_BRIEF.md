# 📖 Guía de Estilo y Diseño: Landing Page Vaporwave

## Concepto General
La estética es **Vaporwave / VHS**, pero ejecutada de forma **moderna, limpia y profesional**. El objetivo es crear una experiencia inmersiva y de alta tecnología, evocando un futuro nostálgico. La página debe ser oscura y atmosférica, usando la luz de neón como elemento principal.

## 🎨 Paleta de Colores

### Paleta Principal (Vaporwave Neón)
Se usa sobre fondos oscuros para crear un efecto lumínico.

- **Fondo Principal:** `#0D0B1A` (Azul/Púrpura muy oscuro)
- **Neón Primario (CTAs):** `#00F2FF` (Cian brillante)
- **Neón Secundario:** `#FF00E5` (Magenta brillante)
- **Texto Principal:** `#F5F5F5` (Blanco roto para legibilidad)
- **Acento** `#9D4EDD` (Violeta para acentos menores)

## ✍️ Tipografía

### Fuentes
- **Títulos (`h1`, `h2`, `h3`):** Monument Extended
- **Cuerpo de Texto (`p`, `li`):** Inter
- **Acentos (Efecto VCR):** VCR OSD Mono

### Reglas de Uso
- **Títulos:** Usar la fuente **Monument Extended**. Aplicar un sutil efecto de `glow` o `text-shadow` usando el color de neón correspondiente (Cian o Magenta).
- **Párrafos:** Usar la fuente **Inter** para garantizar la máxima legibilidad. El color debe ser el blanco roto (`#F5F5F5`).
- **Detalles Especiales:** Usar **VCR OSD Mono** para textos pequeños y decorativos que busquen emular una interfaz de VCR, como etiquetas o fechas.

## ✨ Animación y Movimiento
- Las animaciones deben ser fluidas y sutiles, orquestadas con **GSAP**.
- Usar efectos de **`glitch` controlados** en los `hover` de elementos interactivos.
- Las apariciones de elementos al hacer scroll deben ser suaves, usando el plugin **`ScrollTrigger`**.
- El fondo debe ser un elemento continuo y evolutivo, preferiblemente un patrón SVG o gradiente animado con GSAP, para evitar cortes entre secciones.