import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Configuración de Astro con Tailwind CSS
export default defineConfig({
  // Configuración de Astro puede ir aquí

  // Integración de Tailwind CSS
  integrations: [tailwind()],

  // Configuración adicional de Tailwind si es necesario
  tailwind: {
    // Configuración de Tailwind
  },

  // Configuración de la ruta base para GitHub Pages
  site: "https://jhonzasd.github.io", // Reemplaza "nombre-de-repositorio" con el nombre real de tu repositorio en GitHub

  // Puedes agregar más configuraciones según sea necesario
});

// Script de implementación en GitHub Pages
// Agrega este script en el archivo "package.json"
// Luego, puedes ejecutar "npm run deploy" para implementar en GitHub Pages

