<template>
  <div class="login-card">
    <h1>Login</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button @click="login">Entrar</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "LoginCard",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["SET_LOGIN"]),
    login() {
      console.log("Usuário:", this.username);
      console.log("Senha:", this.password);
      this.SET_LOGIN(true);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.login-card {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: calc(50% + 150px);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
}

.form-group input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
