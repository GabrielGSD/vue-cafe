<template>
  <div id="cadastrar">
    <v-col class="cadastrar container-log">
        <div class="logo"><img src="../assets/img/new_logo.svg" width="400" alt="Logo ConectaCafé"></div>
        <v-sheet elevation="4" max-width="450" style="border-radius: 40px">
            <h1 class="title log">Cadastro</h1>
            <v-col cols="12" sm="10" style="margin: 30px auto;"> 
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-row>
                        <v-text-field
                            outlined
                            label="Nome"
                            required
                            v-model="cafeicultor.nome"
                            :rules="[requiredRules]"
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            outlined
                            label="CPF"
                            type="text" 
                            required
                            v-mask="mask.cpf"
                            :rules="[requiredRules, cpfRules]"
                            v-model="cafeicultor.cpf" 
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            outlined
                            label="Telefone"
                            type="tel" 
                            required
                            :rules="[requiredRules, telRules]"
                            v-mask="mask.telefone"
                            v-model="cafeicultor.telefone"
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            outlined
                            label="Email"
                            type="email"
                            required
                            :rules="[requiredRules, emailRules]"
                            v-model="cafeicultor.email" 
                        ></v-text-field>
                    </v-row>

                    <v-row class="margin-bot">
                        <v-text-field
                            outlined
                            label="Senha"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[requiredRules]"
                            required
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            v-model="cafeicultor.senha" 
                        ></v-text-field>
                    </v-row>
                    
                    <v-row class="margin-bot"> 
                        <v-btn @click="cadastrar()" width="100%" color="#FFB800" rounded>
                            Cadastrar
                        </v-btn>
                    </v-row>
                </v-form>

                <v-row>
                    <router-link to="/entrar" class="txt-btn"><span>Já possui uma conta? Clique aqui.</span></router-link>
                </v-row>
            </v-col>
        </v-sheet>

        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            :color="alert"
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
        </v-snackbar>

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
import Fazenda from '../service/fazenda'

export default {
  name: "Cadastrar",
  components: {
    Footer,
  },
  data() {
    return {
        cafeicultor: {nome: '', cpf: '', telefone: '', email: '', senha: ''},
        mask: {cpf: '###.###.###-##', telefone: "(##) # ####-####",},
        valid: true,
        snackbar: false,
        alert: '#4caf50',
        text: '',
        timeout: 3000,
        show1: false,
        emailRules: v => /.+@.+/.test(v) || 'Entre com um e-mail válido',
        telRules: value => (value || '').length >= 16 || 'Entre com um telefone válido',
        cpfRules: value => (value || '').length >= 14 || 'Entre com um CPF válido',
        requiredRules: value => !!value || 'Obrigatório.',
    };
  },
  mounted() {
      this.limparCampos()
  },
  methods: {
        cadastrar() {
            console.log(this.cafeicultor)

            for(var item in this.cafeicultor) {
                if(this.cafeicultor[item] == ''){
                    console.log("HERE", item)
                    this.error()
                    return
                }
            }

            Fazenda.cadastrarUser(this.cafeicultor)
                .then(() => {
                    this.success()
                    //Fazer o alerta certo para encaminhar para a pag login
                })
                .catch(function() {
                    this.error()
                })
        },
        success() {
            this.limparCampos()
            this.text = "Cadastro realizado com sucesso!"
            this.alert = '#4caf50'
            this.snackbar = true;
            setTimeout(() => {  this.$router.push('/entrar') }, this.timeout);
            
        },

        error() {
            this.limparCampos()
            this.text = "Erro ao realizar cadastro!"
            this.alert = '#ff5252'
            this.snackbar = true;   
        },

        limparCampos(){ 
            for(var item in this.cafeicultor) {
                this.cafeicultor[item] = ''
            }
        }
  }
  
};
</script>
