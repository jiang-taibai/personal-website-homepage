<template>
  <n-carousel show-arrow autoplay draggable>
    <n-image class="image-container" lazy
             v-for="(image, index) in images" :key="index" :src="image"/>
  </n-carousel>
</template>

<script>
import {NCarousel, NImage, NImageGroup} from "naive-ui";

export default {
  components: {
    NCarousel,
    NImage,
    NImageGroup
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
