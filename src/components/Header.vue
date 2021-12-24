<template>
  <header>
    <v-app-bar
      flat
      app
      color="#343a40"
      dark
      height="56"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MojaCoder Problem Archives</v-toolbar-title>

      <v-tabs>
        <v-tab to="/" class="mx-2">問題一覧</v-tab>
        <v-tab to="/contests" class="mx-2">コンテスト一覧</v-tab>
      </v-tabs>

      <v-btn
        href="https://github.com/1st-vil/mojacoder-problem-archives"
        target="_blank"
        text
      >
        <span class="mr-2 font-weight-light" style="text-transform: none">GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item to="/">
              <v-list-item-title>問題一覧</v-list-item-title>
            </v-list-item>
            <v-list-item to="/contests">
              <v-list-item-title>コンテスト一覧</v-list-item-title>
            </v-list-item>
            <v-list-item href="https://github.com/1st-vil/mojacoder-problem-archives" target="_blank">
              <v-list-item-title>GitHub</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
  })
}
</script>
 
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