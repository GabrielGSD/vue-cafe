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
            @click="limparCampos(), dialog = true"
          >
            Adicionar café
          </v-btn>
        </v-row>

        <v-row class="container-scroll">
          <v-col 
            v-for="(i) in this.arrCafesFilter"
            :key="i.cafeId"
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
                    <h1 class="especie" >{{i.especie}}</h1>
                    <h3 class="variedade">{{i.variedade}}</h3>
                
                    <div style="display: flex; flex-direction: column; justify-content: center; margin: 40px;">
                      <v-btn text small color="transparent" @click="openEdit(i)">
                          <img src="../assets/img/editar.svg" width="20" style="margin-right: 10px;" alt="icone editar">
                          <h1 class="text-btn">Editar</h1> 
                      </v-btn>

                      <v-btn text small color="transparent" @click="deleteCafe(i)">
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
            <div class="cont-scroll">
              <v-col cols="12" sm="10" style="margin: 0 auto;">
                <v-row>
                  <v-select
                    outlined
                    label="Especie"
                    v-model="cafe.especie"
                    :items="arrEspecie"
                    item-text="especie"
                    item-value="especie"
                    :rules="[(v) => !!v || '']"
                  ></v-select>
                </v-row>
                <v-row>
                  <v-select
                    outlined
                    label="Variedade"
                    v-model="cafe.variedade"
                    v-if="cafe.especie === 'Arábica'"
                    :items="arrArabica"
                    item-text="variedade"
                    item-value="variedade"
                    :rues="[(v) => !!v || '']"
                  ></v-select>
                  <v-select
                    outlined
                    label="Variedade"
                    v-model="cafe.variedade"
                    v-else
                    :items="arrRobuta"
                    item-text="variedade"
                    item-value="variedade"
                    :rues="[(v) => !!v || '']"
                  ></v-select>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="cafe.altitude"
                    label="Altitude"
                    suffix="m"
                    single-line
                    outlined
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="cafe.inseticidas" 
                    label="Inseticidas"
                    single-line
                    outlined
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="cafe.fertilizantes"
                    label="Fertilizantes"
                    single-line
                    outlined
                  ></v-text-field>
                </v-row>
                <v-row>
                  <v-checkbox
                    v-model="cafe.especial"
                    label="Especial"
                    color="#D19700"
                    hide-details
                  ></v-checkbox>
                </v-row>
                <div v-if="cafe.especial == true">
                  <v-row>
                    <v-text-field
                      v-model="cafe.aroma" 
                      label="Aroma"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="cafe.sabor"
                      label="Sabor"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="cafe.acidez" 
                      label="Acidez"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-row>
                </div>
              </v-col>
            </div>
            <v-row>
              <v-btn
              elevation="2"
              color="#FFB800"
              style="margin: 30px auto 20px auto; max-width: 110px; border-radius: 10px;"
              @click="addCafe()"
              >
                Salvar
              </v-btn>
            </v-row>
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
  height: 70vh;
}
.v-list {
  margin: 0 !important;
}
.v-input {
  margin-top: 10px !important;
}

.cont-scroll {
  min-height: 270px;
  max-height: 50vh;
  overflow-y: auto;
  margin: 0px 5vw;
  margin-top: 30px !important;
}
.v-text-field__details {
  display: none;
}
</style>

<script>
import Footer from '../components/Footer';
import Fazenda from '../service/fazenda'

export default {
  name: "Cafe",
  components: {
    Footer,
  },
  data() {
    return {
      dialog: false,
      cafe: {especie: '', variedade: '', altitude: '', inseticidas: '', fertilizantes: '', especial: false, aroma: '', sabor: '', acidez: '', sitio: {sitioFazendaId:null}},
      testCafe: { especie: 'Arábica', variedade: 'conilon', especial: true, aroma: 'Frutado', sabor: 'laranja', acidez: 'alto', altitude: 'Muito alto',
      inseticidas: 'Varios', fertilizantes: 'Organicos', sitio: {sitioFazendaId:5} },       
      arrEspecie: ["Conilon", "Arábica"],
      arrRobuta: ["Conilon"],
      arrArabica: ["Mundo Novo", "Bourbon", "Laurina", "Catuaí", "Acaiá", "Topázio", "Icatu", "Caturra",],
      arrCafes: [],
      arrCafesFilter: [],
      fazendaId: null,
      editIsOpen: false,
      editCafeId: null,
    };
  },
  mounted() {
    this.getCafe()
  },
  methods: {
    async addCafe() {
      if(!this.editIsOpen) {
        await Fazenda.listarFazendaCafeicultor(this.getUser())
          .then(resposta => {
            if(resposta.data != '') {
              this.cafe.sitio.sitioFazendaId = resposta.data.sitioFazendaId
              Fazenda.addCafe(this.cafe).then(resposta => {
                alert("Salvo com sucesso!", resposta);
                this.dialog = false
                document.location.reload(true)
                //Fazer o alerta certo
              })
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      else {
        this.putCafe(this.cafe)
      }
    },
    getUser(){
      const user = JSON.parse(localStorage.getItem("idUser"))
      return user
    },
    limparCampos(){ 
      for(var item in this.cafe) {
        if(item != 'sitio')
          this.cafe[item] = ''
      }
    },
    async getCafe(){
      await Fazenda.listarCafe()
      .then(resposta => {
        this.arrCafes = resposta.data
        this.search()
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    async search() {
      await Fazenda.listarFazendaCafeicultor(this.getUser())
        .then(resposta => {
          this.fazendaId = resposta.data.sitioFazendaId
        })
        .catch(function (error) {
          console.log(error);
        })

        for(var item in this.arrCafes) {
          if(this.arrCafes[item].sitio.sitioFazendaId == this.fazendaId)
            this.arrCafesFilter.push(this.arrCafes[item])
        }
    },
    openEdit(cafe){
      this.dialog = true
      this.editIsOpen = true
      this.editCafeId = cafe.cafeId
      for(var item in this.cafe){
        this.cafe[item] = cafe[item]
          
      }
    },
    putCafe(cafe){

      cafe["cafeId"] = this.editCafeId
      Fazenda.atualizaCafe(this.editCafeId, cafe)
        .then(() => {
          this.dialog = false
          alert("Café editado com sucesso!")
          document.location.reload(true)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    deleteCafe(cafe){
      Fazenda.deleteCafe(cafe.cafeId)
        .then(() => {
          alert("Café deletado com sucesso!")
          document.location.reload(true)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
};
</script>
