<template>
  <v-card>
    <v-card-title>
      {{ smmName }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item> {{ getFollowers() }} {{ followersName }} </v-list-item>
        <v-list-item> {{ getLikes() }} likes </v-list-item>
        <v-list-item> Last post {{ getLastPost() }} </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn class="mx-auto">
        Go to page
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      options: ["facebook", "instagram"],
      required: true
    }
  },

  computed: {
    smmName() {
      return {
        facebook: "Facebook",
        instagram: "Instagram"
      }[this.type];
    },

    followersName() {
      return {
        facebook: "members",
        instagram: "followers"
      }[this.type];
    }
  },

  methods: {
    randomBetween(a, b) {
      return Math.round((b - a) * Math.random() + a);
    },

    getFollowers() {
      return this.randomBetween(50, 300);
    },

    getLikes() {
      return this.randomBetween(500, 3000);
    },

    getLastPost() {
      return `${this.randomBetween(1, 10)}d ago`;
    }
  }
};
</script>

<style></style>
