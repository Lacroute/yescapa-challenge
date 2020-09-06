<template>
  <div id="app">
    <app-header/>
    <section class="wrapper">
      <router-view/>
    </section>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.wrapper{
  padding: 0 $space_unit;
  max-width: 1280px;
  margin: auto;
}
</style>
