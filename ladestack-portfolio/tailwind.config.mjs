/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        mist: '#F5F4F7',
        ink: '#0D0D0D',
        muted: '#6B7280',
        line: '#E8E6EE',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.04)',
        card: '0 1px 2px rgba(16, 16, 20, 0.04), 0 12px 32px rgba(16, 16, 20, 0.06)',
      },
      borderRadius: {
        card: '14px',
        media: '24px',
      },
      maxWidth: {
        shell: '72rem',
      },
    },
  },
  plugins: [],
};
