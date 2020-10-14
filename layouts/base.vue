<template>
  <v-app class="app">
    <slot></slot>
    <v-footer color="primary" class="footer justify-center">
      <span
        >&copy; {{ new Date().getFullYear() }} - Paula & Serge & Francesco</span
      >
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.app {
  background-color: #f9f8ed;
  /* background-color: white; */

  .navbar,
  .footer {
    color: white;
  }

  .footer {
    z-index: 6;
  }
}
</style>
