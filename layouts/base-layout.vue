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
