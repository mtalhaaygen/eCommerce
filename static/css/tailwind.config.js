module.exports = {
  darkMode: 'selector',
  content: ['../**/*.html', '../**/*.js', './node_modules/flowbite/**/*.js'],
  theme: { 
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        yesil: {"50":"#f7fee7","100":"#ecfccb","200":"#d9f99d","300":"#bef264","400":"#a3e635","500":"#84cc16","600":"#65a30d","700":"#4d7c0f","800":"#3f6212","900":"#365314","950":"#1a2e05"}
       }
    }
  },
  fontFamily: {
    // bu fontları hiç kullanmadık 4May
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  plugins: [
    require('flowbite/plugin')
  ],
};