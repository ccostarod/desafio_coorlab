<template>
  <router-view />
  <router-view name="anotherComponent" v-if="$route.path !== '/'"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
