import { quasar } from "@quasar/vite-plugin";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Свадьба',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: ''},
        {name: 'format-detection', content: 'telephone=no'},
      ],

      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ],
      script: [
        { src: '//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js' },
      ],
    },
  },

  build: {
    transpile: ["quasar"],
  },
  css: [
    "@quasar/extras/roboto-font/roboto-font.css",
    "@quasar/extras/material-icons/material-icons.css",
    "@quasar/extras/fontawesome-v6/fontawesome-v6.css",
    "~/assets/styles/quasar.sass",
    "~/css/style.scss",
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    plugins: [
      quasar({
        sassVariables: "assets/styles/quasar-variables.sass",
      }),
    ],
  },
});
