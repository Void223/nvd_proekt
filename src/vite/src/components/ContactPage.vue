<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us through the following contact information.</p>
      <address>
        Email: <a href="mailto:contact@example.com">contact@example.com</a><br>
        Phone: <a href="tel:+123456789">+123 456 789</a>
      </address>
      <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  </template>
   
  <script>
  export default {
    name: 'ContactPage',
    data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here, e.g., send data to a server
      console.log('Form submitted with data:', this.formData);
    },
  },
  };
  </script>
   
  <style scoped>
  .contact {
    text-align: center;
    padding: 20px;
  }
  </style>