<template>
    <div id="nav">
      <div class="content">
        <img
          src="../assets/img/new_logo_2.svg"
          height="50"
          alt="Logo Shortens Coffe"
        />

        <div class="tabs">
          <div @click="checkLogged()"><router-link to="/" >Home</router-link></div>
          <div v-if="isLogged"><router-link to="/fazenda">Fazenda</router-link></div>
          <div v-if="isLogged"><router-link to="/cafe">Café</router-link></div>
          <div @click="checkLogged()"><router-link to="/catalogo">Catálogo</router-link></div>
          <div @click="checkLogged()"><router-link to="/entrar">Entrar</router-link></div>
          <div @click="checkLogged()"><router-link to="/cadastrar">Cadastrar</router-link></div>
        </div>
      </div>
    </div>
</template>

<style scoped>
#nav {
  background-color: rgba(30, 13, 0);
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  position: absolute;
  z-index: 999;
}
.content {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav .tabs {
  display: flex;

}

.tabs a {
  color: white;
  margin-right: 26px;
  text-decoration: none;
  font-size: 18px;
}
</style>

<script>

//$router.history.current['path']
//this.$router.history.current['path']

//Usar o watch

export default {
  name: "Nav",
  computed: {},
  data() {
    return {
        user: {email: '', senha: ''},
        isLogged: false,
    };
  },
  mounted() {
    this.isLogged = localStorage.getItem("isLogged")
    this.checkLogged()
  },
  methods: {
    checkLogged(){
      if(localStorage.getItem('isLogged') == 'false')
        this.isLogged = false
      else 
        this.isLogged = true
    }
  }
};
</script>