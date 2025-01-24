/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './index.html',  // Archivo HTML principal
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Archivos Vue y JS donde se usarán las clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
