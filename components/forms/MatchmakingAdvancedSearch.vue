<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="6">
        <AppDatePicker label="Start date"> </AppDatePicker>
      </v-col>
      <v-col cols="12" md="6">
        <AppDatePicker label="End date"> </AppDatePicker>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="12" md="6">
        <v-select outlined :items="workloaditems" label="Workload"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" md="6">
        <v-select outlined :items="items" label="Required skills" multiple></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    items: ["editing", "English", "public speaking", "design"],
    workloaditems: ["1-2 hours weekly", "3-4 hours weekly", "5-6 hours weekly"]
  })
};
</script>

<style></style>
