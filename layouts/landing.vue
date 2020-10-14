<template>
  <base-layout>
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
  </base-layout>
</template>

<script>
import BaseLayout from "~/layouts/base.vue";

export default {
  components: {
    BaseLayout
  },

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
        },
        {
          title: "Log in",
          to: "/dashboard"
        }
      ]
    };
  }
};
</script>
