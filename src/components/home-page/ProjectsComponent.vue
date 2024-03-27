<script setup>
import SubPageTitleComponent from "@/components/public/SubPageTitleComponent.vue";
import ProjectCardComponent from "@/components/public/ProjectCardComponent.vue";

import {projects} from "@/assets/js/data-export/export-projects";

</script>

<template>
  <div class="body">
    <header>
      <sub-page-title-component title="MY PROJECTS" title-color="#FFFFFF" separator-color="#FFFFFF"/>
    </header>
    <main>
      <div class="projects-container">
        <div class="project-list">
          <project-card-component class="project-item" v-for="(project, index) in projects" :key="index"
                                  :project="project"/>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
@background-color: #004535;
.body {

  header {
    background-color: @background-color;
  }

  main {
    background-color: @background-color;
    padding-bottom: 60px;

    .projects-container {

      .project-list {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .project-item {
          margin: 1%;
        }
      }
    }
  }
}
</style>
<!-- 默认排列 -->
<style lang="less" scoped>
main {
  .projects-container {
    .project-list {
      width: 80%;

      .project-item {
        width: 80%;
      }
    }
  }
}
</style>

<!-- 小屏排列 -->
<style lang="less" scoped>
@media (min-width: 1200px) {
  main {
    .projects-container {
      .project-list {
        width: 80%;

        .project-item {
          width: 100%;
        }
      }
    }
  }
}
</style>