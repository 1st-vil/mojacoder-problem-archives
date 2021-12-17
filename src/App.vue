<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{ cnt }}</p>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <button v-on:click="cnt++">Increment</button>
    <div 
      id="nav" 
      class="tab-area-base">
      <ul class="tab-menu-base">
        <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <li><router-link to="/">Home</router-link></li>
        <!-- *** -->
        <!-- 省略 -->
        <!-- *** -->
        <li><router-link to="/routing">Rounting Test</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    say: function (message) {
      alert(message)
    }
  },
  data() {
    return {
      cnt:0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
