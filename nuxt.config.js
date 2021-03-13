import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fertőrákosi Lövészklub',
    htmlAttrs: {
      lang: 'hu'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fertőrákosi Lövészklub: légfegyveres lövészet, sportlövészet, íjászat kezdőknek és haladóknak egyaránt.'},
      { hid: 'og:title', name: 'og:title', content: 'Fertőrákosi Lövészklub'},
      { hid: 'og:description', name: 'og:description', content: 'Fertőrákosi Lövészklub: légfegyveres lövészet, sportlövészet, íjászat kezdőknek és haladóknak egyaránt.'},
      { hid: 'og:image', name: 'og:image', content: 'https://www.fertorakosi-loveszklub.hu/img/fb_share.jpg'},
      { hid: 'fb:pages', name: 'fb:pages', content: '1513962075484348'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/icon.png' },
      { rel: 'stylesheet',  href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' },
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700|Noto+Serif:400,700&subset=latin-ext' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  generate: {
    routes() {
      return axios.get('https://admin.fertorakosi-loveszklub.hu/api/articles').then(res => {
        return res.data.map(article => `/hirek/${article.slug}`);
      });
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL
    }
  },

  googleAnalytics: {
    id: 'UA-85546283-1'
  }
}
