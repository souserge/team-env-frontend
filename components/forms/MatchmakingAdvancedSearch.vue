<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4">
        <AppDatePicker label="Start date"> </AppDatePicker>
      </v-col>
      <v-col cols="12" md="4">
        <AppDatePicker label="End date"> </AppDatePicker>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          :items="places"
          menu-props="auto"
          label="Where"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex" cols="12" md="6">
        <v-select :items="workloaditems" label="Workload"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" md="6">
        <v-select :items="items" label="Required skills" multiple></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    items: ["editing", "English", "public speaking", "design"],
    places: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ],
    workloaditems: ["1-2 hours weekly", "3-4 hours weekly", "5-6 hours weekly"]
  })
};
</script>

<style></style>
