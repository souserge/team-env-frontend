<template>
  <v-app light>
    <slot></slot>
    <v-footer app color="primary justify-center" dark>
      <span>&copy; {{ new Date().getFullYear() }} - Paula & Serge & Francesco</span>
    </v-footer>
  </v-app>
</template>

<style>
.app {
  background-color: #f9f8ed;
}
</style>
