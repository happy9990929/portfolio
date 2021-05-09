<template>
<section class="wrapper">
<div class="product_content animate__animated animate__fadeIn">
  <div class="container">
    <h1 class="product_title">{{work.title}}</h1>
    <ul class="imgs_box">
      <li v-if="work.image01">
        <img :src="`/images/work/${work.image01}`" class="img-fluid"/>
      </li>
      <li v-if="work.image02">
        <img :src="`/images/work/${work.image02}`" class="img-fluid"/>
      </li>
      <li v-if="work.image03">
        <img :src="`/images/work/${work.image03}`" class="img-fluid"/>
      </li>
      <li v-if="work.image04">
        <img :src="`/images/work/${work.image04}`" class="img-fluid"/>
      </li>
    </ul>
  </div>
</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      work: [],
    };
  },
  created() {
    this.getWorks();
  },
  methods: {
    getWorks() {
      const loader = this.$loading.show();
      this.$http.get('/data/works.json').then((res) => {
        res.data.works.forEach((item) => {
          if (item.id === this.$route.params.id) {
            this.work = item;
            loader.hide();
          }
        });
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
