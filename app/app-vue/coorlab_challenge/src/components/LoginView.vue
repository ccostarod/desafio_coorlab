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
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Aqui você pode lidar com a submissão do formulário
      console.log("Usuário:", this.username);
      console.log("Senha:", this.password);
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
  left: calc(50% + 150px); /* Adiciona metade da largura da barra lateral */
  transform: translate(-50%, -50%);
  border-radius: 10px; /* Adiciona bordas arredondadas */
  font-family: Arial, sans-serif; /* Define a fonte */
}

.form-group {
  margin-bottom: 15px; /* Adiciona um pouco de espaço entre os campos do formulário */
}

.form-group label {
  font-weight: bold; /* Deixa o texto do label em negrito */
}

.form-group input {
  padding: 10px; /* Adiciona um pouco de padding dentro dos campos de input */
  border-radius: 5px; /* Adiciona bordas arredondadas aos campos de input */
  border: 1px solid #ccc; /* Adiciona uma borda aos campos de input */
}

button {
  padding: 10px 20px; /* Adiciona um pouco de padding ao botão */
  border-radius: 5px; /* Adiciona bordas arredondadas ao botão */
  border: none; /* Remove a borda do botão */
  background-color: #007bff; /* Define a cor de fundo do botão */
  color: #fff; /* Define a cor do texto do botão */
  cursor: pointer; /* Muda o cursor para um ponteiro quando passa sobre o botão */
}

button:hover {
  background-color: #0056b3; /* Muda a cor de fundo do botão quando passa o mouse sobre ele */
}
</style>
