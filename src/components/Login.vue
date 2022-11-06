<template>
    <v-app id="inspire">
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Login form</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                         <v-form>
                            <v-text-field
                               prepend-icon="person"
                               name="login"
                               label="Login"
                               v-model="email"
                               type="text"
                            ></v-text-field>
                            <v-text-field
                               id="password"
                               prepend-icon="lock"
                               name="password"
                               label="Password"
                               v-model="password"
                               type="password"
                            ></v-text-field>
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
import router from '@/router'
import store from '@/store'
export default {
    name: 'Login',
    props: {
      source: String,
   },
   data() {
      return {
         email:"",
         password:""         
      }
   },
   methods:{
      enviarAuth(){
         const user = {
            email: this.email,
            password:this.password
         }
         axios.post('login', {user})
         .then( (response) => {
            window.localStorage.setItem('_tokenOne', response.data.token);
            store.user = this.email
            router.push('/allscp');
         })
         .catch(function (error) {
            console.log(error);
         });
      }
   }
 };
 </script>
 
 <style></style>
 