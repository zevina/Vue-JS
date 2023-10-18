<template>
  <h1>App Vue</h1>
  <HelloComponent/>
  <GalleryComponent/>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue';
import GalleryComponent from './components/GalleryComponent.vue';
export default {
  components: {HelloComponent, GalleryComponent},

}
</script>

<style lang="scss">

</style>
