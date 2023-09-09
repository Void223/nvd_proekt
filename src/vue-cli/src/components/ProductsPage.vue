<template>
  <div class="products">
    <h1>Products:</h1>
    <div class="products-container">
      <Product v-for="product in products" :key="product.id" :product="product"></Product>
    </div>
  </div>
</template>
  
<script>
import Product from './Product.vue';
export default {
  name: 'ProductsPage',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Laptop',
          description: 'Powerful laptop for work and play',
          price: 999.99,
          image: 'laptop.webp',
        },
        {
          id: 2,
          name: 'Smartphone',
          description: 'High-end smartphone with a stunning camera',
          price: 799.00,
          image: 'smartphone.webp',
        },
        {
          id: 3,
          name: 'Headphones',
          description: 'Wireless headphones with noise-cancelling',
          price: 149.99,
          image: 'headphones.webp',
        },
        {
          id: 4,
          name: 'Smartwatch',
          description: 'Fitness and smartwatch with health tracking',
          price: 249.50,
          image: 'smartwatch.webp',
        },
        {
          id: 5,
          name: 'Tablet',
          description: 'Sleek tablet with a high-resolution display',
          price: 399.00,
          image: 'tablet.webp',
        },
        {
          id: 6,
          name: 'Camera',
          description: 'Professional DSLR camera with 4K video',
          price: 1199.99,
          image: 'camera.webp',
        },
        {
          id: 7,
          name: 'Gaming Console',
          description: 'Next-gen gaming console for immersive gameplay',
          price: 499.00,
          image: 'gaming-console.jpg',
        },
        {
          id: 8,
          name: 'Desktop Computer',
          description: 'High-performance desktop computer for heavy tasks',
          price: 1299.00,
          image: 'desktop.webp',
        },
        {
          id: 9,
          name: 'Wireless Earbuds',
          description: 'Compact wireless earbuds with long battery life',
          price: 89.99,
          image: 'earbuds.webp',
        },
      ],
    };
  },
  components: {
    Product
  }
};

</script>
  
<style scoped>
.products {
  text-align: center;
  padding: 20px;
  width: 80%;
  margin: auto;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px
}
</style>