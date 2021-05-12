<template>
  <section class="wrapper">
    <div class="product_content animate__animated animate__fadeIn">
      <div class="container">
        <h1 class="product_title">{{ project.title }}</h1>
        <ul class="imgs_box">
          <li v-if="project.image01">
            <img :src="`${publicPath}images/project/${project.image01}`" class="img-fluid" />
          </li>
          <li v-if="project.image02">
            <img :src="`${publicPath}images/project/${project.image02}`" class="img-fluid" />
          </li>
          <li v-if="project.image03">
            <img :src="`${publicPath}images/project/${project.image03}`" class="img-fluid" />
          </li>
          <li v-if="project.image04">
            <img :src="`${publicPath}images/project/${project.image04}`" class="img-fluid" />
          </li>
        </ul>
        <a :href="project.demo" target="_blank" class="demo" v-if="project.demo">網站範例</a>
        <div class="moreBox">
          <router-link to="/" class="more">查看更多</router-link>
        </div>
      </div>
    </div>
    <div class="arrow next" @click="nextPage">
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
    <div class="arrow prev" @click="prevPage">
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      projects: [],
      project: [],
      idx: 0,
      next: 0,
      prev: 0
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      const loader = this.$loading.show();
      this.$http
        .get(`${this.publicPath}data/db.json`)
        .then(res => {
          this.projects = res.data.projects;
          res.data.projects.forEach((item, idx) => {
            if (item.id === this.$route.params.id) {
              loader.hide();
              this.project = item;
              this.idx = idx;
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    nextPage() {
      const projectsNum = this.projects.length;
      this.next = this.idx + 1;
      if (this.next !== projectsNum) {
        this.$router.push(`/project/${this.projects[this.next].id}`);
        this.getProjects();
      }
    },
    prevPage() {
      this.prev = this.idx - 1;
      if (this.prev >= 0) {
        this.$router.push(`/project/${this.projects[this.prev].id}`);
        this.getProjects();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.demo {
  width: 200px;
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  color: #333333;
  border: 1px solid #333333;
  display: block;
  margin-bottom: 100px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #e7a01e;
  }
}
.moreBox {
  width: 100%;
  border-top: 1px solid #cfcfcf;
  padding-top: 50px;
}
.more {
  width: 200px;
  padding: 15px 0;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  color: #e7a01e;
  border: 1px solid #e7a01e;
  display: block;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #e7a01e;
  }
}
@media screen and (min-width: 768px) {
  .arrow {
    position: fixed;
    top: 50%;
    font-size: 2.5rem;
    color: #e7a01e;
    display: block;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.35s ease-in-out;
    &.next {
      right: 5%;
      &:hover {
        transform: translateX(20px);
      }
    }
    &.prev {
      left: 5%;
      &:hover {
        transform: translateX(-20px);
      }
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
