<template>
  <div>
    <v-row align="center" justify="center">
      <h2 class="mb-4">
        Find volunteers to help you with your activism!
      </h2>
    </v-row>

    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" md="4">
          <v-select
            :items="items"
            label="Select project you need to help with"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" md="4">
          <Checkbox> </Checkbox>
        </v-col>
        <v-col class="d-flex justify-center" cols="12" md="4">
          <v-btn
            color="primary"
            to="/app/matchmaking/findhelp"
            x-medium
            @click="showVolunteers"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-btn color="primary" x-medium @click="openAdvancedSearch">
          Advanced search
        </v-btn>
      </v-row>
    </v-container>
    <v-container fluid id="adv">
      <MatchmakingAdvancedSearch v-show="advancedSearchOpened">
      </MatchmakingAdvancedSearch>
    </v-container>
    <v-container
      v-show="volunteersOpened"
      class="volunteers fill-height"
      fluid
      style="min-height: 434px"
    >
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col
            class="d-flex flex-column"
            cols="12"
            md="6"
            v-for="(item, i) in volunteers"
            :key="i"
          >
            <FindHelpUserCard
              class="flex d-flex flex-column"
              :name="item.name"
              :surname="item.surname"
              :keywords="item.keywords"
              :description="item.description"
              :availability="item.availability"
              :imageurl="item.imageurl"
            >
            </FindHelpUserCard>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  head: {
    title: "Find help"
  },

  data() {
    return {
      advancedSearchOpened: false,
      volunteersOpened: false,
      items: [
        "Legal meeting",
        "Recycling Discussion",
        "Environmental festival"
      ],
      volunteers: [
        {
          name: "Lucy",
          surname: "Brown",
          keywords: ["Social Media Specialist", "Local activist"],
          description:
            "My name is Lucy and I am 25 y.o. I am working as Social Media Specialist. I am a local actvivist in my neighborhood.",
          availability: ["Mon-Thu 4PM-8PM", "Fri 8AM-16PM", "Saturdays"],
          imageurl: "/media/images/lucy.jpg"
        },
        {
          name: "Paul",
          surname: "Smith",
          keywords: ["Photo & Video Specialist", "Spanish native speaker"],
          description:
            "My name is Paul and I am 34 y.o. and I am passionate about photo and video editing.",
          availability: ["Mon-Wed", "Weekends"],
          imageurl: "/media/images/paul.jpg"
        }
      ]
    };
  },
  methods: {
    openAdvancedSearch() {
      this.advancedSearchOpened = !this.advancedSearchOpened;
    },
    showVolunteers() {
      this.volunteersOpened = true;
    }
  }
};
</script>

<style></style>
