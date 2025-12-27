module.exports = {
  content: [
    './layout/**/*.ejs',
    './source/**/*.md',
    './source/**/*.html',
    '../../source/**/*.md', // 掃描 Hexo 主專案的文章
    '../../source/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: { sans: ['"Noto Sans TC"', 'sans-serif'] },
      colors: {
        primary: '#4F46E5', 
        'primary-dark': '#818CF8',
      },
      typography: (theme) => ({
        DEFAULT: { css: { a: { color: theme('colors.primary'), '&:hover': { color: theme('colors.indigo.700') } } } },
        invert: { css: { a: { color: theme('colors.primary-dark'), '&:hover': { color: theme('colors.indigo.300') } } } },
      }),
    },
  },
  plugins: [],
}