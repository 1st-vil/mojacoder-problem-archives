<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view/>
    </v-main>
  </v-app>
</template>

 <style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
 
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
</style>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    drawer: false,
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
