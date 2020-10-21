<template>
  <div>
    <h1 class="display-1 mt-4 mb-4 text-center">
      We provide tools to help you in your activism
    </h1>
    <v-row justify="center">
      <v-img
        max-height="250"
        max-width="350"
        src="/media/images/matchmaking.png"
      ></v-img>
    </v-row>

    <v-row justify="center">
      <v-col align="right" cols="6">
        <v-btn color="primary" to="/app/matchmaking/findhelp" x-large>
          Find help
        </v-btn>
      </v-col>
      <v-col align="left" cols="6">
        <v-btn color="primary" to="/app/matchmaking/givehelp" x-large>
          Give help
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  head: {
    title: "Matchmaking"
  },

  methods: {}
};
</script>

<style></style>
