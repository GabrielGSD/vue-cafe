<template>
  <div id="fazenda">
    <div class="screen">
        <v-sheet elevation="4" rounded="lg" >
            <v-row class="header">
                <h1 class="title">Fazenda</h1>
                
            </v-row>
            
            <v-card-text>
                <v-row
                    class="tab tab-fazenda mx-0" 
                >
                    <span @click="selected = 0" v-bind:class="{ 'filled': isActive.sobre, 'border_sel' : selected==0}">Sobre</span>
                    <span @click="selected = 1" v-bind:class="{ 'filled': isActive.midia, 'border_sel' : selected==1}">Mídia</span>
                    <span @click="selected = 2" v-bind:class="{ 'filled': isActive.local, 'border_sel' : selected==2}">Localização</span>
                    <!-- <span @click="selected = 3" v-bind:class="{ 'filled': isActive.alt, 'border_sel' : selected==3}">Altitude</span> -->
                    <span @click="selected = 4" v-bind:class="{ 'filled': isActive.cont, 'border_sel' : selected==4}">Contato</span>
                </v-row>

                <v-row class="container-scroll" style="margin-top: 15px !important; margin-bottom: 0 !important; max-height: 46vh !important;">
                    <v-col cols="12" md="8" style="margin: 0 auto;">
                        <div class="contents" v-if="selected == 0">
                            <v-row style="margin: 10px 0;">
                                <h1 class="nome-func">Sobre</h1>
                            </v-row>

                            <v-row style="display: flex; flex-direction: column; margin-bottom: 20px;">
                                <h1>Nome da fazenda</h1>
                                <v-text-field
                                    outlined
                                    v-model="fazenda.nome" 
                                ></v-text-field>
                            </v-row>

                            <v-row>
                                <v-textarea
                                    outlined
                                    name="input-7-4"
                                    placeholder="Conte-nos um pouco sobre a história de sua fazenda."
                                    v-model="fazenda.sobreHistoria"
                                ></v-textarea>
                            </v-row>
                        </div>

                        <div class="contents" v-if="selected == 1">
                            <v-row style="margin: 10px 0;">
                                <h1 class="nome-func">Mídia</h1>
                            </v-row>

                            <v-row>
                                <vue-dropzone :id="dropzone"  :useCustomSlot=true ref="imgDropzone" :options="dropzoneOptions" @vdropzone-complete="afterComplete">
                                    <div class="dropzone-custom-content">
                                        <h3>Arraste para adicionar uma nova foto</h3>
                                        <p><span>ou</span></p>
                                        <v-btn color="#ececec" style="color: #331602">Procure aqui</v-btn>
                                    </div>
                                </vue-dropzone>

                                <div v-if="images.length > 0" class="img-show">
                                    <div v-for="image in images" :key="image.src">
                                        <img :src="image.src" alt="">
                                    </div>
                                </div>
                            </v-row>
                        </div>

                        <div class="contents" v-if="selected == 2">
                            <v-row style="margin: 10px 0;">
                                <h1 class="nome-func">Localização</h1>
                            </v-row>
                            <v-col cols="12" sm="10" md="10" style="margin: 0 auto;">
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Cidade</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.cidade"
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>CEP</h1>
                                    <v-text-field
                                        outlined
                                         v-model="fazenda.cep"
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Rua</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.rua"
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Bairro</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.bairro"
                                    ></v-text-field>
                                </v-row>
                            </v-col>     
                            
                        </div>

                        <div class="contents" v-if="selected == 4">
                            <v-row style="margin: 10px 0;">
                                <h1 class="nome-func">Contato</h1>
                            </v-row>

                            <v-col cols="12" sm="10" md="10" style="margin: 0 auto;">
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Telefone</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.telefone" 
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Email</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.email"
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Instagram</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.instagram"
                                    ></v-text-field>
                                </v-row>
                                <v-row style="display: flex; flex-direction: column;">
                                    <h1>Facebook</h1>
                                    <v-text-field
                                        outlined
                                        v-model="fazenda.facebook"
                                    ></v-text-field>
                                </v-row>
                            </v-col>            
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-btn
                        elevation="2"
                        color="#FFB800"
                        style="margin: 0 auto; max-width: 110px; border-radius: 10px;"
                        @click="salvar()"
                    >
                        Salvar
                    </v-btn>
                </v-row>
            </v-card-text>
      </v-sheet>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>

#fazenda {
    background-color: #F3F3F3;
}

.v-sheet {
    width: 80vw;
    margin: 10vh 0;
    box-shadow: 0px 10px 23px rgb(0 0 0 / 12%) !important;
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
    align-content: center;
}

.tab-fazenda span {
    color: #331602;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
}

.filled {
    color: #9F3508 !important;
}
.filled-border {
    border-bottom: 2px solid #9f3508 !important;
}

.border_sel {
    border-bottom: 2px solid #331602;
    font-weight: bolder !important;
}

.v-divider {
    border-width: 1px !important;
    width: 60% !important;
    border-color: #9F3508 !important;
    margin: 20px auto !important;
}

.contents {
    min-height: 40vh;
}

