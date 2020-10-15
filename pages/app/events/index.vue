<template>
  <div v-anime="{ translateX: [
    { value: -250, duration:0, delay: 0 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  easing: 'easeInCubic'
}">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 mb-4" v-text="title"></h1>
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
          <template v-slot:[`item.co_organizers`]="{ item }">
            <v-btn
              class="mr-3"
              v-for="(value, index) in item.co_organizers"
              :key="index"
              elevation="2"
              outlined
            >
              <v-img
                id="rounded-card"
                height="30"
                width="30"
                :src="value.src"
              ></v-img>

              {{ value.name }}
            </v-btn>
          </template>
          <template v-slot:[`item.edit`]="{}">
            <v-btn elevation="2" outlined>
              <v-icon>
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
          </template>
           <template v-slot:[`item.done`]="{item}">
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
        <v-btn elevation="2" outlined>
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
export default {
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
        { text: "Co-organizers", value: "co_organizers" },
        { text: "Edit", value: "edit" },
        { text: "Done?", value: "done" }
      ],
      events: [
        {
          name: "Legal meeting",
          date: "24/10/2020",
          time: "18:00",
          privacy: "Private",
          co_organizers: [
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "Francesco"
            },
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "Federico"
            }
          ],
          edit: "",
          done: false
        },

        {
          name: "Recycling Discussion",
          date: "3/10/2020",
          time: "16:00",
          privacy: "Public",
          co_organizers: [
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "John"
            },
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "Pepi"
            }
          ],
          edit: "",
          done: true
        },
        {
          name: "Environmental Festival",
          date: "2/10/2020",
          time: "13:00",
          privacy: "Public",
          co_organizers: [
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "John"
            },
            {
              src:
                "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
              name: "Ana"
            }
          ],
          edit: "",
          done: true
        }
      ],
      select: "Public",
      items: ["Public", "Private"],
      title: "Your events",
      startDate: null,
      endDate: null
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
