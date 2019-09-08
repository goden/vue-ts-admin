<template>
  <div id="app">
      <router-view />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Vuex, { GetterTree, MutationTree, ActionTree } from "vuex";
import { Action } from 'vuex-class';

@Component({
    components: {}
})
export default class App extends Vue {

    // 存取用戶信息
    @Action('setUser') setUser: any;

    created() {
        this.setUser(localStorage.tsToken);
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
