<template>
  <v-container fluid>
      <p class=" flex mb-0 text-center grey--text text--darken-2">I need help:</p>
    <v-row class="justify-center">
    <v-checkbox
        class="mr-4"
      v-model="checkbox1"
      :label="`on-site`"
    ></v-checkbox>
    <v-checkbox
        class="ml-4"
      v-model="checkbox2"
      :label="`online`"
    ></v-checkbox>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        checkbox1: true,
        checkbox2: false,
      }
    },
  }
</script>

<style>

</style>