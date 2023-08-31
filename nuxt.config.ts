// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    vue: { customElement: true },
    vueJsx: { mergeProps: true },
  },
  devtools: { enabled: false },
  runtimeConfig: {
    customServerSideKey: 'Only access server side constant',
    public: {
      customClientSideKey: 'Can access client side constant'
    }
  }
})
