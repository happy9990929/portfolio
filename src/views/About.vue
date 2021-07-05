<template>
  <section class="wrapper">
    <div class="banner about_banner">
      <div class="container about_container">
        <div class="photo_box">
          <div class="photo_circle animate__animated animate__bounceIn" ref="photo_circle">
            <div class="photo">
              <img src="@/assets/images/about/wen.jpg" class="img-fluid" />
            </div>
          </div>

          <div class="photo_text">Hello, 我是王羿文<br /></div>
        </div>
      </div>
    </div>
    <div class="content_padding">
      <div class="container animate__animated animate__fadeInUp">
        <h1 class="title">About Me</h1>
        <div class="about_box">
          <div class="about_text">
            從事網頁設計開發經驗共八年多，有開發客戶、自家網站經驗，並有兩年 Vue
            框架開發經驗。現任職前端設計師，與工程共同開發使用 Vue 框架的網站平台。<br /><br />
          </div>
          <div class="about_text">
            <div class="skill_box">
              <div class="skill_item">
                <span>Vue.js</span>
                <span class="percent">75%</span>
              </div>
              <div class="progress">
                <span class="progress_bar" style="width: 75%;"></span>
              </div>
            </div>
            <div class="skill_box">
              <div class="skill_item">
                <span>Javascript / ES6</span>
                <span class="percent">80%</span>
              </div>
              <div class="progress">
                <span class="progress_bar" style="width: 80%;"></span>
              </div>
            </div>
            <div class="skill_box">
              <div class="skill_item">
                <span>CSS3</span>
                <span class="percent">90%</span>
              </div>
              <div class="progress">
                <span class="progress_bar" style="width: 90%;"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- 電腦版skill -->
        <superslide :options="options" class="slideBox" v-if="isMobile === false">
          <div class="bd">
            <ul class="lists">
              <li class="list" v-for="item in skill" :key="item.name">
                <div class="list_img_box">
                  <img :src="`${publicPath}images/skill/${item.img}.png`" />
                  <span class="list_text">{{ item.name }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="hd">
            <ul></ul>
          </div>
        </superslide>

        <!-- 手機板skill -->
        <div class="m_skill">
          <ul class="lists">
            <li class="list" v-for="item in skill" :key="item.name">
              <div class="list_img_box">
                <img :src="`${publicPath}images/skill/${item.img}.png`" />
                <span class="list_text">{{ item.name }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    function animate(dom, effect) {
      window.addEventListener("scroll", () => {
        const scrollHeight = document.documentElement.scrollTop;
        const obj = dom;
        const objTop = obj.offsetTop;
        const windowHeight = window.innerHeight;
        if (scrollHeight + windowHeight > objTop) {
          obj.classList.add("animate__animated", effect);
        }
        if (scrollHeight < objTop - windowHeight || scrollHeight > objTop + windowHeight) {
          obj.classList.remove("animate__animated", effect);
        }
      });
    }
    // animate(this.$refs.photo_circle, "animate__bounceIn");
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      options: {
        titCell: ".hd ul", //鼠标的触发元素对象
        mainCell: ".bd ul", //切换元素的包裹层对象
        autoPage: true,
        effect: "left",
        autoPlay: true,
        scroll: 6, //每次滾動個數
        vis: 6 //可視個數
      },
      skill: [
        { name: "VUE.js", img: "VUE" },
        { name: "Javascript", img: "JS" },
        { name: "HTML", img: "HTML" },
        { name: "CSS3", img: "CSS" },
        { name: "SASS/SCSS", img: "SASS" },
        { name: "jQuery", img: "JQ" },
        { name: "Git", img: "GIT" },
        { name: "Github", img: "GITHUB" },
        { name: "Bootstrap", img: "BS" },
        { name: "Photoshop", img: "PS" },
        { name: "XD", img: "XD" },
        { name: "Illustrator", img: "AI" }
      ]
    };
  },
  computed: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
    }
  }
};
</script>
<style lang="scss" scoped>
.about_banner {
  background-image: url("~@/assets/images/about/banner.jpg");
  background-position-y: top;
}
.about_container {
  height: 100%;
}
.photo_box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-flow: column;
  @media screen and (min-width: 480px) {
    flex-flow: row;
  }
}
.photo_circle {
  border: 5px solid rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  padding: 5px;
  @media screen and (min-width: 992px) {
    padding: 10px;
    border: 10px solid rgba(255, 255, 255, 0.5);
  }
}
.photo {
  border-radius: 100%;
  width: 30vw;
  height: 30vw;
  overflow: hidden;
  @media screen and (min-width: 480px) {
    width: 20vw;
    height: 20vw;
  }
  @media screen and (min-width: 992px) {
    width: 350px;
    height: 350px;
  }
}
.photo_text {
  font-size: 4vw;
  margin-left: 0;
  color: #fff;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 1.5rem;
    margin-left: 30px;
    text-align: left;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
}
.about_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  @media screen and (min-width: 768px) {
    flex-flow: row;
  }
}
.about_text {
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 48%;
  }
}
.skill_box {
  margin-bottom: 20px;
}
.skill_item {
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
}
.percent {
  color: #e7a01e;
}
.progress {
  width: 100%;
  height: 5px;
  background-color: #595959;
  margin-top: 5px;
}
.progress_bar {
  height: 5px;
  background-color: #e7a01e;
  display: block;
}
.slideBox {
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    overflow: hidden;
    margin: 50px auto 0;
    width: 630px;
  }
  @media screen and (min-width: 992px) {
    width: 895px;
  }
  @media screen and (min-width: 1260px) {
    width: 1200px;
  }
}
.lists {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list {
  text-align: center;
  margin: 10px;
  @media screen and (min-width: 768px) {
    margin: 0 10px 0 0;
  }
  @media screen and (min-width: 1260px) {
    margin-right: 20px;
  }
  img {
    width: 50px;
    @media screen and (min-width: 992px) {
      width: 60px;
    }
    @media screen and (min-width: 1260px) {
      width: 80px;
    }
  }
}
.list_img_box {
  background-color: #fff;
  border-radius: 20px;
  width: 110px;
  height: 110px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    width: 95px;
    height: 95px;
    padding-top: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 140px;
    height: 140px;
    padding-top: 25px;
  }
  @media screen and (min-width: 1260px) {
    width: 180px;
    height: 180px;
    padding-top: 40px;
  }
}
.list_text {
  display: block;
}
::v-deep .hd {
  ul {
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin-top: 50px;
    li {
      background-color: #595959;
      border-radius: 100%;
      margin: 0 3px;
      width: 14px;
      height: 14px;
      font-size: 0;
    }
    .on {
      background-color: #e7a01e;
    }
  }
}
.m_skill {
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
}
</style>
