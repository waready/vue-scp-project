<template>
  <div>
    <v-container>
      <v-card>
        <v-tabs background-color="deep-purple accent-4" center-active dark>
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
            :src="
              'https://project-scp-adonis.herokuapp.com/uploads/' + item.url_img
            "
          ></v-img>

          <v-card-title>{{ item.name }}</v-card-title>

          <v-card-text>
            <div class="text-subtitle-1">$ • {{ item.item }}</div>

            <div>{{ item.descrition }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>{{ item.category_id }}</v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="ShowScp(item)">
              Editar
            </v-btn>

            <v-btn color="red lighten-2" text @click="EliminarScp(item.id)">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Editar SCP </v-card-title>

        <v-card-text class="mt-2">
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
              name="scp-name"
              label="scp-name"
              v-model="name"
              type="text"
            ></v-text-field>
            <v-text-field
              name="scp-item"
              label="scp-item"
              v-model="item"
              type="text"
            ></v-text-field>
            <v-textarea
              name="input-7-1"
              label="Descripción"
              auto-grow
              v-model="descrition"
            ></v-textarea>
            <v-select
              v-model="category_id"
              :items="categorias"
              label="Categoria"
              required
            ></v-select>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="EditarScp()" color="primary">Editar Scp</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "allscp",

  data() {
    return {
      mensaje: [],
      categorias: [],
      dialog: false,

      id: "",
      FILE: null,
      name: "",
      item: "",
      descrition: "",
      category_id: "",
    };
  },
  mounted() {
    this.ListarScp();
    axios.get("categorias").then((respuesta) => {
      console.log(respuesta);
      this.categorias = respuesta.data.map((option) => ({
        value: option.id,
        text: option.name,
      }));
    });
  },
  methods: {
    ListarScp() {
      axios.get("scp-items").then((respuesta) => {
        console.log(respuesta);
        this.mensaje = respuesta.data;
      });
      console.log("llego");
    },
    CrearScp() {
      let token = window.localStorage.getItem("_tokenOne");
      if (token) {
        router.push("/scp");
      } else {
        router.push("/login");
      }
    },
    ShowScp(item) {
      console.log(item);
      this.id = item.id;
      this.dialog = true;
      this.name = item.name;
      this.item = item.item;
      this.descrition = item.descrition;
      this.category_id = item.category_id;
    },
    EditarScp() {
      const formData = new FormData();
      formData.append("avatar", this.FILE);
      formData.append("name", this.name);
      formData.append("item", this.item);
      formData.append("descrition", this.descrition);
      formData.append("category_id", this.category_id);
      axios
        .put("scp-items/" + this.id, formData, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "multipart/form-data",
            //'Authorization': `Bearer ${window.localStorage.getItem('_tokenOne')}`
          },
        })
        .then((response) => {
          console.log(response);
          this.ListarScp();
          this.dialog = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    EliminarScp(id) {
      this.ListarScp();
      if (confirm("¿Esta seguro de Eliminar este Scp?") == true) {
        axios
          .delete("scp-items/" + id, {
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     'Authorization': `Bearer ${window.localStorage.getItem('_tokenOne')}`
            // }
          })
          .then(() => this.ListarScp())
          .catch(function (error) {
            console.log(error);
          });
      } else {
        return;
      }
    },
  },
};
</script>
<style></style>
