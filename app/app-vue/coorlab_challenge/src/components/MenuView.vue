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
          <p class="result-text">
            Essas são as melhores alternativas de viagem para a data selecionada
          </p>
          <div v-if="fastestOption" class="card">
            <div class="left-card">
              <i class="bi bi-clock-history"></i>
            </div>
            <div class="card-content">
              <h3>
                <strong> {{ fastestOption.name }} </strong>
              </h3>
              <p>
                {{ fastestOption.seatOrBed }}
              </p>
              <p>Tempo estimado: {{ fastestOption.duration }}</p>
            </div>
            <div class="price-card">
              <h4>Preço</h4>
              <p>{{ fastestOption.price_econ }}</p>
            </div>
          </div>
          <div v-if="cheapestOption" class="card">
            <div class="left-card">
              <i class="bi bi-coin"></i>
            </div>
            <div class="card-content">
              <h3>
                <strong> {{ cheapestOption.name }} </strong>
              </h3>
              <p>
                {{ cheapestOption.seatOrBed }}
              </p>
              <p>Tempo estimado: {{ cheapestOption.duration }}</p>
            </div>
            <div class="price-card">
              <h4>Preço</h4>
              <p>{{ cheapestOption.price_econ }}</p>
            </div>
          </div>
          <button @click="resetForm" class="reset-button">Limpar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
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
        Swal.fire({
          title: "Erro!",
          text: "Por favor, preencha todos os campos",
          icon: "error",
          confirmButtonText: "OK",
          position: "center",
        });
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/data?city=${this.destination}&date=${this.date}`
      );
      const transportOptions = response.data.transport;

      // Filtrar opções com base na cidade escolhida
      const filteredOptions = transportOptions.filter(
        (option) => option.city === this.destination
      );

      const sortedByTime = [...filteredOptions].sort(
        (a, b) =>
          this.parseDuration(a.duration) - this.parseDuration(b.duration)
      );
      const sortedByPrice = [...filteredOptions].sort(
        (a, b) => this.parsePrice(a.price_econ) - this.parsePrice(b.price_econ)
      );

      this.fastestOption = sortedByTime[0];
      this.cheapestOption = sortedByPrice[0];

      this.fastestOption.seatOrBed =
        this.fastestOption.type === "complete"
          ? `Leito: ${this.fastestOption.bed}`
          : `Poltrona: ${this.fastestOption.seat}`;
      this.cheapestOption.seatOrBed =
        this.cheapestOption.type === "complete"
          ? `Leito: ${this.cheapestOption.bed}`
          : `Poltrona: ${this.cheapestOption.seat}`;
    },
    parseDuration(duration) {
      return parseInt(duration.replace("h", ""));
    },
    parsePrice(price) {
      return parseFloat(price.replace("R$ ", "").replace(",", "."));
    },
    resetForm() {
      this.destination = "";
      this.date = "";
      this.fastestOption = null;
      this.cheapestOption = null;
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
  width: 600px;
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
  flex-direction: column;
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
  margin: 20px;
  position: relative;
  flex-grow: 1;
  justify-content: center;
}

.card {
  background-color: #ddd;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 5px;
  width: 600px;
  height: 150px;
}

.small-text p {
  font-size: 9px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin: 0;
}

.card-content p {
  font-size: 16px;
}

.card-content p,
h3 {
  text-align: left;
}

.price-card {
  background-color: #ddd;
  padding: 10px;
  width: 170px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  right: -180px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}

.result-text {
  margin-bottom: 20px;
}

.left-card {
  background-color: rgb(49, 169, 129);
  width: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.left-card i {
  font-size: 32px;
}

.reset-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: rgb(251, 210, 61);
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
