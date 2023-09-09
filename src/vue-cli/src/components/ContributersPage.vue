<template>
  <div class="contributers">
    <h1>Contributers:</h1>
    <div class="contributers-container">
      <Contributer v-for="contributer in contributers" :key="contributer.id" :contributer="contributer"></Contributer>
    </div>
  </div>
</template>
  
<script>
import Contributer from './Contributer.vue';
export default {
  name: 'ContributersPage',
  data() {
    return {
      contributers: [
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
        {
          id: 6,
          name: 'Olivia Martinez',
          title: 'HR Specialist',
          department: 'Human Resources',
          email: 'olivia.martinez@example.com',
          phone: '+1 (555) 555-7890',
        },
        {
          id: 7,
          name: 'James Wilson',
          title: 'Finance Analyst',
          department: 'Finance',
          email: 'james.wilson@example.com',
          phone: '+1 (555) 321-6540',
        },
        {
          id: 8,
          name: 'Ava White',
          title: 'Graphic Designer',
          department: 'Design',
          email: 'ava.white@example.com',
          phone: '+1 (555) 777-8888',
        },
        {
          id: 9,
          name: 'Liam Harris',
          title: 'Project Manager',
          department: 'Project Management',
          email: 'liam.harris@example.com',
          phone: '+1 (555) 234-5678',
        },
        {
          id: 10,
          name: 'Mia Clark',
          title: 'Customer Support Specialist',
          department: 'Customer Support',
          email: 'mia.clark@example.com',
          phone: '+1 (555) 111-2222',
        },
      ]
    };
  },
  components: {
    Contributer
  }
};

</script>
  
<style scoped>
.contributers {
  text-align: center;
  padding: 20px;
  width: 80%;
  margin: auto;
}

.contributers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px
}
</style>