<template>
  <div id="cadastrar">
    <v-col class="cadastrar container-log">
        <div class="logo"><img src="../assets/img/new_logo.svg" width="400" alt="Logo ConectaCafé"></div>
        <v-sheet elevation="4" max-width="450" style="border-radius: 40px">
            <h1 class="title log">Cadastro</h1>
            <v-col cols="12" sm="10" style="margin: 30px auto;">
                <v-row>
                    <v-text-field
                        outlined
                        label="Nome"
                        v-model="nome" 
                    ></v-text-field>
                </v-row>

                <v-row>
                    <v-text-field
                        outlined
                        label="CPF"
                        v-model="cpf" 
                    ></v-text-field>
                </v-row>

                <v-row>
                    <v-text-field
                        outlined
                        label="Telefone"
                        v-model="telenone" 
                    ></v-text-field>
                </v-row>

                <v-row>
                    <v-text-field
                        outlined
                        label="Email"
                        v-model="email" 
                    ></v-text-field>
                </v-row>

                <v-row class="margin-bot">
                    <v-text-field
                        outlined
                        label="Senha"
                        v-model="senha" 
                    ></v-text-field>
                </v-row>

                <v-row class="margin-bot"> 
                    <v-btn width="100%" color="#FFB800" rounded>
                        Cadastrar
                    </v-btn>
                </v-row>

                <v-row>
                    <router-link to="/entrar" class="txt-btn"><span>Já possui uma conta? Clique aqui.</span></router-link>
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
.cadastrar {
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

export default {
  name: "Cadastrar",
  components: {
    Footer,
  },
  data() {
    return {};
  },
};
</script>
