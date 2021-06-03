<v-row>
                    

                    
                    
</v-row>
                    <v-col cols="2" >
                      <v-text-field dense type="number" label="SKU" v-model="newCerveja.Sku"
                        :rules="[(v) => !!v || '']" ></v-text-field>
                      <img class="previewImg" :src="this.nrSKU" />
                      <v-file-input hide-input prepend-icon="mdi-camera"></v-file-input>
                    </v-col>
                    <v-col cols="3">
                      <v-select dense label="Marca" v-model="newCerveja.Marca"
                      :items="Marca" :rules="[(v) => !!v || '']"></v-select>

                      <v-text-field dense label="Nome" v-model="newCerveja.Nome"
                        :rules="[(v) => !!v || '']"></v-text-field>

                      <v-textarea rows="3" dense label="Descrição" v-model="newCerveja.Desc"
                        :rules="[(v) => !!v || '']"></v-textarea>
                    </v-col>
                    <v-col cols="3">
                      <v-select dense label="Família" v-model="newCerveja.SelectFamilia"
                      :items="familia" :rules="[(v) => !!v || '']"></v-select>

                      <v-select dense label="Estilo" v-model="newCerveja.Estilo"
                        v-if="newCerveja.SelectFamilia === 'Lager'"
                        :items="Lager" :rules="[(v) => !!v || '']"></v-select>

                      <v-select dense label="Estilo" v-model="newCerveja.Estilo"
                        v-else 
                        :items="Ale" :rues="[(v) => !!v || '']"></v-select>
                   
                          <v-text-field dense type="number" label="Temp. de Consumo" v-model="newCerveja.Temp"
                            suffix="°C" :rules="[(v) => !!v || '']"></v-text-field>
                          <v-text-field dense type="number" label="IBU" v-model="newCerveja.Ibu"
                            :rules="[(v) => !!v || '']"></v-text-field>
                   
                    </v-col>
                    <v-col cols="3">
                      <v-select dense label="Cor" v-model="newCerveja.Cor"
                        :items="Cor" :rules="[(v) => !!v || '']"></v-select>
                        
                      <v-select dense label="Complexidade" v-model="newCerveja.Complex"
                        :items="Complex" :rules="[(v) => !!v || '']"></v-select>
              
                      <v-select dense label="Amargor" v-model="newCerveja.Amargor"
                        :items="Complex" :rules="[(v) => !!v || '']"></v-select>

                      <v-select dense label="Teor Alcoólico" v-model="newCerveja.TeorAlc"
                        :items="Complex" :rules="[(v) => !!v || '']"></v-select>
                    </v-col>
                    <!--     margin-top: -123px; margin-left: 15.77vw; -->
                    <v-col cols="2"></v-col>
                    <v-col cols="9">
                      <v-text-field dense label="Observação" v-model="newCerveja.Obs"></v-text-field>
                      <v-select dense chips multiple label="Harmonização" v-model="newCerveja.Harm"
                      :items="Harm" :rules="[(v) => v.length > 0 || '']"
                      class="desc-2 harm"                      
                      item-text="dsHarm"
                      item-value="idHarm"
                    ></v-select>
                    </v-col>