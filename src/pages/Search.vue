<template lang="html">
  <section class="page-search">
    <h1>{{ $tc('searchResults', results.length) }}</h1>
    <div class="results">
      <vehicle-preview
        v-for="v in results"
        :key="v.id"
        :id="v.id"
        :title="v.title"
        :vehicle-type="v.vehicle_type"
        :img-url="v.pictures[0].url"/>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SEARCH_BY_SOMETHING } from '@/store/config'
import VehiclePreview from '@/components/VehiclePreview'

export default {

  components: {
    VehiclePreview
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
  max-width: 1280px;
  margin: auto;
}
</style>
