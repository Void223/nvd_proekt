<template>
    <div class="contributer-card">
      <img :src="require(`@/assets/contributers/user.png`)" alt="contributer Image" class="contributer-image" />
      <div class="contributer-details">
        <h2>{{ contributer.name }}</h2>
        <p>{{ contributer.title }}</p>
        <p class="contributer-department">{{ contributer.department }}</p>
        <p class="contributer-email">{{ contributer.email }}</p>
        <p class="contributer-phone">{{ contributer.phone }}</p>
      </div>
    </div>
  </template>

<script>
export default {
    name: "contributer",
    props: {
        contributer: Object,
    }
}
</script>

<style scoped>
.contributer-card {
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

.contributer-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.contributer-details {
  margin-top: 10px;
}

.contributer-department {
  font-weight: bold;
  color: #007bff;
}

.contributer-email, .contributer-phone {
  font-weight: bold;
}

</style>