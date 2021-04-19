<template>
  <div id="entrar">
    <v-col class="entrar">
        <div class="grid grid-template-areas">
            <div class="logo"><img src="../assets/img/logo.svg" width="400" alt="Logo Shortens Coffe"></div>
            <div class="nav"></div>
            <div class="divider"></div>
            <!-- <div class="box">
                <img src="../assets/img/box.svg" style="height:75vh" alt="">
                <h1>ENTRAR</h1>
            </div> -->
            <div class="box">
                <v-card>
                    <h1>Entrar</h1>
                </v-card>
            </div>
            <div class="sidenav"></div>
            <div class="advert"></div>
            <div class="item1"></div>
            <!-- <v-card class="box"></v-card>
            <div class="space"></div>
            <div class="space2"></div> -->
        </div>

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
    background-image: url("../assets/img/bgCafe.jpg");
    background-size: cover;
    height: calc(100vh - 65px);
}

.logo {
	grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav {
	grid-area: nav;
}

.box {
	grid-area: box;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box .v-card {
    background-image: url("../assets/img/bgCafe.jpg");
    background-repeat: no-repeat;
    height: 75vh;
    width: 40vw;
    border-radius: 50px;
}
.box h1 {
    text-align: center;
    color: #fff;
    margin-top: 55px;
    font-size: 48px;
    font-weight: 400;
}

.sidenav {
	grid-area: sidenav;
}

.advert {
	grid-area: advert;
}

.divider {
    grid-area: divider;
    border: 2px solid #fff;
    border-radius: 5px;
}

.item1 {
    grid-area: item1;
}

.grid-template-areas {
    grid-template-columns: 5% 1fr 2px 1fr 5%;
	grid-template-rows: 3vh 1fr 3vh;
	grid-template-areas:
		"sidenav nav nav nav nav"
		"sidenav logo divider box advert"
		"item1 item1 item1 item1 item1"
		;
}

</style>

<script>
import Footer from '../components/Footer';

export default {
  name: "Entrar",
  components: {
    Footer,
  },
  data() {
    return {};
  },
};
</script>
