<script setup>
import MenuBarComponent from "@/components/public/MenuBarComponent.vue";
import HomeComponent from "@/components/home-page/HomeComponent.vue";
import AboutComponent from "@/components/home-page/AboutComponent.vue";
import ProjectsComponent from "@/components/home-page/ProjectsComponent.vue";
import FooterComponent from "@/components/home-page/FooterComponent.vue";
import MinorProjectsComponent from "@/components/home-page/MinorProjectsComponent.vue";

const toView = (name) => {
  const element = document.getElementById(name)
  if (element) {
    element.scrollIntoView({behavior: "smooth"})
  } else {
    console.error(`Element with id ${name} not found.`)
  }
}
</script>

<template>
  <div>
    <menu-bar-component class="header" @custom-event-scroll-to-view="toView"/>
    <main>
      <home-component id="home" class="part"/>
      <about-component id="about" class="part"/>
      <minor-projects-component id="projects"/>
      <projects-component/>
    </main>
    <footer>
      <footer-component/>
    </footer>
  </div>
</template>

<style scoped lang="less">
@header-height: 80px;

.header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: @header-height;
  box-shadow: 0 10px 100px rgba(0, 0, 0, .1);
}

main {
  margin-top: @header-height;

  .part {
    min-height: calc(100vh - @header-height);
  }
}


</style>