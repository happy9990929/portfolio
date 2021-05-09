<template>
<section class="wrapper">
  <div class="d-flex flex-wrap animate__animated animate__fadeIn">
    <router-link v-for="item in works" :key="item.id + item.title"
    :to="`/work/${item.id}`" tag="figure" class="figure">
      <img :src="`/images/works/${item.pictrue}`" class="img-fluid"/>
      <figcaption class="figcaption">{{ item.title }}</figcaption>
    </router-link>
  </div>
</section>
</template>
<script>
export default {
  data() {
    return {
      works: [],
    };
  },
  created() {
    this.getWorks();
  },
  methods: {
    getWorks() {
      const loader = this.$loading.show();
      this.$http.get('/data/works.json').then((res) => {
        this.works = res.data.works;
        loader.hide();
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
