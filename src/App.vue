<template>
  <v-app>
    <v-main>
      <Header/>

      <v-card class="px-3 py-3">
        <v-card-title class="grey lighten-3 py-1 heading-6">
          <template>問題情報収集へのご協力のお願い</template>
        </v-card-title>
        <v-card-text class="post-card-text mt-2">
          <p>
            当サイト製作開始の時点で既に <a href="https://mojacoder.app/problems" target="_blank">新規問題一覧</a> から消失してしまっていた問題が存在します。
            当サイトに掲載されていないMojaCoder上の問題をご存じの方は、問題リンクを添えて <a href="https://twitter.com/1st_vil" target="_blank">@1st_vil</a> までご一報いただけると幸いです。
          </p>
        </v-card-text>
      </v-card>

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
