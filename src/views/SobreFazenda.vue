<template>
  <div class="SobreFazenda" data-app>
    <div class="banner-sobre">
      <div class="boxFazenda">
        <div class="titleSobreFazenda"><h1>{{fazenda.nome}}</h1></div>
        <v-row><img src="../assets/img/fazenda-ex.jpg" style="width: 23vw; border-radius: 25px; margin: 40px auto; margin-top: 90px" alt="Foto da fazenda"></v-row>
      </div>
    </div>

    <div class="info-fazenda boxFazenda">
      <div class="titleSobreFazenda">
        <h1>História</h1>
      </div>
      <p>A ideia da plataforma surgiu durante um trabalho da disciplina de Conceitos e Tecnologias para Dispositivos Conectados	do curso de Engenharia da Computação na faculdade Inatel. Tanto o integrante Gabriel de Souza quanto o Moises Delmoro, possuem familiares produtores de café, com isso, se viu a necessidade da criação de uma plataforma para facilitar a comercialização do fruto de maneira rápida, ágil e fácil.</p>
    </div>

    <div class="info-fazenda boxFazenda">
      <div class="titleSobreFazenda">
        <h1>Café</h1>
      </div>
      <div class="table">
        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Origem:</p>
          </v-col>
          <v-col>
            <p>Montanhas do Espirito Santo</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Espécie:</p>
          </v-col>
          <v-col>
            <p>Arábica</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Variedade:</p>
          </v-col>
          <v-col>
            <p>Conilon</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Altitude:</p>
          </v-col>
          <v-col>
            <p>1300 m</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Fertilizantes:</p>
          </v-col>
          <v-col>
            <p>Natural</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Inseticidas:</p>
          </v-col>
          <v-col>
            <p>Nenhum</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Aroma:</p>
          </v-col>
          <v-col>
            <p>Frutado</p>
          </v-col>
        </v-row>

        <v-row class="line-bottom">
          <v-col cols="12" md="4">
            <p class="title">Sabor:</p>
          </v-col>
          <v-col>
            <p>Frutas vermelhas</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <p class="title">Acidez:</p>
          </v-col>
          <v-col>
            <p>35%</p>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="info-fazenda boxFazenda" style="padding-top: 60px; padding-bottom: 40px;">
      <div class="titleSobreFazenda">
        <h1>Contato</h1>
      </div>
      <v-row style="height: 35px; justify-content: center;">
        <v-col cols="12" md="4" class="contato">
          <img src="../assets/img/phone.svg" alt="Icone telefone">
          <p>{{fazenda.telefone}}</p>
        </v-col>
        <v-col cols="12" md="4" class="contato">
          <img src="../assets/img/email.svg" alt="Icone Email">
          <p>{{fazenda.email}}</p>
        </v-col>
      </v-row>

      <v-row style="height: 35px; margin-top: 20px; justify-content: center;" v-if="fazenda.facebook != null || fazenda.instagram != null">
        <v-col cols="12" md="4" class="contato" @click="openLink(fazenda.facebook)" v-if="fazenda.facebook != null">
          <img src="../assets/img/facebook.svg" alt="Icone Facebook">
          <p>Facebook</p>
        </v-col>
        <v-col cols="12" md="4" class="contato" @click="openLink(fazenda.instagram)" v-if="fazenda.instagram != null">
          <img src="../assets/img/instagram.svg" alt="Icone Instagram">
          <p>Instagram</p>
        </v-col>
      </v-row>
    </div>

    <div class="info-fazenda boxFazenda" style="padding-top: 60px; padding-bottom: 40px;">
      <div class="titleSobreFazenda">
        <h1>Localização</h1>
      </div>
      <v-row style="height: 35px; justify-content: center;">
        <v-col class="contato" cols="12" md="5">
          <p class="local">Cidade:</p>
          <p>{{fazenda.cidade}}</p>
        </v-col>
        <v-col class="contato" cols="12" md="4">
          <p class="local">CEP:</p>
          <p>{{fazenda.cep}}</p>
        </v-col>
      </v-row>

      <v-row style="height: 35px; margin-top: 20px; justify-content: center;">
        <v-col class="contato" cols="12" md="5">
          <p class="local">Rua:</p>
          <p>{{fazenda.rua}}</p>
        </v-col>
        <v-col class="contato" cols="12" md="4">
          <p class="local">Bairro:</p>
          <p>{{fazenda.bairro}}</p>
        </v-col>
      </v-row>
    </div>

    <!-- FOOTER -->
    <Footer style="margin-top: 60px"></Footer>
  </div>
</template>


<style>
.local {
  width: 55px !important;
  font-weight: bold;
}
.contato {
  display: flex; 
  flex-direction: row;  
  align-items: center;
  justify-content: center;
}
.contato p {
  margin: 0 !important;
  margin-left: 10px !important;
}
.line-bottom {
  border-bottom: 1px solid #593C34;
}
.table {
  width: 60%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 30px;
}
.table p {
  margin: 0 !important;
}
.table .title {
  font-weight: bold;
  margin-left: 10px !important;
}
.banner-sobre {
  height: 63vh;
  display: flex;
  align-items: flex-end;
}
.info-fazenda{
  margin: 0 auto;
}
.info-fazenda p{
  font-size: 1rem;
  width: 80%;
  margin: 30px auto;
  margin-top: 60px;
  text-align: justify;
  color: #593C34;
}
.boxFazenda {
    background: #FFFFFF;
    border: 1px solid #CBA38A;
    box-sizing: border-box;
    box-shadow: 0px 10px 23px rgba(0, 0, 0, 0.12);
    border-radius: 50px 0px;
    width: 60vw;
    margin: 0 auto;
    margin-top: 75px;
    position: relative;
}
.titleSobreFazenda {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    background: #FFF6DF;
    border: 1px solid #CBA38A;
    box-shadow: 0px 10px 23px rgb(0 0 0 / 12%);
    border-radius: 20px 0px;
    width: 25vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
.titleSobreFazenda h1 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 42px;
    text-align: center;
    color: #815345;
}
.scroll {
    width: 95vw;
    max-height: 90vh;
    margin: 50px auto;
    margin-top: 100px !important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
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
      fazenda: {},
    };
  },
  mounted() {
      this.fazenda = JSON.parse(localStorage.getItem("fazendaSelected"))
      console.log(this.fazenda)
  },
  methods: {
      openLink(link) {
        window.open(link);
      }
  }
};
</script>
