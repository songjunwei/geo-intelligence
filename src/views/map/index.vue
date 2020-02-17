<template>
  <div id="map-container"></div>
</template>

<script>
  export default {
    name: 'Map',
    mounted() {
      var viewer = new Cesium.Viewer('map-container');
    }
  }
</script>

<style lang="less">
  #map-container {
    height: 100%;
    width: 80%;
    padding: 0px 5px;
  }

</style>
