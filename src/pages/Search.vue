<template lang="html">
  <section>
    <h1>Search</h1>
    <div class="results">
      {{ results }}
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SEARCH_BY_SOMETHING } from '@/store/config'

export default {

  data () {
    return {}
  },

  computed: {
    ...mapState(['results'])
  },

  created () {
    this.search()
  },

  methods: {
    ...mapActions({
      search: SEARCH_BY_SOMETHING
    })
  }
}
</script>

<style lang="css" scoped>
</style>
