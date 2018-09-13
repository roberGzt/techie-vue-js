<template>
  <div class="main-container">
    <h1>{{ msg }}</h1>
    <button class="boton" v-on:click="mostrarMensaje">{{ textoBoton }}</button>
    <p class="mensaje">Este Mensaje no deber&iacute;a estar visible todo el tiempo.</p>
  </div>
</template>

<script>
import { Logger } from "./../js/logger";
export default {
  name: "MainContainer",
  props: {
    msg: String,
    textoBoton: String
  },
  methods: {
    mostrarMensaje: function() {
      Logger.log("Boton Clickeado");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
