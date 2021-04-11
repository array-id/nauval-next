const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        primarygray: {
          DEFAULT: "#F7F7FB",
          "200": "#E8E8FB",
          "300": "#BFBFE3"
        },
        yellow: {
          "50": "#ff100109",
          "100": "#fffdf0",
          "200": "#fef8be",
          "300": "#fdf390",
          "400": "#fded5e",
          "500": "#fce72c",
          "600": "#e7d103",
          "700": "#ab9a02",
          "800": "#6f6402",
          "900": "#322d01"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };

      addUtilities(utilities);
    })
  ],
}
