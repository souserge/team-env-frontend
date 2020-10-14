<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between" style="height: 100%">
      <v-img :src="imageurl" width="35%" height="100%" />
      <div>
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </div>
    </div>
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
