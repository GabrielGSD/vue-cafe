<template>
  <div id="catalogo" data-app>
    <div class="screen">
      <v-sheet elevation="4" rounded="lg" >
        <v-row class="header" style="align-items: flex-end;">
          <h1 class="title">Catálogo</h1>
          <v-col
            md="4"
            style="padding: 0; margin-left: 5vw"
          >
            <v-text-field
              single-line
              solo
              label="Pesquisar"
              append-icon="mdi-magnify"
              class="pesquisar"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="container-scroll">
          <v-col 
            v-for="i in 5"
            :key="i"
            style="max-width: 270px; max-height: 370px;"
            cols="10"
            sm="4"
          >
            <v-card
              class="event-card mx-auto" 
              max-width="250" 
              max-height="350"
            >
              <v-layout row>
                <v-layout
                  column
                  style="padding: 0.8em; padding-top: 0; position: relative;"
                >
                  <img style="height: 165px; width: 18.4vw; max-width: 248px; border-radius: 5px;" src="../assets/img/fazenda-ex.jpg" alt="Foto da fazenda">
                  <v-col>
                    <h1 style="font-size: 14px;">Fazenda São Sebastião</h1>
                    <v-rating
                      v-model="rating"
                      color="#FFB800"
                      background-color="#FFB800"
                      empty-icon="$ratingEmpty"
                      half-increments
                      hover
                      large
                    ></v-rating>
                    <v-row style="margin: 0 auto;">
                      <v-chip v-for="i in 3" :key="i">Arábica {{ i }}</v-chip>
                    </v-row>
                    <v-row style="justify-content: flex-end; margin-right: 5px">
                      <v-btn small color="#FFB800">
                        Ver mais
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-layout>
                
              </v-layout>
            </v-card>
          </v-col>
        </v-row>    
      </v-sheet>
    </div>
    <Footer></Footer>
  </div>
</template>

<style>
#catalogo {
  background-color: #F3F3F3;
}

.pesquisar {
  border-radius: 30px;
}

.pesquisar .v-input__slot {
  background: #ECECEC !important;
}

#catalogo .v-text-field__details {
  display: none;
}

#catalogo .event-card {
  border: 1px solid rgba(169, 167, 167, 0.25) !important;
}

#catalogo .v-rating .v-icon {
  font-size: 20px !important;
  padding: 0 !important;
}

#catalogo .event-card {
  margin-top: 0 !important;
}

#catalogo .v-rating {
  margin: 7px 0;
}

#catalogo .v-chip {
  background: #FAE8BB;
  margin-bottom: 5px;
  font-size: .8rem;
  font-weight: 500;
  margin-right: 1vw;
}

</style>

<script>
import Footer from '../components/Footer';

export default {
  name: "Catalogo",
  components: {
    Footer,
  },
  data() {
    return {
      rating: 4.5,
    };
  },
};
</script>
