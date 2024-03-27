<template>
  <div class="image-slider">
    <div class="image-container" :style="containerStyle">
      <div v-for="(image, index) in images" :key="index"
           class="image" :style="{ 'background-image': 'url(' + image + ')' }"/>
    </div>
    <div class="dots" v-show="images.length > 1">
      <span v-for="(image, index) in images" :key="index"
            :class="{ active: currentIndex === index }"
            @click="switchImage(index)"/>
    </div>
  </div>
</template>

<script>
export default {
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
  computed: {
    containerStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s',
      };
    },
  },
  methods: {
    switchImage(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.image-slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.image {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dots span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.dots .active {
  background: #333;
}
</style>
