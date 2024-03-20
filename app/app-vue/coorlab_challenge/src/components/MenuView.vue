<template>
  <div class="main-card">
    <div class="sidebar"></div>
    <div class="content">
      <div class="search-card">
        <div class="serch-card-text">
          <i class="bi bi-cash-coin"></i>
          <p>Calcule o valor da viagem</p>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="destination">Destino:</label>
            <select id="destination" v-model="destination">
              <option value="">Selecione...</option>
              <option v-for="city in cities" :value="city" :key="city">
                {{ city }}
              </option>
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
        <div v-if="!fastestOption && !cheapestOption">
          <p>Nenhum dado selecionado</p>
        </div>
        <div v-else class="cards">
          <div v-if="fastestOption" class="card">
            <h2>Opção mais rápida</h2>
            <p>Preço: {{ fastestOption.price_econ }}</p>
            <p>Empresa: {{ fastestOption.name }}</p>
            <p>Duração: {{ fastestOption.duration }}</p>
          </div>
          <div v-if="cheapestOption" class="card">
            <h2>Opção mais barata</h2>
            <p>Preço: {{ cheapestOption.price_econ }}</p>
            <p>Empresa: {{ cheapestOption.name }}</p>
            <p>Duração: {{ cheapestOption.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MenuView",
  data() {
    return {
      destination: "",
      date: "",
      cities: [],
      fastestOption: null,
      cheapestOption: null,
    };
  },
  methods: {
    async onSubmit() {
      if (!this.destination || !this.date) {
        alert("Por favor, preencha todos os campos");
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/data?city=${this.destination}&date=${this.date}`
      );
      const transportOptions = response.data.transport;

      const sortedByTime = [...transportOptions].sort(
        (a, b) =>
          this.parseDuration(a.duration) - this.parseDuration(b.duration)
      );
      const sortedByPrice = [...transportOptions].sort(
        (a, b) => this.parsePrice(a.price_econ) - this.parsePrice(b.price_econ)
      );

      this.fastestOption = sortedByTime[0];
      this.cheapestOption = sortedByPrice[0];
    },
    parseDuration(duration) {
      return parseInt(duration.replace("h", ""));
    },
    parsePrice(price) {
      return parseFloat(price.replace("R$ ", "").replace(",", "."));
    },
  },
  async created() {
    const response = await axios.get("http://localhost:3000/data");
    const cities = response.data.transport.map((item) => item.city);
    this.cities = [...new Set(cities)]; // Remove duplicates
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
  top: 120px;
  left: 340px;
  width: calc(100% - 360px);
  height: calc(100% - 260px);
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
.serch-card-text {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 24px;
}

.results {
  background-color: #f5f5f5;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.results p {
  font-size: 24px;
}

.form-group {
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
}

label {
  display: block;
}

button {
  margin-top: 10px;
  align-self: center;
  color: black;
  width: 200px;
  background-color: rgb(49, 169, 129);
}

select,
input {
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background-color: #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
