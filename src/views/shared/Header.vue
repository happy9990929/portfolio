<template>
  <header class="header">
    <div class="header_logo_box d-flex align-items-center justify-content-center">
      <span class="openMenu" @click="openMenu">
        <i class="fas fa-bars"></i>
      </span>
      <router-link to="/" class="header_logo">
        <img src="@/assets/images/logo.png" class="img-fluid" />
      </router-link>
    </div>
    <nav class="menu" ref="menu">
      <span class="closeMenu" @click="closeMenu">
        <i class="fas fa-times"></i>
      </span>
      <ul class="menuItems">
        <router-link tag="li" class="menuItem" to="/">Projects</router-link>
        <!-- <router-link tag="li" class="menuItem" to="/works">Company works</router-link> -->
        <router-link tag="li" class="menuItem" to="/about">About</router-link>
        <li class="menuItem">
          <a href="https://happy9990929.github.io/" target="_blank">Blog</a>
        </li>
        <li class="menuItem">
          <a href="https://github.com/happy9990929" target="_blank">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$refs.menu.style.width = "100%";
    },
    closeMenu() {
      this.$refs.menu.style.width = 0;
    }
  },
  mounted() {
    const menuItem = document.querySelectorAll(".menuItem");
    menuItem.forEach(item => {
      item.addEventListener("click", () => {
        this.closeMenu();
      });
    });
  }
};
</script>
