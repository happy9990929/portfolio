<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_logo">
        <img src="@/assets/images/logo.png" class="img-fluid" />
      </div>
      <p class="footer_contact">
        <a href="mailto:lala9990929@gmail.com">lala9990929@gmail.com</a>
        <br />
      </p>
      <div class="footer_icon_box">
        <a href="https://github.com/happy9990929" target="_blank" class="footer_icon">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://codepen.io/bobee" target="_blank" class="footer_icon">
          <i class="fab fa-codepen"></i>
        </a>
        <a href="https://lala9990929.medium.com/" target="_blank" class="footer_icon">
          <i class="fab fa-medium"></i>
        </a>
      </div>
      <div style="font-size: 12px; margin-top: 20px;">© E WEN</div>
    </div>
    <div v-show="gotopIcon">
      <div class="gotop" @click="scrollTop">
        <span>
          <i class="fas fa-arrow-up"></i>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      gotopIcon: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.gotop);
  },
  methods: {
    gotop() {
      let scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrollTop > 100) {
        this.gotopIcon = true;
      } else {
        this.gotopIcon = false;
      }
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.gotop);
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
}
.footer_contact {
  a {
    transition: all 0.4s ease;
  }
}
.footer_icon_box {
  display: flex;
  justify-content: center;
}
.footer_icon {
  width: 40px;
  height: 40px;
  display: block;
  line-height: 40px;
  font-size: 2rem;
  transition: all 0.4s ease;
  margin: 0 5px;
  &:hover {
    background-color: #505050;
    color: #fff;
  }
}
.gotop {
  right: 1rem;
  bottom: 1rem;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #e7a01e;
  color: #fff;
  border-radius: 50%;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
}
</style>
