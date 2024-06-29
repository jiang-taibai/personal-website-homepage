<script setup>

import SubPageTitleComponent from "@/components/public/SubPageTitleComponent.vue";
</script>

<template>
  <div class="body">
    <header>
      <sub-page-title-component title="MY PROJECTS" title-color="#FFFFFF" separator-color="#FFFFFF"/>
    </header>
    <main>
      <div class="projects-container">
        <div style="text-align: center; font-size: x-large; color: #CCEADA">🙈 页面施工中 👋</div>
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

      min-height: 500px;

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