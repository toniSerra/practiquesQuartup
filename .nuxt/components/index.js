import { wrapFunctional } from './utils'

export { default as Cestacompra } from '../../components/Cestacompra.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Producto } from '../../components/Producto.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Drawerproducto } from '../../components/drawerproducto.vue'

export const LazyCestacompra = import('../../components/Cestacompra.vue' /* webpackChunkName: "components/cestacompra" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyProducto = import('../../components/Producto.vue' /* webpackChunkName: "components/producto" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyDrawerproducto = import('../../components/drawerproducto.vue' /* webpackChunkName: "components/drawerproducto" */).then(c => wrapFunctional(c.default || c))
