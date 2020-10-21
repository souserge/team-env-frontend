<template>
  <v-row>
    <v-col cols="12" md="6">
      <p class=" flex mb-0 text-center grey--text text--darken-2">
        I need help:
      </p>
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
    </v-col>

    <v-col cols="12" md="6">
      <v-slide-x-transition>
        <v-select
          class="mt-8"
          v-show="checkbox1"
          :items="places"
          menu-props="auto"
          label="Where"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-slide-x-transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: false,
      checkbox2: false,
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
      ]
    };
  }
};
</script>

<style></style>
