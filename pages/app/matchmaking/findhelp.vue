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
              :username="item.username"
            >
            </FindHelpUserCard>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head: {
    title: "Find help"
  },

  middleware: "projectChosen",

  data() {
    return {
      advancedSearchOpened: false,
      volunteersOpened: false
    };
  },

  computed: {
    notVolunteersOpened() {
      return !this.volunteersOpened;
    },

    ...mapState(["volunteers"])
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
