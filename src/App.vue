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

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
}
</style>
