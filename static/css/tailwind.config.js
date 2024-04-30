// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// yukarısı default 

module.exports = {
  content: ['../**/*.html', '../**/*.js', './node_modules/flowbite/**/*.js'],
  theme: { extend: {} },
  plugins: [
    require('flowbite/plugin')
  ],
};