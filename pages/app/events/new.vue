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
      <v-col class="text-left" cols="4">
        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      </v-col>
      <v-col class="text-center" cols="4">
        <h1 class="display-1 mb-4" v-text="title"></h1>
      </v-col>
    </v-row>

    <v-row align="left" justify="center">
      <v-col class="text-left pl-11" cols="8">
        <v-text-field
          outlined
          clearable
          label="Event name"
          type="text"
        ></v-text-field>
      </v-col>

      <v-col class="text-left pl-12" cols="4">
        <v-switch
          inset
          v-model="switch1"
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

    <v-row align="left" justify="center">
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
    <v-row align="left">
      <v-col cols="12">
        <v-textarea
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
        <v-btn elevation="2" outlined>
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
export default {
  head: {
    title: "Create new event"
  },

  middleware: "projectChosen",

  data() {
    return {
      time: null,
      files: [],
      switch1: true,
      breadcrumbs: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1"
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2"
        }
      ],
      title: "Create your Event",
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
      this.date2 = this.formatDate(this.date);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
