<template>
  <v-app light>
    <v-app-bar app fixed color="primary" dark flat>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items flat>
        <v-btn
          v-for="(item, i) in navigation"
          :key="i"
          :to="item.to"
          :title="item.title"
          depressed
          color="primary"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main class="app">
      <nuxt />
    </v-main>

    <v-footer app color="primary" dark>
      <span>this is our footer</span>
    </v-footer>
  </v-app>
</template>

<script>
function foobar() {
  return 1;
}

export default {
  data() {
    return {
      title: "Team Environment",
      navigation: [
        {
          title: "Home",
          to: "/test"
        },
        {
          title: "About us",
          to: "/test"
        },
        {
          title: "Contact",
          to: "/test"
        }
      ]
    };
  }
};
</script>

<style scoped>
.app {
  background-color: #f9f8ed;
}
</style>
