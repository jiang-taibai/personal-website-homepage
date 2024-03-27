<script setup>
import SubPageTitleComponent from "@/components/public/SubPageTitleComponent.vue";
import {logo} from '@/assets/js/data-export/cdn-resource'

const intros = [
  '我叫刘江，一直以来对计算机有着独特的爱好，很高兴本科与研究生阶段都能学习我最热爱的计算机专业！目前为在读研究生。就读于武汉理工大学，攻读软件工程硕士学位。',
  '我热衷于程序设计与项目开发，本科期间共荣获十余项国家级奖项、二十余项省部级奖项。最大的爱好便是能够利用自己的技术造福社区，截至目前共拥有开源/闭源项目 6 项。其中一个项目试运行一年，共有 237 名用户注册使用。',
  '希望在未来能够保持学习与思考，制作更多更好的软件 :-)'
]

const logos = {
  'HTML': logo.html,
  'CSS': logo.css,
  'Docker': logo.docker,
  'Java': logo.java,
  'JavaScript': logo.javascript,
  'MySQL': logo.mysql,
  'Electron': logo.electron,
  'Python': logo.python,
  'Spring': logo.spring,
  'Vue': logo.vue,
  'C++': logo.cpp,
  'Tomcat': logo.tomcat,
  'NGINX': logo.nginx,
  'Maven': logo.maven,
}

const skills = ['HTML', 'CSS', 'JavaScript', 'Vue', 'Java', 'Spring', 'Docker', 'MySQL', 'Electron', 'Python', 'C++', 'NGINX', 'Tomcat', 'Maven']
</script>

<template>
  <div class="body">
    <header>
      <sub-page-title-component title="ABOUT ME"/>
    </header>
    <main>
      <div class="introduction-container">
        <div class="introduction">
          <div class="title">Get to know me!</div>
          <div class="essay">
            <p v-for="(intro, index) in intros" :key="index">{{ intro }}</p>
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="skills">
          <div class="title">My Skills</div>
          <div class="skill-list">
            <div class="skill-item" v-for="(skill, index) in skills" :key="index">
              <img class="logo" :src="logos[skill]" :alt="skill + '\'s logo'"/>
              <div class="name">{{ skill }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="less">
.body {

  main {
    font-size: 20px;
    display: flex;
    gap: 80px;
    padding-bottom: 60px;

    .title {
      font-weight: bold;
      font-size: 40px;
      margin-bottom: 20px;
    }

    .introduction-container {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      font-size: 30px;

      .introduction {
        max-width: 600px;

        .essay {
          text-indent: 2em;
        }
      }
    }

    .skills-container {
      width: 50%;
      display: flex;
      justify-content: flex-start;

      .skills {
        max-width: 600px;
        font-size: 30px;

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;

          .skill-item {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #E7E7E7;
            border-radius: 8px;
            padding: 10px 20px;
            margin-bottom: 10px;

            .logo, .logo img {
              width: 30px;
              height: 30px;
            }

            .name {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    main {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .introduction-container {
        width: 100%;
        justify-content: center;
      }

      .skills-container {
        width: 100%;
        justify-content: center;
      }
    }

  }
}
</style>