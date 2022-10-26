<template>
    <div>
        <v-container>
            <v-card>
                <v-tabs
                background-color="deep-purple accent-4"
                center-active
                dark
                >
                <v-tab active>Listado</v-tab>
                <v-tab @click="CrearScp()">Crear</v-tab>
                </v-tabs>
            </v-card>
            <v-row>
                <v-card
                   
                    class="mx-auto my-12"
                    max-width="374"
                    v-for="item in mensaje"
                    :key="item.id"
                >
                    <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                    </template>

                    <v-img
                    height="250"
                    :src="'https://project-scp-adonis.herokuapp.com/uploads/'+item.url_img"
                    ></v-img>

                    <v-card-title>{{item.name}}</v-card-title>

                    <v-card-text>
               
                    <div class="text-subtitle-1">
                        $ • {{item.item}}
                    </div>

                    <div>{{item.descrition}}</div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <v-card-text>
                        <v-chip-group
                       
                        active-class="deep-purple accent-4 white--text"
                        column
                        >
                            <v-chip>{{item.category_id}}</v-chip>
                        </v-chip-group>
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        
                    >
                        Editar
                    </v-btn>
                    <v-btn
                        color="red lighten-2"
                        text
                        
                    >
                        Eliminar
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>            

        </v-container>
    </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
 export default {
    name: 'allscp',
 
   data() {
      return {
        mensaje:[]
      }
   },
   mounted(){
    axios.get('scp-items')
    .then((respuesta) => { 
        console.log(respuesta);
        this.mensaje = respuesta.data
    });
  },
  methods:{
    CrearScp(){
        let token = window.localStorage.getItem('_tokenOne')
        if(token){
            router.push("/scp")
        }else{
            router.push("/login")
        }
    }
  }
}
</script>
<style>

</style>