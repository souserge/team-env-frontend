<template>
  <div

  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 mb-4" v-text="title"></h1>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col class="text-left" cols="3">
        <AppDatePicker v-model="startDate" label="Start Date" />
      </v-col>
      <v-col class="text-left" cols="3">
        <AppDatePicker v-model="endDate" label="End Date" />
      </v-col>

      <v-col class="text-left" cols="3">
        <v-select
          clearable
          v:model="select"
          label="Select Privacy"
          :items="items"
          outlined
          small-chips
        ></v-select>
      </v-col>

      <v-col class="text-left" cols="3">
        <v-text-field
          outlined
          label="Search Text"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-btn elevation="2" outlined>Search</v-btn>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="events"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:[`item.date`]="{ item }">
            {{ formatDate(item.date) }}
          </template>
          <template v-slot:[`item.privacy`]="{ item }">
            {{ item.isPublic ? "Public" : "Private" }}
          </template>
          <template v-slot:[`item.coorganizers`]="{ item }">
            <v-btn
              class="mr-3"
              v-for="(value, index) in item.coorganizers"
              :key="index"
              elevation="2"
              outlined
            >
              <v-img
                id="rounded-card"
                height="30"
                width="30"
                :src="value.imageurl"
              ></v-img>

              {{ value.name }}
            </v-btn>
          </template>
          <template v-slot:[`item.edit`]="{ item }">
            <v-btn :to="`/app/events/${item.id}`" elevation="2" outlined>
              <v-icon>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
          </template>
          <template v-slot:[`item.done`]="{ item }">
            <v-icon v-if="item.done">
              mdi-check-outline
            </v-icon>
            <v-icon v-else>
              mdi-close-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <v-btn :to="{ name: 'app-events-new' }" elevation="2" outlined>
          <v-icon>
            mdi-plus
          </v-icon>
          Create
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head: {
    title: "Events"
  },

  middleware: "projectChosen",

  data() {
    return {
      headers: [
        {
          text: "Event Name",
          value: "name"
        },
        { text: "Date", value: "date" },
        { text: "Time", value: "time" },
        { text: "Privacy", value: "privacy" },
        { text: "Co-organizers", value: "coorganizers" },
        { text: "Edit", value: "edit" },
        { text: "Done?", value: "done" }
      ],
      select: "Public",
      items: ["Public", "Private"],
      title: "Your events",
      startDate: null,
      endDate: null
    };
  },
  computed: {},

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    }
  },
  computed: {
    ...mapState(["currentProject"]),

    events() {
      return this.currentProject.events;
    }
  }
};
</script>

<style>
#rounded-card {
  border-radius: 50%;
  margin-right: 5px;
}
.v-input__slot fieldset {
  padding-left: 8px;
}
.v-text-field__slot label {
  transform-origin: top left;
}
</style>
