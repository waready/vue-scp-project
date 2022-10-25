<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to SCP - porjects 
        </h1>

        <p class="subheading font-weight-regular">
          Esta pequeña aplicacion trata de reunir todos los scp conocidos
          <br>para tener mas informacion de los scp puede visitar
          <a
            href="http://scp-es.com/"
            target="_blank"
          >La fundación SCP</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <v-btn
          class="ma-2"
          outlined
          color="indigo"
          to="/allscp"
          >
          Get STARTED
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    }),
  }
</script>
