<template>
  <div id="cafe" data-app>
    <div class="screen">
      <v-sheet elevation="4" rounded="lg" >
        <v-row class="header">
          <h1 class="title">Café</h1>
          <v-btn 
            elevation="2" 
            color="#FFB800" 
            style="border-radius: 10px; margin: 45px 50px 0px 0;"
            @click="dialog = true"
          >
            Adicionar café
          </v-btn>
        </v-row>

        <v-row class="container-scroll">
          <v-col 
            v-for="i in 5"
            :key="i"
            style="max-width: 210px; max-height: 255px;"
            cols="10"
            sm="4"
          >
            <v-card
              class="event-card mx-auto" 
              max-width="190" 
              max-height="235"
            >
              <v-layout row>
                <v-layout
                  column
                  style="padding: 0.8em;"
                >
                  <v-col class="center" style="height: 20vh; margin-top: 30px; padding: 0;">
                    <h1 class="especie" >Arábica</h1>
                    <h3 class="variedade">Mundo Novo</h3>
                
                    <div style="display: flex; flex-direction: column; justify-content: center; margin: 40px;">
                      <v-btn text small color="transparent">
                          <img src="../assets/img/editar.svg" width="20" style="margin-right: 10px;" alt="icone editar">
                          <h1 class="text-btn">Editar</h1> 
                      </v-btn>

                      <v-btn text small color="transparent">
                          <img src="../assets/img/deletar.svg" width="20" style="margin-right: 10px;" alt="icone deletar">
                          <h1 class="text-btn">Deletar</h1> 
                      </v-btn>
                    </div>
                  </v-col>
                </v-layout>
                
              </v-layout>
            </v-card>
          </v-col>
        </v-row>    
      </v-sheet>
    </div>

    <v-dialog v-model="dialog">
          <v-card>
            <v-toolbar
              color="#331602"
              dark
            >
              <v-toolbar-title style="display: flex; align-items: center; margin: 0 35px;">
                <img width="32px" style="margin-right: 15px" src="../assets/img/icon_cafe.svg"/>
                Novo Café
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="dialog = false"><img width="28px" src="../assets/img/icon_close.svg" /></v-btn>
            </v-toolbar>
            
            <v-col cols="12" sm="6" style="margin: 20px auto;">
              <v-row>
                <v-select
                  outlined
                  label="Especie"
                  v-model="cafe.dsEspecie"
                  :items="arrEspecie"
                  item-text="dsEspecie"
                  item-value="dsEspecie"
                  :rules="[(v) => !!v || '']"
                ></v-select>
              </v-row>
              <v-row>
                <v-select
                  outlined
                  label="Variedade"
                  v-model="cafe.dsVariedade"
                  v-if="cafe.dsEspecie === 'Arábica'"
                  :items="arrArabica"
                  item-text="dsVariedade"
                  item-value="dsVariedade"
                  :rues="[(v) => !!v || '']"
                ></v-select>
                <v-select
                  outlined
                  label="Variedade"
                  v-model="cafe.dsVariedade"
                  v-else
                  :items="arrRobuta"
                  item-text="dsVariedade"
                  item-value="dsVariedade"
                  :rues="[(v) => !!v || '']"
                ></v-select>
              </v-row>
              <v-row>
                <v-checkbox
                  v-model="cafe.dsEspecial"
                  label="Especial"
                  color="#D19700"
                  hide-details
                ></v-checkbox>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="cafe.dsAroma"
                  label="Aroma"
                  single-line
                  outlined
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="cafe.dsSabor"
                  label="Sabor"
                  single-line
                  outlined
                ></v-text-field>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="cafe.dsAcidez"
                  label="Acidez"
                  single-line
                  outlined
                ></v-text-field>
              </v-row>
              <v-row>
                <v-btn
                  elevation="2"
                  color="#FFB800"
                  style="margin: 30px auto 20px auto; max-width: 110px; border-radius: 10px;"
                >
                  Salvar
                </v-btn>
              </v-row>
            </v-col>
          </v-card>
        </v-dialog>
    <Footer></Footer>
  </div>
</template>

<style scoped>
#cafe {
  background-color: #F3F3F3;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.event-card {
  height: 250px;
  max-width: 215px;
  background: #FAE8BB !important;
  border: 1px solid #a08f64 !important;
  margin: 0 auto !important;
}
.especie {
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  color: #331602;
}
.variedade {
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  color: #331602;
  margin-top: 20px;
}
.v-btn:nth-child(2) {
  margin-top: 5px;
}
.text-btn {
  font-size: 0.95rem !important;
  font-weight: 500 !important;
  color: #331602 !important;
}
#cafe .v-card, .v-card .v-sheet {
  margin: 0 !important;
  height: 60vh;
}
.v-list {
  margin: 0 !important;
}
.v-text-field__details {
  display: none;
}
.v-input {
  margin-top: 10px !important;
}
</style>

<script>
import Footer from '../components/Footer';

export default {
  name: "Cafe",
  components: {
    Footer,
  },
  data() {
    return {
      dialog: false,
      cafe: {dsEspecie: '', dsVariedade: ''},
      arrEspecie: ["Robusta ou Conilon", "Arábica"],
      arrRobuta: ["Conilon"],
      arrArabica: ["Mundo Novo", "Bourbon", "Laurina", "Catuaí", "Acaiá", "Topázio", "Icatu", "Caturra",],
    };
  },
};
</script>
