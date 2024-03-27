<script setup>

import {logo, icon} from '@/assets/js/data-export/cdn-resource'

const contactLinks = [
  {
    name: 'GitHub',
    icon: logo.github_light,
    link: 'https://github.com/jiang-taibai',
  }, {
    name: 'Gitee',
    icon: logo.gitee,
    link: 'https://gitee.com/jiang-taibai',
  }, {
    name: 'CSDN',
    icon: logo.csdn,
    link: 'https://blog.csdn.net/qq_29997037',
  }, {
    name: 'JueJin',
    icon: logo.juejin,
    link: 'https://juejin.cn/user/2705275496697383',
  }, {
    name: 'ZhiHu',
    icon: logo.zhihu,
    link: 'https://www.zhihu.com/people/mu-ai-chen-chen-2',
  }, {
    name: 'Bilibili',
    icon: logo.bilibili,
    link: 'https://space.bilibili.com/321436965',
  },
]
const contactTexts = [
  {
    name: 'Gmail',
    text: 'emailtojiang@gmail.com'
  }, {
    name: '163 Mail',
    text: 'emailtojiang@163.com'
  }, {
    name: 'QQ',
    text: '261556009'
  }, {
    name: 'Phone',
    text: '(+86) 13979949146'
  },
]
const wantToSay = {
  title: 'On the Way...',
  sentence: '人生如此短暂，哪来的时间怠慢，保持热爱与耐心勇敢地前行吧！'
}
const records = [{
  name: 'ICP 备案号',
  url: 'https://beian.miit.gov.cn/',
  icon: icon.icp,
  text: '赣ICP备2020012890号-5',
}, {
  name: 'Copyright',
  url: 'https://coderjiang.com',
  icon: icon.copyright,
  text: '2023 Jiang Liu. All Rights Reserved',
}, {
  name: '公安备案',
  url: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36032102000034',
  icon: icon.securityRecord,
  text: '赣公网安备 36032102000034 号',
}]
const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="body">
    <div class="contact-container">
      <div class="contact-list">
        <div class="contact-item">
          <div class="title">Home Page</div>
          <div class="content">
            <a style="cursor: pointer" v-for="link in contactLinks" :href="link.link" target="_blank">
              <img :src="link.icon" :alt="link.name + ' logo'"/>
            </a>
          </div>
        </div>
        <div class="contact-item" v-for="(contactText, index) in contactTexts" :key="index">
          <div class="title">{{ contactText.name }}</div>
          <div class="content">{{ contactText.text }}</div>
        </div>
      </div>
      <div class="want-to-say">
        <div class="title">{{ wantToSay.title }}</div>
        <div class="sentence">{{ wantToSay.sentence }}</div>
      </div>
    </div>
    <div class="separator"/>
    <div class="records">
      <a class="record" v-for="(record, index) in records" :key="index" :href="record.url" target="_blank">
        <img :src="record.icon" :alt="record.name + ' logo'"/>
        <div class="text">{{ record.text }}</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.body {
  background-color: #222222;
  padding: 3% 20%;

  .contact-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    .contact-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      .contact-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;

        .title {
          color: #FFFFFF;
          text-align: right;
          width: 120px;
          font-weight: bold;
        }

        .content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          color: #FFFFFF;

          img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }

    .want-to-say {
      color: #FFFFFF;

      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 1em;
      }

      .sentence {
        font-size: 16px;
      }
    }

  }

  .separator {
    height: 1px;
    background-color: #ffffff;
    width: 70%;
    margin: 40px auto;
  }

  .records {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    font-family: 'SourceHanSansSC-VF', Arial, sans-serif;

    .record {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      gap: 8px;

      img {
        height: 1em;
        width: 1em;
      }

      .text {
        color: #FFFFFF;
      }
    }
  }
}

a {
  text-decoration: none;
}

@media (max-width: 1200px) {
  .body {
    padding: 3% 10%;

    .contact-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .contact-list {
        text-align: left;
      }

      .want-to-say {
        text-align: center;
      }
    }

    .records {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>