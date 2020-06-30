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
          v-show="mode === 'sepia'"
          id="Capa_1"
          enable-background="new 0 0 512 512"
          height="20px"
          viewBox="0 0 512 512"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="m322 401c44.112 0 80 35.888 80 80 0 5.522 4.478 10 10 10s10-4.478 10-10c0-44.112 35.888-80 80-80 5.522 0 10-4.478 10-10s-4.478-10-10-10c-44.112 0-80-35.888-80-80 0-5.522-4.478-10-10-10s-10 4.478-10 10c0 44.112-35.888 80-80 80-5.522 0-10 4.478-10 10s4.478 10 10 10zm90-56.429c9.816 20.194 26.234 36.612 46.429 46.429-20.194 9.816-36.612 26.234-46.429 46.429-9.816-20.194-26.234-36.612-46.429-46.429 20.195-9.816 36.613-26.234 46.429-46.429z"
            />
            <path
              d="m10 101c27.57 0 50 22.43 50 50 0 5.522 4.477 10 10 10s10-4.478 10-10c0-27.57 22.43-50 50-50 5.523 0 10-4.478 10-10s-4.477-10-10-10c-27.57 0-50-22.43-50-50 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 27.57-22.43 50-50 50-5.523 0-10 4.478-10 10s4.477 10 10 10zm60-33.976c5.913 9.81 14.166 18.064 23.975 23.976-9.81 5.912-18.063 14.166-23.975 23.976-5.913-9.81-14.166-18.064-23.975-23.976 9.809-5.912 18.062-14.166 23.975-23.976z"
            />
            <circle cx="279" cy="294" r="10" />
            <path
              d="m305.678 271.194c2.817 4.749 8.954 6.315 13.703 3.496 26.118-15.498 56.07-23.69 86.619-23.69 5.522 0 10-4.478 10-10s-4.478-10-10-10c-93.738 0-170-76.262-170-170 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 93.738-76.262 170-170 170-5.523 0-10 4.478-10 10s4.477 10 10 10c93.738 0 170 76.262 170 170 0 5.522 4.477 10 10 10s10-4.478 10-10c0-30.549 8.192-60.501 23.69-86.619 2.818-4.75 1.253-10.885-3.496-13.703-4.753-2.821-10.886-1.253-13.703 3.496-6.764 11.398-12.282 23.445-16.498 35.931-18.953-55.876-63.24-100.157-119.118-119.105 55.884-18.95 100.175-63.241 119.125-119.125 18.948 55.878 63.229 100.165 119.104 119.118-12.485 4.216-24.532 9.734-35.931 16.498-4.748 2.819-6.314 8.953-3.495 13.703z"
            />
          </g>
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
      <AppShell></AppShell>
    </main>
    <go-top :size="40" :bottom="52" :max-width="0" :right="30" bg-color="#000">Back to top</go-top>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import Footer from './components/AppFooter.vue';
import AppShell from './components/AppShell.vue';
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    AppShell,
    GoTop
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
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

<style  scoped lang="scss">
button {
  position: fixed;
  z-index: 300;
  left: 50%;
  margin-left: -90px;
}
@media all and (max-width: 1152px) and (min-width: 992px) {
 button {
left: 60%;
}
}
</style>