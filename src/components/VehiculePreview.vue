<template lang="html">
  <section class="vehicule-details">
    <router-link :to="{ name: 'Vehicule', params: { id: id }}">
      <h2>{{ title }}</h2>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'VehiculePreview',

  props: {
    title: String,
    id: Number
  }
}
</script>

<style lang="css" scoped>
</style>
