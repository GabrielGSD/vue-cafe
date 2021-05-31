<template>
    <div id="nav">
      <div class="content">
        <img
          src="../assets/img/logoWhite.svg"
          height="50"
          alt="Logo Shortens Coffe"
        />
        <div class="tabs">
          <router-link to="/">Home</router-link>
          <router-link to="/fazenda">Fazenda</router-link>
          <router-link to="/cafe">Café</router-link>
          <router-link to="/catalogo">Catálogo</router-link>
          <router-link to="/entrar">Entrar</router-link>
          <router-link to="/cadastrar">Cadastrar</router-link>
        </div>
      </div>
    </div>
</template>

<style>
#nav {
  background-color: rgba(30, 13, 0);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  position: absolute;
  z-index: 9999;
}
.content {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabs a {
  color: white;
  margin-right: 26px;
  text-decoration: none;
  font-size: 18px;
}
</style>

<script>

export default {
  name: "Nav",
  computed: {}
}
</script>