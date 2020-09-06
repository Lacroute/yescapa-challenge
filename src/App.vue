<template>
  <div id="app">
    <app-header/>
    <section class="wrapper">
      <transition :name="transitionName" mode="out-in">
        <router-view/>
      </transition>
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
  },

  data () {
    return {
      transitionName: 'slide-right'
    }
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
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
