<template>
  <div class="container">
    <div class="sidebar">
      <img :src="logo" alt="logo" />
      <div v-if="isLoggedIn" class="calculator-item">
        <a @click="goToMenu">
          <i class="bi bi-calculator"></i>
          <p>Calculadora de Viagem</p>
        </a>
      </div>
    </div>
    <div class="another-sidebar">
      <button v-if="isLoggedIn" @click="logout" class="quit">Sair</button>
    </div>
  </div>
  <div v-if="isLoggedIn === false" class="main-content">
    <div class="login-card">
      <p>Por favor, faça login para continuar:</p>
      <button @click="goToLogin" class="login-button">Login</button>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
import { mapState } from "vuex";
export default {
  name: "GenericView",
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  data() {
    return {
      logo,
    };
  },
  methods: {
    goToMenu() {
      this.$router.push("/menu");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.commit("SET_LOGIN", false);
      this.$router.push("/");
    },
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

.another-sidebar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  padding-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
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

.calculator-item {
  color: #fff;
  margin-top: 50px;
}

.calculator-item a {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 18px;
  cursor: pointer;
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

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.login-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.login-button {
  background-color: #273148;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
