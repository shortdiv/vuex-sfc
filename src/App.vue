<template>
  <div id="app">
    <VendingMachineAdmin />
  </div>
</template>

<script>
import VendingMachineAdmin from "./components/VendingMachineAdmin";

export default {
  name: "App",
  components: {
    VendingMachineAdmin
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #333;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  justify-content: center;
}
</style>
