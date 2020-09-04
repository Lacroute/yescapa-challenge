<template lang="html">
  <section class="vehicule-owner">
    <img :src="pictureUrl" alt="">
    <h4>{{ firstName }}</h4>
  </section>
</template>

<script>
export default {
  name: 'VehiculeOwner',

  props: {
    pictureUrl: { type: String, required: true },
    firstName: { type: String, required: true }
  }
}
</script>

<style lang="css" scoped>
</style>
