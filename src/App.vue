<template>
  <div id="app">
    <app-header/>
    <section class="wrapper">
      <router-view/>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',

  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
.wrapper{
  padding: 0 $space_unit
}
</style>
