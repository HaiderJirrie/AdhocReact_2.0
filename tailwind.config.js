/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        adhocBlauw: '#5C97BA',
        adhocBlauw200: '#497894',
        adhocDonkerBlauw: '#033E99'
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      width: {
        'mymd': '1230px'
      },
      backgroundImage: {
        'blob': "url('./resources/home/blob.svg')",
        'blob2': "url('./resources/home/blob2.svg')",
        'wave': "url('./resources/home/wave.svg')",
      }
    },
  },
  plugins: [],
}