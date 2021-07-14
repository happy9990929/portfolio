<template>
  <section class="wrapper">
    <div class="product_content animate__animated animate__fadeIn">
      <div class="container">
        <div class="content_box">
          <h1 class="product_title">{{ project.title }}</h1>
          <p class="product_text">
            <span>使用技術：</span><span class="content_text">{{ project.skill }}</span>
          </p>
          <p class="product_text">
            <span>內容介紹：</span><span class="content_text">{{ project.content }}</span>
          </p>
        </div>
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
