<template lang="html">
  <section class="vehicle-owner">
    <img :src="pictureUrl" alt="">
    <div class="owner-details">
      <h4>{{ firstName }}</h4>
      <a href="#" v-on:click.stop.prevent="">{{ $t('otherVehicle') }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VehicleOwner',

  props: {
    pictureUrl: { type: String, required: true },
    firstName: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.vehicle-owner{
  display: flex;

  img{
    max-width: 80px;
    height: auto;
    border-radius: 2px;
  }

  .owner-details{
    margin-left: $space_unit;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  }
}
</style>