.contents .nome-func {
    color: #331602;
    font-size: 2rem;
    margin: 0 auto;
    font-weight: 500;
    margin-bottom: 20px;
}

.contents h1 {
    color: #331602;
    font-size: 1rem;
    font-weight: 500;
}

.dropzone {
    margin: 0 auto;
    border-style: dashed;
    border-color: #7a7a7a;
    border-radius: 20px;
    width: 27vw;
    text-align: center;
}

.dropzone-custom-content {
    font-family: "Roboto", sans-serif;
    color: #331602;
}

.dropzone-custom-content h3 {
    font-weight: 400;
    font-size: 1.2rem;
}

.dropzone-custom-content p {
   width: 100%; 
   text-align: center; 
   border-bottom: 2px solid #c2c1c1; 
   line-height: 0.1em;
   font-size: 1rem;
   margin: 30px 0px;
} 

.dropzone-custom-content p span { 
    background:#fff; 
    padding:0 10px; 
}

.img-div {
    display: flex;
    margin: 25px;
}
.dz-default .dz-message {
    display: none;
}
.img-show {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}

.img-show img {
    margin-top: 35px;
    width: 250px;
}

.v-text-field__details {
    display: none !important;
}
</style>

<script>
import Footer from '../components/Footer';
import Fazenda from '../service/fazenda'
import firebase from "firebase";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");

export default {
    name: "Fazenda",
    components: {
        Footer,
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            isActive: {
                sobre: false, midia: false, local: false, alt: false, cont: false
            },
            dropzone: '',
            fazenda: {
                cidade: '', cep: '', rua: '', bairro: '', nome: '', sobreHistoria: '', telefone: '', email: '', instagram: '', facebook: '', cafeicultor: {cafeicultorId: ''},
            },
            fazendaTest: {
                sitioFazendaId: 3,
                nome: "Fazenda Tozan asdasd",
                rua: null,
                bairro: null,
                cidade: null,
                cep: null,
                sobreHistoria: "Vai tomar no cu asdasd" ,
                fotosVideos: null,
                telefone: null,
                email: null,
                facebook: null,
                instagram: null,
                cafeicultor: {cafeicultorId: 1}
            },
            selected: 0,
            idFazenda: null,
            hasntFazenda: false,
            images: [],
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 200,
                thumbnailHeight: 250,
                maxFilesize: 500,
                addRemoveLinks: false,
                acceptedFiles: ".jpg, .jpeg, .png"
            },
        };
    },
    mounted() {
        this.fazenda.cafeicultor.cafeicultorId = localStorage.getItem("idUser");
        this.atualizaDadosFazenda();
    },
    methods: {
        async afterComplete(file) {
            try {
                const imageName = uuid.v1();
                var metaData = {
                contentType: "image/png"
                }

                const storageRef = firebase.storage().ref();
                const imageRef = storageRef.child(`images/${imageName}.png`)

                await imageRef.put(file, metaData);

                const downloadUrl = await imageRef.getDownloadURL()

                this.images.push({src: downloadUrl});

                this.$refs.imgDropzone.removeFile(file);
            } catch (error) {
                console.log(error);
            }
        },
        atualizaDadosFazenda() {
            Fazenda.listarFazendaCafeicultor(this.fazenda.cafeicultor.cafeicultorId)
            .then(resposta => {
                if(resposta.data == "") {
                    this.hasntFazenda = true;
                }
                else {
                    this.hasntFazenda = false
                }
                    this.idFazenda = resposta.data.sitioFazendaId
                    this.fazenda.cidade = resposta.data.cidade
                    this.fazenda.cep = resposta.data.cep
                    this.fazenda.rua = resposta.data.rua
                    this.fazenda.bairro = resposta.data.bairro
                    this.fazenda.nome = resposta.data.nome
                    this.fazenda.sobreHistoria = resposta.data.sobreHistoria
                    this.fazenda.telefone = resposta.data.telefone
                    this.fazenda.email = resposta.data.email
                    this.fazenda.instagram = resposta.data.instagram
                    this.fazenda.facebook = resposta.data.facebook
                    this.fazenda.fotosVideos = resposta.data.fotosVideos
                    this.images = JSON.parse(resposta.data.fotosVideos)
                    localStorage.setItem("fazenda", JSON.stringify(resposta.data))
                    console.log(this.images)
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        salvar() {
            this.fazenda.fotosVideos = JSON.stringify(this.images)
            if(this.hasntFazenda) {
                Fazenda.cadastrarFazenda(this.fazenda)
                .then(resposta => {
                    alert("Salvo com sucesso!", resposta);
                    this.atualizaDadosFazenda();
                    //Fazer o alerta certo
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
            else {
                this.putFazenda()
            }  
        },
        async putFazenda() {
            await Fazenda.listarFazenda(this.idFazenda)
                .then(resposta => {
                    if(resposta.data != '') {
                        this.fazenda['sitioFazendaId'] = resposta.data.sitioFazendaId

                        Fazenda.atualizaFazenda(this.fazenda.sitioFazendaId, this.fazenda)
                        .then(resposta => {
                            alert("Fazenda editada com sucesso!", resposta);
                            this.atualizaDadosFazenda();
                            //Fazer o alerta certo
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
};
</script>
