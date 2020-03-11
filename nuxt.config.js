
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,500i,600,600i&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: 'ant-design-vue/dist/antd.less',
      lang: 'less'
    },
    {
      src: '@/assets/style.scss',
      lang: 'scss'
    }

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/antd-ui' },
    { src: "@/plugins/chart", ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['vue-currency-filter/nuxt', {
      symbol: 'IDR',
      thousandsSeparator: '.',
      fractionCount: 0,
      fractionSeparator: '.',
      symbolPosition: 'front',
      symbolSpacing: true
    }],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es'
            // style: true
          },
          'ant-design-vue'
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

    loaders: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': 'rgba(222, 12, 101, 1.0)',
          'component-background': '#ffffff',
        }
      }
    }
  }
}
