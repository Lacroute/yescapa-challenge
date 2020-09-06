<template lang="html">
  <section
    :style="{background: bgColorProperty}"
    class="vehicle-preview">
    <router-link :to="{ name: 'Vehicle', params: { id: id }}">
      <div
        :style="{ backgroundImage: `url(${imgUrl})` }"
        class="small-preview"></div>
        <div class="wrapper-title">
          <div class="center-title">
            <h2>{{ title }}</h2>
            <h3>{{ vehicleType }}</h3>
          </div>
        </div>
    </router-link>
  </section>
</template>

<script>
import ColorThief from 'colorthief'

export default {
  name: 'VehiclePreview',

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
    },
    vehicleType: String
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
.vehicle-preview{
  border-radius: 2px;
  transition: background 750ms ease;

  & + .vehicle-preview{
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
    transition: margin 250ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2, h3{
      background: white;
      display: table;
      padding: 0.15em 0.30em;
    }

    h2{
      margin: 0;
      font-size: 3em;
      border-radius: 2px 2px 2px 0;
    }
    h3{
      border-radius: 0 0 2px 2px;
    }
  }
}
</style>
