<script>
export default {
  props: {
    'title': {
      type: String
    },
    'titleColor': {
      type: String,
      default: '#000000'
    },
    'separatorColor': {
      type: String,
      default: '#7843E9'
    }
  },
  computed: {
    titleStyle() {
      return {
        'color': this.titleColor
      }
    },
    separatorStyle() {
      return {
        'background-color': this.separatorColor
      }
    }
  }
}
</script>

<template>
  <div class="title-box">
    <div class="title" :style="titleStyle">{{ title }}</div>
    <div class="separator" :style="separatorStyle"></div>
  </div>
</template>

<style scoped lang="less">
.title-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 80px;
  padding-bottom: 80px;

  .title {
    font-size: 50px;
  }

  .separator {
    height: 5px;
    background-color: #7843E9;
    width: 50px;
  }
}
</style>