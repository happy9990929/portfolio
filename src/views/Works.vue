<template>
  <section class="wrapper">
    <div class="d-flex flex-wrap animate__animated animate__fadeIn">
      <router-link
        v-for="item in projects"
        :key="item.id + item.title"
        :to="`/work/${item.id}`"
        tag="figure"
        class="figure"
      >
        <img :src="`${publicPath}images/works/${item.pictrue}`" class="img-fluid" />
        <figcaption class="figcaption">{{ item.title }}</figcaption>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      projects: []
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      const loader = this.$loading.show();
      this.$http
        .get(`${this.publicPath}data/works.json`)
        .then(res => {
          this.projects = res.data.projects;
          loader.hide();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
