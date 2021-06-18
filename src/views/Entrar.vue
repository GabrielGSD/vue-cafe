<template>
  <div id="entrar">
    <v-col class="entrar container-log">
        <div class="logo"><img src="../assets/img/new_logo.svg" width="400" alt="Logo ConectaCafé"></div>
        <v-sheet elevation="4" max-width="450" style="border-radius: 40px">
            <h1 class="title log">Entrar</h1>
            <v-col cols="12" sm="9" style="margin: 30px auto;">
                <v-row>
                    <v-text-field
                        outlined
                        label="Email"
                        v-model="user.email" 
                    ></v-text-field>
                </v-row>

                <v-row class="margin-bot">
                    <v-text-field
                        outlined
                        label="Senha"
                        v-model="user.senha" 
                    ></v-text-field>
                </v-row>

                <v-row class="margin-bot"> 
                    <v-btn @click="login()" width="100%" color="#FFB800" rounded>
                        Entrar
                    </v-btn>
                </v-row>

                <v-row style="margin-bottom: 15px;">
                    <span class="txt-btn">Esqueceu a senha?</span>
                </v-row>
                <v-row>
                    <router-link to="/cadastrar" class="txt-btn"><span>Não tem uma conta? Clique aqui.</span></router-link>
                </v-row>
            </v-col>
        </v-sheet>
    </v-col>

    <Footer></Footer>
  </div>
</template>

<style>
.grid {
	display: grid;
    width: 100%;
    height: 80vh;
    margin-top: 70px;
}
.entrar {
    background-image: url("../assets/img/new_bg.png");
    background-size: cover;
    height: calc(100vh - 65px);
}

.logo {
	grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>

<script>
import Footer from '../components/Footer';
import Fazenda from '../service/fazenda'

export default {
  name: "Entrar",
  components: {
    Footer,
  },
  data() {
    return {
        user: {email: '', senha: ''}
    };
  },
  methods: {
    login() {  
        Fazenda.loginUser(this.user.email)
            .then(resposta => {
                if(resposta.data.email == this.user.email && resposta.data.senha == this.user.senha) {
                    localStorage.setItem("isLogged", true);
                    localStorage.setItem("idUser", resposta.data.cafeicultorId);
                    this.$isLogged = 'asdas';
                    console.log(this.$isLogged);
                    alert("Logado com sucesso")
                }
            }) 
            .catch(function() {
                alert("Erro ao efetuar login!")
            })
    },
    getData() {
        Fazenda.listarFazenda().then(resposta => {
            localStorage.setItem("dados", resposta);
        })
    },
  }
};
</script>
