/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f1e8',
        blush: '#e8c6c8',
        burgundy: '#7d3341',
        mutedRose: '#b66575',
        warmBeige: '#d8c1a9',
        ink: '#2b2324'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(125, 51, 65, 0.12)',
        polaroid: '0 14px 30px rgba(43, 35, 36, 0.15)'
      },
      backgroundImage: {
        'soft-gradient': 'radial-gradient(circle at top left, #fbe7e1 0%, #f7f1e8 45%, #efe2d3 100%)'
      }
    }
  },
  plugins: []
}
