<template>
  <div class="mx-md-12">
    <v-row align="center" justify="center">
      <h2 class="mb-4">
        Find volunteers to help you with your activism!
      </h2>
    </v-row>

    <v-container fluid>
      <MatchmakingSimpleSearch />
    </v-container>
    <v-container fluid id="adv">
      <MatchmakingAdvancedSearch />
      <v-spacer />

      <v-row justify="end" cols="12">
        <v-btn
          color="primary"
          to="/app/matchmaking/findhelp"
          x-medium
          @click="showVolunteers"
        >
          Search
        </v-btn>
      </v-row>
    </v-container>
    <v-container
      v-show="volunteersOpened"
      class="volunteers fill-height"
      fluid
      style="min-height: 434px"
    >
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col cols="12">
            <h2 class="text-center">Search results</h2>
          </v-col>
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
