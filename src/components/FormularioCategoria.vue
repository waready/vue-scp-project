<template>
    <v-app id="inspire">
       <v-content>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Categoria form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="categoria"
                               name="categoria"
                               label="categoria"
                               v-model="name"
                               type="text"
                            ></v-text-field>
                            <v-select
                            v-model="danger"
                            :items="['one','two','three']"
                        
                            label="Peligro"
                            required
                            ></v-select>
                            
                         </v-form>
                      </v-card-text>
                      <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn @click="enviarAuth()"  color="primary" >Login</v-btn>
                      </v-card-actions>
                   </v-card>
                </v-flex>
             </v-layout>
          </v-container>
       </v-content>
    </v-app>
 </template>
 
 <script>
import axios from "axios";
 export default {
    name: 'categoria',
   data() {
      return {
        name:"",
        danger:""         
      }
   },
   methods:{
      enviarAuth(){
         const categoria = {
            name: this.name,
            danger:this.danger
         }
         axios.post('categorias', {categoria},
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Authorization': `Bearer ${window.localStorage.getItem('_tokenOne')}` 
            } 
        })
         .then(function (response) {
            //window.localStorage.setItem('_tokenOne', response.data.token);
            console.log(response);
         })
         .catch(function (error) {
            console.log(error);
         });
      }
   }
 };
 </script>
 
 <style></style>
 