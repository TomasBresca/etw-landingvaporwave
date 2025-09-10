// src/scripts/hero-animations.js
// Script para animaciones GSAP del componente Hero

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Inicializa las animaciones del Hero
 * - Pirámide se desliza desde arriba
 * - Textos se deslizan desde abajo
 * - Animaciones rápidas y fluidas para no ralentizar navegación
 */
export function initHeroAnimations() {
  // Timeline principal para coordinar todas las animaciones
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 0.8
    }
  });

  // Estado inicial: elementos ocultos
  gsap.set([
    ".hero-text-content",
    ".hero-pyramid-desktop", 
    ".hero-pyramid-mobile",
    ".hero-background-elements"
  ], {
    opacity: 0
  });

  // Preparar elementos de texto para animación desde abajo
  gsap.set(".hero-text-content", {
    y: 50,
    opacity: 0
  });

  // Preparar pirámides para animación desde arriba
  gsap.set([".hero-pyramid-desktop", ".hero-pyramid-mobile"], {
    y: -100,
    opacity: 0,
    scale: 0.8
  });

  // Preparar elementos de fondo
  gsap.set(".hero-background-elements", {
    opacity: 0
  });

  // Secuencia de animaciones con pequeños delays para efecto escalonado
  tl
    // 1. Aparecer elementos de fondo sutilmente
    .to(".hero-background-elements", {
      opacity: 1,
      duration: 0.6,
      ease: "power1.out"
    }, 0)
    
    // 2. Pirámide se desliza desde arriba (desktop y mobile)
    .to([".hero-pyramid-desktop", ".hero-pyramid-mobile"], {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: "back.out(1.2)"
    }, 0.2)
    
    // 3. Textos se deslizan desde abajo con ligero delay
    .to(".hero-text-content", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0.4);

  // Animación adicional para el efecto glitch del texto destacado
  gsap.fromTo(".glitch-text", {
    textShadow: "0 0 0px rgba(0, 242, 255, 0)"
  }, {
    textShadow: "0 0 20px rgba(0, 242, 255, 0.6)",
    duration: 1.2,
    delay: 1,
    ease: "power2.inOut"
  });

  // Animación sutil para los elementos de fondo magenta
  gsap.to(".hero-bg-element", {
    scale: 1.1,
    duration: 4,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    stagger: 0.5,
    delay: 1.5
  });
}

/**
 * Inicializa animaciones cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
});
