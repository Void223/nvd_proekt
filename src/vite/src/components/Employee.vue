<template>
    <div class="employee-card">
      <img :src="`/employees/user.png`" alt="employee Image" class="employee-image" />
      <div class="employee-details">
        <h2>{{ employee.name }}</h2>
        <p>{{ employee.title }}</p>
        <p class="employee-department">{{ employee.department }}</p>
        <p class="employee-email">{{ employee.email }}</p>
        <p class="employee-phone">{{ employee.phone }}</p>
      </div>
    </div>
  </template>

<script>
export default {
    name: "employee",
    props: {
        employee: Object,
    }
}
</script>

<style scoped>
.employee-card {
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

.employee-image {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.employee-details {
  margin-top: 10px;
}

.employee-department {
  font-weight: bold;
  color: #007bff;
}

.employee-email, .employee-phone {
  font-weight: bold;
}

</style>