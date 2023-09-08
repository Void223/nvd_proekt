<template>
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/employees">Employees</router-link>
        </li>
        <li>
          <router-link to="/contributors">Contributors</router-link>
        </li>
      </ul>
    </nav>
  </template>
   
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
   
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
    padding: 10px;
  }
   
  .navbar ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
   
  .navbar a {
    color: white;
    text-decoration: none;
  }
   
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  