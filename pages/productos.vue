<template>
  <div>
    <v-btn @click = "drawer = true"> 
      <v-icon large color="primary">mdi-plus</v-icon>Añadir producto 
    </v-btn>
    <v-btn @click = "ver_cesta = !ver_cesta">
       <span v-show = "!ver_cesta" ><v-icon color="primary">mdi-cart</v-icon>Ver cesta</span>
       <span v-show = "ver_cesta" ><v-icon color="primary">mdi-star-four-points-outline</v-icon>Ver Productos</span>
       </v-btn>
    <br/>
    <br/>
    <v-divider/>
    <br/>
    <v-row v-show = !ver_cesta>
      <Producto
        v-for="(p, i) in productos"
        :key="p.id"
        :prod="p"
        :cant="cesta_compra[i]"
        @add="add(i)"
        @rem="rem(i)"
      />
    </v-row>
    <v-row>
      
    </v-row>
    <Drawerproducto
    v-show = "drawer"
    @desactivar = "drawer = false"
    @nuevo_producto = "nuevoProducto"
    />
  </div>
</template>

<script>
import drawerproducto from '~/components/drawerproducto.vue';
// import Producto from "~/components/Producto.vue"
import Drawerproducto from "~/components/drawerproducto.vue";

export default {
  components: { drawerproducto },
  data() {
    return {
      drawer: false,  
      ver_cesta: false,
      productos: [
        {
          nom: "PRODUCTO 1",
          pre: "1.15",
          des: "la ostia en vinagre",
          sto: 3,
        },
        {
          nom: "PRODUCTO 2",
          pre: "25.00",
          des: "no te arrepentiras",
          sto: 5,
        },
      ],
      cesta_compra: [1, 4],
    };
  },
  methods: {
    add(i) {
      this.cesta_compra[i]++;
      this.cesta_compra.push();
    },
    rem(i) {
      this.cesta_compra[i]--;
      this.cesta_compra.push();
    },
    nuevoProducto(p){
      this.productos.push(p);
      this.cesta_compra.push(0);
    }
  },
};
</script>

<style scoped>
</style>