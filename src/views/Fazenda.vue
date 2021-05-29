<template>
  <div id="fazenda">
    <div class="screen">
        <v-card elevation="3">
            <v-card-title style="margin: 25px 0 0 25px;">Fazenda</v-card-title>

            <v-card-text>
                <v-row
                    class="tab-fazenda mx-0" 
                >
                    <span v-bind:class="{ 'filled': isActive.sobre}">Sobre</span>
                    <span v-bind:class="{ 'filled': isActive.midia}">Mídia</span>
                    <span v-bind:class="{ 'filled': isActive.local}">Localização</span>
                    <span v-bind:class="{ 'filled': isActive.alt}">Altitude</span>
                    <span v-bind:class="{ 'filled': isActive.cont}">Contato</span>
                </v-row>
                
                <v-divider></v-divider>

                <v-col cols="12" md="7" style="margin: 0 auto; max-hei">
                    <div class="contents">
                        <v-row style="margin: 10px 0;">
                            <h1>Sobre</h1>
                        </v-row>

                        <v-row>
                            <v-textarea
                                outlined
                                name="input-7-4"
                            ></v-textarea>
                        </v-row>
                    </div>

                    <v-row>
                        <v-btn
                            elevation="2"
                            color="#FFB800"
                            style="margin: 0 auto;"
                        >
                            Salvar
                        </v-btn>
                    </v-row>
                </v-col>
            </v-card-text>
      </v-card>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>

#fazenda {
    background-color: #F3F3F3;
}

.screen {
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
}

.v-card {
    width: 80vw;
    margin: 15vh;
}

.v-card__title {
    font-size: 2.25rem;
    font-weight: 600;
    color: #331602;
}

.tab-fazenda {
    justify-content: space-evenly;
    width: 65%;
    margin: 0 auto;
    margin-top: 30px;
}

.tab-fazenda span {
    color: #331602;
    font-size: 1.2rem;
    font-weight: 500;
}

.filled {
    color: #9F3508 !important;
}

.v-divider {
    border-width: 1px !important;
    width: 60% !important;
    border-color: #9F3508 !important;
    margin: 20px auto !important;
}

.contents h1 {
    color: #331602;
    font-size: 1rem;
    font-weight: 500;
}

textarea, .v-input_slot {
    max-height: 20vh;
}

</style>

<script>
import Footer from '../components/Footer';

export default {
  name: "Fazenda",
  components: {
    Footer,
  },
  data() {
    return {
        isActive: {
            sobre: false, midia: false, local: false, alt: false, cont: false
        },
    };
  },
};
</script>
