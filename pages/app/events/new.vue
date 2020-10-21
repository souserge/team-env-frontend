<template>
  <div
    v-anime="{
      translateX: [
        { value: -250, duration: 0, delay: 0 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      easing: 'easeInCubic'
    }"
  >
    <v-row>
      <v-col class="text-center" cols="4">
        <h1 class="display-1 mb-4" v-text="title"></h1>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col class="text-left pl-11" cols="8">
        <v-text-field
          outlined
          clearable
          v-model="name"
          label="Event name"
          type="text"
        ></v-text-field>
      </v-col>

      <v-col class="text-left pl-12" cols="4">
        <v-switch
          inset
          v-model="isPublic"
          color="primary"
          label="Public Event"
          value="Public"
        ></v-switch>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="text-left" cols="8">
        <v-text-field
          prepend-icon="mdi-map-marker"
          outlined
          v-model="address"
          clearable
          label="Address"
          type="text"
        ></v-text-field>
      </v-col>
      <v-col class="text-left" cols="4">
        <v-file-input
          v-model="files"
          label="Upload useful materials"
          multiple
          outlined
          clearable
          prepend-icon="mdi-paperclip"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">{{ text }} </v-chip>
          </template>
        </v-file-input>
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
        <AppTimePicker v-model="startTime" label="Start Time" />
      </v-col>
      <v-col class="text-left" cols="3">
        <AppTimePicker v-model="endTime" label="End Time" />
      </v-col>
    </v-row>
    <v-row align="start">
      <v-col cols="12">
        <v-textarea
          v-model="description"
          outlined
          clearable
          name="input-7-4"
          label="Description"
          value=""
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn elevation="2" outlined>
          <v-icon>
            mdi-account-plus-outline
          </v-icon>
          Add co-organizer
        </v-btn>
        <v-btn elevation="2" outlined>
          <v-icon>
            mdi-share-variant-outline
          </v-icon>
          Connect with social media
        </v-btn>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn elevation="2" outlined @click="saveEvent">
          <v-icon>
            mdi-content-save-outline
          </v-icon>
          Save
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head: {
    title: "Create new event"
  },

  middleware: "projectChosen",

  data() {
    return {
      title: "Create your Event",
      name: "",
      isPublic: false,
      address: "",
      files: [],
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      description: ""
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    ...mapState(["currentProject"])
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
      this.date2 = this.formatDate(this.date);
    }
  },
  methods: {
    saveEvent() {
      this.$store.commit("addEventToCurrentProject", {
        name: this.name,
        address: this.address,
        date: this.startDate,
        time: this.startTime,
        endDate: this.endDate,
        endTime: this.endTime,
        isPublic: this.isPublic,
        description: this.description,
        coorganizers: this.currentProject.coorganizers
      });
      this.$router.push({
        path: "/app/events"
      });
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
