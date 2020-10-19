<template>
  <v-form v-model="valid">
    <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <AppDatePicker label="Start date">
        </AppDatePicker>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
        <AppDatePicker label="End date">
        </AppDatePicker>
        </v-col>
    </v-row>


    
  </v-form>
</template>

<script>
  export default {
    
  }
</script>

<style>

</style>