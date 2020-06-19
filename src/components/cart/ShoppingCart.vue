<template>
     <tbody>
        <tr v-for="(product, index) in cart" :key="index">
          <td >{{product.title}}</td>
          <td >{{product.cost}}</td>
          <img :src="product.src" :alt="product.title" />
        </tr>
      </tbody>
</template>

<script>
export default {
    name: 'Cart',
    computed: {
        cart() {
           return this.$store.state.cart;
        }
    },
    beforeCreate() {
        console.log('from the cart', this.$store.state.cart);
        
    },
}
</script>