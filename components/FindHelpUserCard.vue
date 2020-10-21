<template>
  <v-card class="mx-auto my-12" max-width="400">
    <v-img height="250" :src="imageurl"></v-img>

    <v-card-title>{{ name }} {{ surname }}</v-card-title>

    <v-card-text>
      <div class="mb-4">
        <span v-for="(kw, i) in keywords" :key="i" class="my-4 subtitle-1">
          {{ kw }}<span v-if="i != keywords.length - 1"> • </span>
        </span>
      </div>

      <div>{{ description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>{{ name }}'s availability</v-card-title>

    <v-card-text>
      <v-chip-group v-for="(time, i) in availability" :key="i" column>
        <v-chip>{{ time }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" to="/app/matchmaking/contact-volunteer" text>
        Contact
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    surname: {
      type: String
    },
    keywords: {
      type: Array
    },
    description: {
      type: String
    },
    availability: {
      type: Array
    },
    imageurl: {
      type: String
    }
  }
};
</script>

<style></style>
