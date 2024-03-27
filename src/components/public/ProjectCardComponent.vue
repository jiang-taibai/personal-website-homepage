<script>
import {NImage, NButton, NIcon} from 'naive-ui'
import ImageSliderComponent from "@/components/public/ImageSliderComponent.vue";

export default {
  components: {
    NImage, NButton, NIcon, ImageSliderComponent
  },
  props: {
    'project': {
      type: Object
    },
  },
  data() {
    return {}
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    formattedProjectContent() {
      let lines = this.project.content.split('\n');  // 根据你的文本内容换行的方式，可能需要调整这里
      let indentedLines = lines.map(line => '\u00A0\u00A0\u00A0' + line);  // 使用两个不断开的空格作为缩进
      return indentedLines.join('\n');
    }
  }
}
</script>

<template>
  <div class="project-box">
    <div class="cover">
      <image-slider-component :images="project.covers"/>
    </div>
    <div class="desc">
      <div class="title" :title="project.title">{{ project.title }}</div>
      <div class="content-box">
        <div class="content-text" :title="project.content">
          {{ formattedProjectContent }}
        </div>
      </div>
      <div class="links">
        <n-button v-for="link in project.links" @click="openLink(link.url)" color="#113F3D">
          <img :src="link.icon" :alt="link.type + ' logo'"/>
          <span>{{ link.type }}</span>
        </n-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@project-box-height: 250px;
@project-box-width: 100%;

.project-box {
  font-family: 'JetBrains Mono', 'AlibabaPuHuiTi-3-55-Regular', Arial, sans-serif;
  height: @project-box-height;
  min-width: 600px;
  border-radius: 8px;
  display: flex;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  .cover {
    height: @project-box-height;
    width: @project-box-height;
    flex-shrink: 0;
  }

  .desc {
    padding: 8px 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    background-color: #113F3D;
    color: #B3D66E;

    .title {
      flex-shrink: 0;
      font-weight: bold;
      font-size: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .content-box {
      flex: 1;
      border: #D7D8D9 dashed 1px;
      border-radius: 8px;

      .content-text {
        margin: 1em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 5;
        white-space: pre-line;
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      margin-top: 8px;
      gap: 8px;

      img {
        height: 20px;
        width: 20px;
        margin-right: 8px;
      }
    }
  }
}

.project-box:hover {
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.1), 0 6px 20px rgba(255, 255, 255, 0.1);
}
</style>