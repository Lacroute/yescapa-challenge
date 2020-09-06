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
            <h3>{{ $t(vehicleType) }}</h3>
            <h2>{{ title }}</h2>
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
  position: relative;

  & + .vehicle-preview{
    margin-top: $space_unit
  }

   &:hover{
     .wrapper-title{
       left: 30px;
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
    width: 280px;

    &:before{
      content: ' ';
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .wrapper-title{
    position: absolute;
    left: 60px;
    top: 25px;
    z-index: 1;
    transition: left 250ms ease;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2, h3{
      background: white;
      display: table;
      padding: 0.15em 0.30em;
      margin: 0 $space_unit 0 0;
    }

    h2{
      font-size: 1.75em;
      border-radius: 0px 2px 2px 2px;
    }
    h3{
      border-radius: 2px 2px 0 0;
    }
  }

  @media #{$small-device}{
    &:hover{
      .wrapper-title{
      left: 60px;
      }
    }

    .small-preview{
      width: 360px;
      height: 190px;
    }
    .wrapper-title{
      left: 140px;

      h2{
        font-size: 2em;
      }
    }
  }

  @media #{$medium-device}{
    &:hover{
      .wrapper-title{
      left: 260px;
      }
    }

    .small-preview{
      width: 360px;
      height: 190px;
    }
    .wrapper-title{
      top: 50%;
      transform: translateY(-50%);
      left: 300px;

      h2{
        font-size: 2.5em;
      }
    }
  }

  @media #{$medium-device}{

  }
}
</style>
