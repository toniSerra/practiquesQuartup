import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Cestacompra: () => import('../../components/Cestacompra.vue' /* webpackChunkName: "components/cestacompra" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Producto: () => import('../../components/Producto.vue' /* webpackChunkName: "components/producto" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  Drawerproducto: () => import('../../components/drawerproducto.vue' /* webpackChunkName: "components/drawerproducto" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
