<template>
  <div class="main-card">
    <div class="sidebar"></div>
    <div class="content">
      <div class="search-card">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="destination">Destino:</label>
            <select id="destination" v-model="destination">
              <option value="">Selecione...</option>
              <!-- Adicione suas opções de destino aqui -->
            </select>
          </div>
          <div class="form-group">
            <label for="date">Data:</label>
            <input type="date" id="date" v-model="date" />
          </div>
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div class="results">
        <!-- Os resultados da busca serão listados aqui -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      destination: "",
      date: "",
    };
  },
  methods: {
    onSubmit() {
      // Implemente a lógica de busca aqui
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-card {
  background-color: #f5f5f5;
  padding: 0;
  padding-top: 0;
  position: absolute;
  top: 120px; /* Considerando a barra superior e a margem */
  left: 340px; /* Considerando a barra lateral e a margem */
  width: calc(100% - 360px); /* Subtraindo a barra lateral e as margens */
  height: calc(100% - 260px); /* Subtraindo a barra superior e as margens */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sidebar {
  background-color: #273148;
  height: 50px;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.content {
  display: flex;
  gap: 20px;
  flex-grow: 1;
}

.search-card {
  background-color: #ddd;
  padding: 20px;
  width: 400px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.results {
  background-color: #f5f5f5;
  flex-grow: 1;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

select,
input,
button {
  width: 100%;
}
</style>
