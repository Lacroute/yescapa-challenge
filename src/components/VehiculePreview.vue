<template lang="html">
  <section
    :style="{background: bgColorProperty}"
    class="vehicule-preview">
    <router-link :to="{ name: 'Vehicule', params: { id: id }}">
      <div
        :style="{ backgroundImage: `url(${imgUrl})` }"
        class="small-preview"></div>
        <div class="wrapper-title">
          <h2>{{ title }}</h2>
        </div>
    </router-link>
  </section>
</template>

<script>
import ColorThief from 'colorthief'

export default {
  name: 'VehiculePreview',

  data () {
    return {
      bgColor: [255, 255, 255]
    }
  },

  computed: {
    bgColorProperty () {
      return `rgb(${this.bgColor.join(',')})`
    }
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    }
  },

  mounted () {
    let img = new Image()
    let ct = new ColorThief()

    img.addEventListener('load', () => {
      this.bgColor = ct.getPalette(img, 3)[2]
    })

    img.crossOrigin = 'Anonymous'
    img.src = this.imgUrl
  }
}
</script>

<style lang="scss">
.vehicule-preview{
  border-radius: 2px;

  & + .vehicule-preview{
    margin-top: $space_unit
  }

   &:hover{
     .wrapper-title{
       margin: 0px 0px 0px -140px;
     }
   }

  a{
    display: flex;
    text-decoration: none;

    &, &:visited{
      color: $main_color
    }
  }

  .small-preview{
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 160px;
    width: 320px;

    &:before{
      content: ' ';
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .wrapper-title{
    margin: 0px 0px 0px -80px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: margin 250ms ease;

    h2{
      margin: 0;
      font-size: 3em;
      background: white;
      padding: 0.15em 0.30em;
      border-radius: 2px;
    }
  }
}
</style>
