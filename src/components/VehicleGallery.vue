<template lang="html">
  <div class="vehicle-gallery">
    <img
      v-for="p in pictures"
      :key="p.id"
      :src="p.url" alt="">
  </div>
</template>

<script>
export default {
  name: 'VehicleGallery',

  props: {
    pictures: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.vehicle-gallery{
  display: flex;
  width: 100%;
  height: 400px;
  overflow-x: auto;
  border-radius: 2px 2px 0px 0px;
  background: $light_grey;

  img + img{
    margin-left: 12px;
  }
}
</style>
