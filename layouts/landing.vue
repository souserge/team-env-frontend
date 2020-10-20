<template>
  <base-layout>
    <v-app-bar app fixed color="primary" class="navbar" flat>
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
  </base-layout>
</template>

<script>
import BaseLayout from "~/layouts/base.vue";

export default {
  components: {
    BaseLayout
  },

  head: {
    title: "Welcome!"
  },

  data() {
    return {
      title: "Team Environment",
      navigation: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "About us",
          to: "/#about-us"
        },
        {
          title: "Contact",
          to: "/#contact"
        },
        {
          title: "Log in",
          to: "/app"
        }
      ]
    };
  }
};
</script>
