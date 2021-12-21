<template>
  <div>
    <section id="top">
      <img
        class="sub-title"
        src="./assets/img/ayako-tanaka.svg"
        alt="Ayako Tanaka"
      />
    </section>
    <section id="about">
      <div class="container">
        <h1 class="section-title">About me</h1>
        <div class="profile">
          <div class="picture"></div>
          <div class="content">
            <div class="d-flex">
              <h2>Ayako Tanaka</h2>
            </div>
            <ul>
              <li>2001年 千葉県生まれ</li>
              <li>2019年 東京理科大学入学</li>
              <li>
                2020年現在 株式会社ShinonomeのPlay Groundという
                <br />コミュニティでプログラミングを学んでいます。
              </li>
            </ul>
            <a class="read-more ml-auto" href="about-me">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <section id="skills">
      <div class="container">
        <h1 class="section-title">Skills</h1>
        <div class="content-wrapper">
          <div class="skill-circle">
            <div v-for="skill in skillsCircle" :key="skill.title" class="skill">
              <div
                class="circle"
                :style="{
                  backgroundImage: `radial-gradient(#fff 60%, transparent 61%),
      conic-gradient(
        #f9a0a0 0deg,
        #ffc691 ${skill.orangeDeg}deg,
        #cde786 ${skill.yellowDeg}deg,
        #78d582 ${skill.greenDeg}deg,
        #e4e4e4 ${skill.greenDeg}deg 360deg
      )`,
                }"
              >
                <img :src="skill.imgUrl" alt="html" />
              </div>
              <span>{{ skill.title }}</span>
            </div>
          </div>
          <a class="read-more ml-auto" href="skills">Read More</a>
        </div>
      </div>
    </section>
    <section id="activity">
      <div class="container">
        <h1 class="section-title">Activity</h1>
        <div class="content-wrapper">
          <img
            src="https://grass-graph.appspot.com/images/ayakotanaka0224.png"
            alt="github"
          />
          <p class="figma-contributes">{{ allContributes }} contributions</p>
          <div class="table">
            <div
              v-for="contribute in contributes"
              :key="contribute.day"
              class="rectangle"
              v-bind:class="[
                contribute.count > 30
                  ? 'contribute-5'
                  : contribute.count > 20
                  ? 'contribute-4'
                  : contribute.count > 10
                  ? 'contribute-3'
                  : contribute.count > 1
                  ? 'contribute-2'
                  : 'contribute-1',
              ]"
            >
              <span class="figma-tooltip"
                >{{ contribute.count }} version history on
                {{ contribute.day }}</span
              >
            </div>
          </div>
          <div class="figma-base">
            Less
            <div class="rectangle contribute-1"></div>
            <div class="rectangle contribute-2"></div>
            <div class="rectangle contribute-3"></div>
            <div class="rectangle contribute-4"></div>
            <div class="rectangle contribute-5"></div>
            More
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.section-title {
  display: grid;
  align-items: center;
  justify-content: start;
  grid-auto-flow: column;
  gap: 12px;
  font-weight: bold;
  white-space: nowrap;
  &:after {
    content: "";
    width: 350px;
    height: 2px;
    background-color: #515151;
    max-width: 40%;
  }
}
.read-more {
  position: relative;
  color: #515151;
  transition: 0.2s;
  &:before,
  &:after {
    content: "";
    position: absolute;
  }
  &:before {
    width: calc(100% + 16px);
    height: 1px;
    bottom: -2px;
    left: -4px;
    background: #575757;
  }
  &:after {
    right: -10px;
    bottom: -5px;
    width: 8px;
    height: 8px;
    border-top: 1px solid #575757;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:hover {
    color: #ffb874;
    &:before {
      background: #ffb874;
    }
    &:after {
      border-top: 1px solid#FFB874;
    }
  }
}

section:nth-of-type(n + 2) {
  padding: 100px 0;
}

