<template>
  <v-card class="mx-auto mt-10 mb-10" max-width="344">
    <v-img
      :src="imageurl"
      width="100%"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      <slot></slot>
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>
        See more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    imageurl: {
      type: String
    }
  }
};
</script>

<style></style>
