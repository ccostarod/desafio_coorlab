<template>
  <div class="container">
    <div class="sidebar">
      <img :src="logo" alt="logo" />
    </div>
    <div class="main-content">
      <div class="header"></div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "GenericView",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  min-height: 100vh;
  position: relative;
}

img {
  width: 250px;
  height: 50px;
  margin: 30px 0 0 30px;
}

.sidebar {
  width: 300px;
  background-color: #273148;
  color: #2a4365;
}

.main-content {
  flex: 1;
}

.header {
  background-color: #fff;
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 20px 2px;
}

.content {
  padding: 20px 12px;
  color: #2a4365;
}

.calculator {
  background-color: #b2dfdb;
  width: 100%;
  height: 100%;
}

.title {
  background-color: #1a202c;
  height: 20px;
  padding: 6px 12px;
}

.form {
  background-color: #edf2f7;
  height: 75%;
  width: 33%;
  margin-left: 12px;
  margin-top: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}
</style>
