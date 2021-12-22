<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h3 class="font-weight-bold">MojaCoder Problem Archives</h3>
      </div>

      <v-spacer></v-spacer>
      
      <v-btn to="/" outlined plain class="mx-2">問題一覧</v-btn>
      <v-btn to="/contests" outlined plain class="mx-2">コンテスト一覧</v-btn>
      <v-btn
        href="https://github.com/1st-vil/mojacoder-problem-archives"
        target="_blank"
        text
      >
        <span class="mr-2 font-weight-light" style="text-transform: none">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    message: "テストメッセージ",
  }),

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
