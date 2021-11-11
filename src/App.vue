<template>
  <main class="container-fluid grow">
    <div class="row">
      <div class="col-md-2 p-0 grow d-flex">
        <Navbar />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
  
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
