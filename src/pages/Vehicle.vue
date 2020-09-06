<template lang="html">
  <section class="page-vehicle" v-if="vehicle">
    <header>
      <div class="wrapper-text">
        <div class="breadcrumb">
          <h3><a @click.prevent="$router.go(-1)">{{ $t('search') }}</a></h3>
          <h1>{{ vehicle.title }}</h1>
        </div>
        <p>{{ $t('shortDescription', [$t(vehicle.vehicle_type).toLowerCase(), $n(vehicle.starting_price, 'currency')]) }}</p>
      </div>
      <div class="wrapper-actions">
        <button type="button" name="button">{{ $t('rent') }}</button>
      </div>
    </header>

    <vehicle-gallery :pictures="vehicle.pictures"/>

    <section class="vehicle-details">
      <div class="vehicle-data">
        <div class="vehicle-seats">
          <span>{{ $tc('vehicleData.seats', vehicle.vehicle_seats) }}</span>
          <span>{{ vehicle.vehicle_seats }}</span>
        </div>

        <div class="vehicle-beds">
          <span>{{ $tc('vehicleData.beds', vehicle.vehicle_beds) }}</span>
          <span>{{ vehicle.vehicle_beds }}</span>
        </div>

        <div class="vehicle-location">
          <span>{{ $t('vehicleData.location') }}</span>
          <span>{{ vehicle.vehicle_location_city }} ({{ vehicle.vehicle_location_zipcode }})</span>
        </div>

        <div class="vehicle-review">
          <span>{{ vehicle.review_count }} {{ $tc('vehicleData.review', vehicle.review_count) }}</span>
          <span>{{ vehicle.review_average }}/5</span>
        </div>
      </div>

      <vehicle-owner
        :pictureUrl="vehicle.vehicle_owner_picture_url"
        :firstName="vehicle.vehicle_owner_first_name"/>

    </section>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { SELECTED_VEHICULE, GET_VEHICULE_BY_ID } from '@/store/config'

import VehicleGallery from '@/components/VehicleGallery'
import VehicleOwner from '@/components/VehicleOwner'

export default {
  name: 'Vehicle',

  components: {
    VehicleGallery,
    VehicleOwner
  },

  computed: {
    ...mapGetters({
      vehicle: SELECTED_VEHICULE
    })
  },

  created () {
    // If we arrive in this page by default (search engine, sharing link, ...)
    // It should be handled by SSR
    if (this.vehicle === null) {
      this.getVehicleById()
    }
  },

  methods: {
    ...mapActions({
      getVehicleById: GET_VEHICULE_BY_ID
    })
  }
}
</script>

<style lang="scss">
.page-vehicle{
  header{
    display: flex;
    justify-content: space-between;

    .breadcrumb *{
      display: inline-block;

      & + *{
        margin-left: $space_unit;

        &:before{
          content: '>';
          font-size: 22px;
          display: inline-block;
          margin-right: $space_unit;
        }
      }
    }

    .wrapper-actions{
      margin-top: 2* $space_unit
    }
  }
}
.vehicle-details{
  display: flex;
  align-items: center;
  background: $light_grey;
  border-radius: 0px 0px 2px 2px;
  padding: $space_unit 0;
}
.vehicle-data{
  display: flex;
  margin: 0 2 * $space_unit;

  div[class^='vehicle-'] + div{
    margin-left: 2 * $space_unit;
  }

  span{
    display: block;
    text-align: center;

    & + span{
      margin-top: $space_unit;
    }
  }
}
</style>
