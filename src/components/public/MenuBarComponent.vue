<script>
import {profile} from '@/assets/js/data-export/cdn-resource'

export default {
  data() {
    return {
      websiteLogo: profile.avatar,
    }
  },
  methods: {
    toView(id) {
      this.$emit('custom-event-scroll-to-view', id)
    }
  }
}

</script>

<template>
  <div class="menubar">
    <div class="left">
      <div class="logo"><img :src="websiteLogo" alt="LOGO"></div>
      <div class="website-name">JIANG</div>
    </div>
    <div class="right">
      <div class="nav-item"><a @click="toView('home')">HOME</a></div>
      <div class="nav-item"><a @click="toView('about')">ABOUT</a></div>
      <div class="nav-item"><a @click="toView('projects')">PROJECTS</a></div>
    </div>
  </div>

</template>

<style scoped lang="less">
@logo-size: 60px;

.menubar {
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 1.35em;
  backdrop-filter: blur(50px);

  .left {
    min-width: 300px;
    padding-left: 40px;
    display: flex;
    align-items: center;

    .logo {
      height: 100%;
      display: flex;
      align-items: center;

      img {
        height: @logo-size;
        width: @logo-size;
        border-radius: calc(@logo-size / 2);
      }
    }

    .website-name {
      margin-left: 20px;
      font-size: calc(@logo-size / 2);
      font-weight: bold;
    }
  }

  .right {
    flex: 1;
    min-width: 400px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
    padding-right: 40px;

    .nav-item {
      a {
        cursor: pointer;
        position: relative;
        display: inline-block;
        outline: none;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
      }

      a:hover,
      a:focus {
        outline: none;
      }

      /* Effect 1: Brackets */

      a::before,
      a::after {
        display: inline-block;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
        -moz-transition: -moz-transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s;
      }

      a::before {
        margin-right: 10px;
        content: '[';
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        transform: translateX(20px);
      }

      a::after {
        margin-left: 10px;
        content: ']';
        -webkit-transform: translateX(-20px);
        -moz-transform: translateX(-20px);
        transform: translateX(-20px);
      }

      a:hover::before,
      a:hover::after,
      a:focus::before,
      a:focus::after {
        opacity: 1;
        -webkit-transform: translateX(0px);
        -moz-transform: translateX(0px);
        transform: translateX(0px);
      }
    }
  }
}
</style>