<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        <h1 class="ml-2"> v.1.1.1</h1> 
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
      <v-menu offset-y class="mr-2" v-if="$store.state.user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ $store.state.user }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="salir()">Salir</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>

      <v-btn v-else 
        @click="login()"
      >
      <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import router from './router';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['logout']),
    login(){
      let token = window.localStorage.getItem('_tokenOne')
        if(!token){
          router.push("/login")
        }
    },
    salir(){
      this.logout();
      localStorage.clear();
      sessionStorage.clear();
      router.push("/login")
    }
  }
};
</script>
