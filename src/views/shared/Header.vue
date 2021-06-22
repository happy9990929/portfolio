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
        <li>
          <router-link to="/" class="menuItem">Projects</router-link>
        </li>
        <li>
          <router-link to="/about" class="menuItem">About</router-link>
        </li>
        <li>
          <a href="https://happy9990929.github.io/" target="_blank" class="menuItem">Blog</a>
        </li>
        <li>
          <a href="https://github.com/happy9990929" target="_blank" class="menuItem">GitHub</a>
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
