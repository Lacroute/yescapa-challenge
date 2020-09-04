<template lang="html">
  <div class="vehicule" v-if="vehicule">
    <h1>{{ vehicule.title }}</h1>
    <p>{{ $t('startingPrice') }} {{ $n(vehicule.starting_price, 'currency') }}</p>
    <div class="vehicule-data">
      <div class="vehicule-type">
        <span>{{ $t('vehiculeData.type') }}</span>
        <span>{{ vehicule.vehicle_type }}</span>
      </div>

      <div class="vehicule-seats">
        <span>{{ $tc('vehiculeData.seats', vehicule.vehicle_seats) }}</span>
        <span>{{ vehicule.vehicle_seats }}</span>
      </div>

      <div class="vehicule-beds">
        <span>{{ $tc('vehiculeData.beds', vehicule.vehicle_beds) }}</span>
        <span>{{ vehicule.vehicle_beds }}</span>
      </div>

      <div class="vehicule-location">
        <span>{{ $t('vehiculeData.location') }}</span>
        <span>{{ vehicule.vehicle_location_city }} ({{ vehicule.vehicle_location_zipcode }})</span>
      </div>

      <div class="vehicule-review">
        <span>{{ vehicule.review_count }} {{ $tc('vehiculeData.review', vehicule.review_count) }}</span>
        <span>{{ vehicule.review_average }}/5</span>
      </div>
    </div>

    <vehicule-gallery :pictures="vehicule.pictures"/>

    <vehicule-owner
      :pictureUrl="vehicule.vehicle_owner_picture_url"
      :firstName="vehicule.vehicle_owner_first_name"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SELECTED_VEHICULE, GET_VEHICULE_BY_ID } from '@/store/config'

import VehiculeGallery from '@/components/VehiculeGallery'
import VehiculeOwner from '@/components/VehiculeOwner'

export default {
  name: 'Vehicule',

  components: {
    VehiculeGallery,
    VehiculeOwner
  },

  computed: {
    ...mapGetters({
      vehicule: SELECTED_VEHICULE
    })
  },

  created () {
    // If we arrive in this page by default (search engine, sharing link, ...)
    // It should be handled by SSR
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

<style lang="css">
.vehicule-data{
  display: flex;
}
.vehicule-data div[class^='vehicule-'] + div{
  margin-left: 24px;
}
.vehicule-data span{
  display: block;
}
</style>
