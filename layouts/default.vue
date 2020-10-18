<template>
  <base-layout>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="false"
      app
      class="navbar"
    >
      <v-list>
        <v-list-item link class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Hola, Susanna!
            </v-list-item-title>
            <v-list-item-subtitle
              >view my profile<v-icon small
                >mdi-chevron-right</v-icon
              ></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app color="primary" flat>
      <v-btn icon @click.stop="miniVariant = !miniVariant" color="white">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn color="primary" depressed>
        Choose project <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-spacer />
      <v-text-field
        class="search-field"
        solo
        dense
        single-line
        label="Search"
        prepend-inner-icon="mdi-magnify"
        clearable
      ></v-text-field>
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
      <v-container>
        <nuxt />
      </v-container>
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
      drawer: true,
      items: [
        {
          icon: "mdi-home",
          title: "Dashboard",
          to: "/app"
        },
        {
          icon: "mdi-calendar-check",
          title: "Events",
          to: "/app/events"
        },
        {
          icon: "mdi-file-document-multiple",
          title: "Docs",
          to: "/app/docs"
        },
        {
          icon: "mdi-school",
          title: "Tutorials",
          to: "/app/tutorials"
        },
        {
          icon: "mdi-account-group",
          title: "Matchmaking",
          to: "/app/matchmaking"
        }
      ],
      miniVariant: false,
      navigation: [
        {
          title: "About us",
          to: null
        },
        {
          title: "Sign out",
          to: "/"
        }
      ]
    };
  }
};
</script>

<style>
.search-field .v-text-field__details {
  display: none;
}
</style>