#top {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  background: 0% / cover no-repeat url(./assets/img/top.svg);
  .sub-title {
    display: block;
    margin: 0 auto;
    width: 54%;
  }
}
#about {
  background: 0% / cover no-repeat url(./assets/img/about.svg);
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px;
    .picture {
      height: 200px;
      width: 200px;
      background: 0% / cover no-repeat url(./assets/img/ayako.jpg);
      border-radius: 20px;
      margin-right: 60px;
    }
    .content {
      display: grid;
      gap: 24px;
      flex-direction: column;
      align-items: flex-start;
      h2 {
        position: relative;
        z-index: 0;
        &:before {
          content: "";
          height: 10px;
          width: calc(100% + 12px);
          background: #ffe2c6;
          position: absolute;
          z-index: -1;
          left: -6px;
          bottom: 0px;
        }
      }
      ul {
        list-style: none;
        text-align: left;
        display: grid;
        gap: 12px;
      }
    }
  }
}
#skills {
  background: 0% / cover no-repeat url(./assets/img/skills.svg);
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .skill-circle {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin: 0 100px;
      .skill {
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin: 32px 36px;
      }
      .circle {
        position: relative;
        width: 144px;
        height: 144px;
        border-radius: 50%;
        img {
          position: absolute;
          width: 80px;
          height: auto;
          top: calc(50% - 40px);
          right: calc(50% - 40px);
        }
      }
      span {
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
  .read-more {
    margin-right: 100px;
  }
}
#activity {
  .content-wrapper {
    max-width: 688px;
    margin: auto;
  }
  img {
    margin: 100px 0;
  }
  p.figma-contributes {
    text-align: left;
  }
  .table {
    display: flex;
    flex-direction: column;
    height: 88px;
    gap: 2px;
    flex-wrap: wrap;
  }
  .rectangle {
    background-color: #ebedf0;
    border: 1px solid rgba(27, 31, 35, 0.06);
    border-radius: 2px;
    width: 10px;
    height: 10px;
    position: relative;
    cursor: pointer;
    &.contribute-5 {
      background-color: #f24e1e;
    }
    &.contribute-4 {
      background-color: #a259ff;
    }
    &.contribute-3 {
      background-color: #0acf83;
    }
    &.contribute-2 {
      background-color: #1abcfe;
    }
    &:hover .figma-tooltip {
      background-color: black;
      border-radius: 4px;
      display: flex;
      left: 50%;
      padding: 6px 10px;
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
      z-index: 1;
      color: #fff;
      white-space: nowrap;
    }
  }
  .figma-base {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 4px;
  }
  .figma-tooltip {
    display: none;
  }
}
@media screen and (max-width: 991px) {
  #top .sub-title {
    width: 100%;
  }

  .picture {
    margin-right: 0;
    margin-bottom: 20px;
  }
  #skills .skill-circle {
    margin: 0 30px;
  }
}
@media screen and (max-width: 550px) {
  #top {
    padding: 20px;
  }
  #skills .skill-circle .skill {
    margin: 32px 12px;
  }
}
</style>

<script>
import figmaContributes from "./figma.js";
export default {
  data: () => {
    const skillsCircle = [
      {
        title: "HTML",
        imgUrl: require("./assets/img/html.png"),
        orangeDeg: 100,
        yellowDeg: 220,
        greenDeg: 310,
      },
      {
        title: "CSS",
        imgUrl: require("./assets/img/css.png"),
        orangeDeg: 100,
        yellowDeg: 220,
        greenDeg: 300,
      },
      {
        title: "Figma",
        imgUrl: require("./assets/img/figma.png"),
        orangeDeg: 100,
        yellowDeg: 220,
        greenDeg: 310,
      },
      {
        title: "JavaScript",
        imgUrl: require("./assets/img/js.png"),
        orangeDeg: 100,
        yellowDeg: 180,
        greenDeg: 180,
      },
      {
        title: "PHP",
        imgUrl: require("./assets/img/php.png"),
        orangeDeg: 100,
        yellowDeg: 220,
        greenDeg: 260,
      },
      {
        title: "WordPress",
        imgUrl: require("./assets/img/wp.png"),
        orangeDeg: 100,
        yellowDeg: 220,
        greenDeg: 280,
      },
      {
        title: "Vue",
        imgUrl: require("./assets/img/vue.png"),
        orangeDeg: 60,
        yellowDeg: 60,
        greenDeg: 60,
      },
      {
        title: "React",
        imgUrl: require("./assets/img/react.png"),
        orangeDeg: 60,
        yellowDeg: 180,
        greenDeg: 180,
      },
      {
        title: "TypeScript",
        imgUrl: require("./assets/img/ts.png"),
        orangeDeg: 60,
        yellowDeg: 160,
        greenDeg: 160,
      },
    ];
    return {
      skillsCircle: skillsCircle,
      contributes: [],
      allContributes: 0,
    };
  },
  async mounted() {
    const contributes = await figmaContributes();
    this.contributes = contributes;
    let contributesCount = 0;
    contributes.map((contribute) => (contributesCount += contribute.count));
    this.allContributes = contributesCount;
  },
};
</script>
