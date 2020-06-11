<template>
  <div id="app">
    <vue-dark-mode
      :metaThemeColor="{
    light: '#f2f2f2 ',
    dark: '#232b32',
    sepia: '#d8c7a2'
  }"
      :modes="[
    'light',
    'dark',
    'system',
    'sepia'
  ]"
    >
      <template v-slot="{ mode }">
        <svg
          v-show="mode === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
        <svg
          v-show="mode === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg
          v-show="mode === 'system'"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        Color mode: {{ mode }}
      </template>
    </vue-dark-mode>
    <Navbar />
    <main>
      <router-view></router-view>
    </main>
    <ProductSelector />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/AppNavbar.vue";
import Footer from "./components/AppFooter.vue";
import ProductSelector from "./components/product/ProductSelector.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ProductSelector
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style>
:root {
  --bg: #fff;
  --color: #333333;
}

html.dark-mode {
  --bg: #232b32 !important;
  --color: #ddd8ca !important;
}
html.sepia-mode {
  --bg: #d8c7a2;
  --color: #ddd8ca;
}
body,
#main-navbar,
#main-navbar * {
  background-color: var(--bg);
  color: var(--color);
}
.vue-dark-mode {
  display: flex;
  margin: 0.3rem auto;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
}
</style>

<style  lang="scss">
svg {
  margin-right: 1rem;
}
</style>