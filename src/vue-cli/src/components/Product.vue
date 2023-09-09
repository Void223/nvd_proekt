<template>
    <div class="product-card">
      <img :src="require(`@/assets/products/${product.image}`)" alt="Product Image" class="product-image" />
      <div class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="product-price">$ {{ product.price }}</p>
      </div>
    </div>
  </template>

<script>
export default {
    name: "Product",
    props: {
        product: Object,
    }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
}

.product-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.product-details {
  margin-top: 10px;
}

.product-price {
  font-weight: bold;
  color: #007bff;
}
</style>