<template>
    <div class="contributor-card">
      <img :src="`/contributers/user.png`" alt="Contributor Image" class="contributor-image" />
      <div class="contributor-details">
        <h2>{{ contributor.name }}</h2>
        <p>{{ contributor.title }}</p>
        <p class="contributor-department">{{ contributor.department }}</p>
        <p class="contributor-email">{{ contributor.email }}</p>
        <p class="contributor-phone">{{ contributor.phone }}</p>
      </div>
    </div>
  </template>

<script>
export default {
    name: "Contributor",
    props: {
        contributor: Object,
    }
}
</script>

<style scoped>
.contributor-card {
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

.contributor-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.contributor-details {
  margin-top: 10px;
}

.contributor-department {
  font-weight: bold;
  color: #007bff;
}

.contributor-email, .contributor-phone {
  font-weight: bold;
}

</style>