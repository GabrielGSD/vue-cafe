<template>
  <div class="home" data-app>
    <div class="banner">
      <div class="ContBanner">
        <h1>Sua nova maneira de comercializar café</h1>
        <p>
          Pela nossa plataforma, voce pode negociar sua produção, com
          transparência, agilidade e segurança que o mercado merece.
        </p>
        <v-btn @click="dialog = true" rounded color="#ffb800">Saiba mais</v-btn>
      </div>
    </div>

    <!-- QUEM SOMOS -->
    <div class="info">
      <div class="title">
        <h1>Quem Somos</h1>
        <v-divider></v-divider>
      </div>
      <p>A ideia da plataforma surgiu durante um trabalho da disciplina de Conceitos e Tecnologias para Dispositivos Conectados	do curso de Engenharia da Computação na faculdade Inatel. Tanto o integrante Gabriel de Souza quanto o Moises Delmoro, possuem familiares produtores de café, com isso, se viu a necessidade da criação de uma plataforma para facilitar a comercialização do fruto de maneira rápida, ágil e fácil.</p>
    </div>

    <!-- PARA QUEM É A PLATAFORMA -->
    <div class="info_2">
      <div class="info">
        <div class="title">
          <h1>Para quem é a plataforma ?</h1>
          <v-divider></v-divider>
        </div>
        <v-row style="margin-top: 50px; padding-bottom: 45px; display: flex; justify-content:space-between;">
          <v-card
            elevation="3"
            width="230"
            height="395"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <div class="polygon">
              <h1>Produtores</h1>
            </div>
            <p class="explicacao">Através de uma plataforma pensada na comercialização de grãos de café, o produtor cria o perfil de sua fazenda e pode se conectar com diversos perfis de compradores de maneira rápida, ágil e fácil.</p>
          </v-card>

          <v-card
            elevation="3"
            width="230"
            height="395"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <div class="polygon">
              <h1>Corretores</h1>
            </div>
            <p class="explicacao">Ter acesso a diferentes produtores de café, com todas as informações necessárias para uma negociação, faz com que o corretor auxilie seus clientes no fechamento de excelente negócios.</p>
          </v-card>

          <v-card
            elevation="3"
            width="230"
            height="395"
            style="display: flex; flex-direction: column; align-items: center;"
          >
            <div class="polygon">
              <h1>Compradores</h1>
            </div>
            <p class="explicacao">Dar ao comprador final, total facilidade na hora da compra é a missão da nossa plataforma. Acessando diferentes fazendas, o comprador escolhe de maneira fácil e detalhada, o fruto no qual melhor o agrada. Após isso, basta entrar em contato com o produtor e negociar.</p>
          </v-card>
        </v-row>
      </div>
    </div>

    <!-- CONHECER MAIS -->
    <div class="conhecer">
      <div class="info" style="display: flex; flex-direction: column; align-items: center;">
        <div class="title">
          <h1 style="color: #fff;">Gostaria de conhecer mais ?</h1>
          <v-divider></v-divider>
        </div>
        <p style="text-align: center; font-weight: 400; color: #fff;">Basta se cadastrar na plataforma e aproveitar.</p>
        <v-btn rounded color="#ffb800" style="margin: 45px 0 70px 0px;" @click="$router.push('cadastrar')">Cadastrar</v-btn>
      </div>
    </div>

    <!-- FOOTER -->
    <Footer></Footer>
  </div>
</template>

<style>
.conhecer {
  background-image: url("../assets/img/ConhecerMais.jpg");
  background-size: cover;
}
.polygon {
  background-image: url("../assets/img/Polygon.svg");
  background-repeat: no-repeat;
  width: 168px;
  height: 193px;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
}
.explicacao {
  width: 208px; 
  font-size: 14px !important; 
  font-weight: 500; 
  color: rgb(71 45 15) !important; 
  text-align: center !important; 
  margin-top: 10px !important; 
}
.polygon h1 {
  color: #fff;
  font-size: 24px;
}
.banner {
  background-image: url("../assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 612px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ContBanner {
  text-align: center;
  width: 870px;
  color: #fff;
  font-size: 24px;
}
.ContBanner h1 {
  color: #ffb800;
  font-size: 48px;
  margin-bottom: 25px;
}
.home .v-btn {
  margin-top: 105px;
  width: 200px;
  height: 50px !important;
  text-transform: none;
  font-weight: 600;
  font-size: 18px !important;
}
.info{
  max-width: 770px;
  margin: 0 auto;
  padding-top: 45px;
}
.info p{
  font-size: 18px;
  margin-top: 50px;
  text-align: justify;
  color: #331602;
}
.info_2 {
  margin-top: 45px;
  background-color: #F3F3F3;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title h1{
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #331602;
}
.title .v-divider{
  width: 166px;
  border: 3px solid #D19700;
  border-radius: 4px;
  margin-top: 10px;
}

</style>

<script>
import Footer from '../components/Footer';

export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
