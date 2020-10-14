<template>
  <v-app light>
    <slot></slot>
    <v-footer color="primary" dark>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style>
.app {
  background-color: #f9f8ed;
}
</style>
