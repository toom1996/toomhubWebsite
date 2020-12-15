export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'toom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui.js', ssr: true },
    { src: '~/plugins/axios' }
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  proxy: [
    [
      '/api',//拦截目录
      {
        target: 'http://192.168.10.113:8080',//https://toomhub.23cm.cn/', // 代理api主机
        changeOrigin: true,
        pathRewrite: { '^/' : '' }
      }
    ]
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        disableNoTranslationWarning: true, //关闭警告
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // 添加模块，配置只打包一次，减少应用bundle的体积
    vendor: ['element-ui']
  },
  // server: {
  //   port: 3000,     // default: 3000
  //   host: '192.168.31.88' // default: localhost
  // }
}
