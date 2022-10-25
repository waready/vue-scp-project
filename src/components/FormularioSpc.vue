<template>
    <v-app id="inspire">        
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Categoria form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <!--input type="file" @change="uploadFile()" ref="elFile"/-->
                            <v-file-input
                            label="File input"
                            outlined
                            dense 
                            v-model="FILE" 
                            ref="elFile"
                            >
                            </v-file-input>
                            <v-text-field
                               prepend-icon="scp-name"
                               name="scp-name"
                               label="scp-name"
                               v-model="name"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               prepend-icon="scp-item"
                               name="scp-item"
                               label="scp-item"
                               v-model="item"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               prepend-icon="descripcion"
                               name="descripcion"
                               label="descripcion"
                               v-model="descrition"
                               type="text"
                            ></v-text-field>
                            <v-select
                            v-model="category_id"
                            :items="mensaje"
                            label="Categoria"
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
       </v-main>
    </v-app>
 </template>
 
 <script>
import axios from "axios";
 export default {
    name: 'scp',
 
   data() {
      return {
        FILE: null,
        name:"",
        item:"",
        descrition:"",
        category_id:"",
        mensaje:[]
      }
   },
   mounted(){
    axios.get('categorias')
    .then((respuesta) => { 
        console.log(respuesta);
        this.mensaje = respuesta.data.map(option => ({value: option.id, text: option.name}));;
    });
    },
   methods:{
      enviarAuth(){
        
         const formData = new FormData();
            formData.append('avatar', this.FILE)
            formData.append("name", this.name)
            formData.append("item", this.item)
            formData.append("descrition", this.descrition)
            formData.append("category_id", this.category_id)
         axios.post('scp-items', formData,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'multipart/form-data',
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
 