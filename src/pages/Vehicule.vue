<template lang="html">
  <div class="">
    {{ vehicule }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SELECTED_VEHICULE, GET_VEHICULE_BY_ID } from '@/store/config'

export default {
  name: 'Vehicule',

  computed: {
    ...mapGetters({
      vehicule: SELECTED_VEHICULE
    })
  },

  created () {
    if (this.vehicule === null) {
      this.getVehiculeById()
    }
  },

  methods: {
    ...mapActions({
      getVehiculeById: GET_VEHICULE_BY_ID
    })
  }
}
</script>

<style lang="css" scoped>
</style>
