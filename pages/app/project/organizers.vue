<template>
  <v-row>
    <v-col>
      <h2>Great, you've managed them all</h2>
      <v-btn to="/app">Go back</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head: {
    title: "Manage organizers"
  },

  middleware: "projectChosen"
};
</script>

<style></style>
