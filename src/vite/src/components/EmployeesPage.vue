<template>
  <div class="employees">
    <h1>Employees:</h1>
    <div class="employees-container">
      <Employee v-for="employee in employees" :key="employee.id" :employee="employee"></Employee>
    </div>
  </div>
</template>
  
<script>
import Employee from './Employee.vue';
export default {
  name: 'EmployeesPage',
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Andrej Kocev',
          title: 'Software Engineer',
          department: 'Engineering',
          email: 'andrej.kocev@example.com',
          phone: '+1 (123) 456-7890',
        },
        {
          id: 2,
          name: 'Filip Tanevski',
          title: 'Software Engineer',
          department: 'Engineering',
          email: 'filip.tanevski@example.com',
          phone: '+1 (123) 456-7890',
        },
        {
          id: 3,
          name: 'John Doe',
          title: 'Software Engineer',
          department: 'Engineering',
          email: 'john.doe@example.com',
          phone: '+1 (123) 456-7890',
        },
        {
          id: 4,
          name: 'Jane Smith',
          title: 'Product Manager',
          department: 'Product Management',
          email: 'jane.smith@example.com',
          phone: '+1 (987) 654-3210',
        },
        {
          id: 5,
          name: 'Michael Johnson',
          title: 'Designer',
          department: 'Design',
          email: 'michael.johnson@example.com',
          phone: '+1 (555) 555-5555',
        },
      ]
    };
  },
  components: {
    Employee
  }
};

</script>
  
<style scoped>
.employees {
  text-align: center;
  padding: 20px;
  width: 80%;
  margin: auto;
}

.employees-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px
}
</style>