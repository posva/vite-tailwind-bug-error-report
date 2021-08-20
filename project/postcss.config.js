// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Specify the paths to all of the template files in your project
//   content: ["./src/**/*.html", "./src/**/*.vue"],

//   whitelist: ["ps", "ps__rail-x", "ps__rail-y", "ps--active-x", "ps--active-y", "ps--focus", "ps--scrolling-x", "ps--scrolling-y", "ps--clicking", "ps__thumb-x", "ps__thumb-y"],

//   // This is the function used to extract class names from your templates
//   defaultExtractor: (content) => {
//     // Capture as liberally as possible, including things like `h-(screen-1.5)`
//     const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

//     // Capture classes within other delimiters like .block(class="w-1/2") in Pug
//     const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

//     return broadMatches.concat(innerMatches);
//   },
// });

// module.exports = {
//   // plugins: [require("tailwindcss"), require("autoprefixer"), ...(process.env.NODE_ENV === "production" ? [purgecss] : [])],
//   plugins: [require("tailwindcss"), require("autoprefixer"), ...(process.env.NODE_ENV === "production" ? [] : [])],
// };
module.exports = {
  plugins: {
    // tailwindcss: {},
    // autoprefixer: {},
    // "@tailwindcss/jit": {},
    // require('postcss-import'),
    // require('tailwindcss'),
    // require('postcss-nested'), // or require('postcss-nesting')
    // require('autoprefixer'),
  },
}
