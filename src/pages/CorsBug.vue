<template lang="html">
  <div class="cors-bug">
    <p>{{ $t('corsInstruction') }}</p>
    <p>{{ $t('pluginList') }}</p>
    <ul>
      <li><a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related">chrome</a></li>
      <li><a href="https://addons.mozilla.org/fr/firefox/addon/cors-everywhere/">firefox</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.cors-bug{

  p:nth-child(2) {
    margin-bottom: 0;
  }
  li{
    display: block;
    margin: $space_unit 0 0 $space_unit;
  }
}
</style>
