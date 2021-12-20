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
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/routing">Routing</v-btn>
      <router-view />
      <h1 v-text="message"></h1>
      <h1 v-for="val in sql_res" :key=val.id>{{ val.id }} - {{ val.name }} (sql_res)</h1>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
const axios = require('axios')

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    message: "aaa",
    sql_res: null
  }),

  mounted () {
    axios
      .get('https://mojacoder-problem-archives-api.herokuapp.com/')
      .then(response => (
        this.sql_res = response.data,
        console.log(response.data)
        ))
  },

  methods: {
    set_info(info) {
      this.message = info
    },
    get_message() {
      return 'abc'
    },
  },
};

</script>
