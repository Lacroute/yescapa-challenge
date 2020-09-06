<template lang="html">
  <section class="page-search">
    <h1>{{ $t('searchResults') }}</h1>
    <div class="results">
      <vehicule-preview
        v-for="v in results"
        :key="v.id"
        :title="v.title"
        :id="v.id"/>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SEARCH_BY_SOMETHING } from '@/store/config'
import VehiculePreview from '@/components/VehiculePreview'

export default {

  components: {
    VehiculePreview
  },

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

<style lang="scss">
.page-search{
}
</style>
