<template lang="html">
  <div class="vehicule-gallery">
    <img
      v-for="p in pictures"
      :key="p.id"
      :src="p.url" alt="">
  </div>
</template>

<script>
export default {
  name: 'VehiculeGallery',

  props: {
    pictures: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css">
.vehicule-gallery{
  display: flex;
  width: 100%;
  height: 400px;
  overflow-x: auto;
}
.vehicule-gallery img + img{
  margin-left: 12px;
}
</style>
