<template>
  <v-row v-if="projectSelected" class="mt-4">
    <v-col cols="12" md="4">
      <h2 class="text-center mb-2">"{{ currentProject.name }}" project</h2>

      <v-img class="mb-4" :src="currentProject.bannerImg" />

      <p class="mb-6">
        We meet every week on Saturday in Parc Nord Les Ulis and clean the trash
        that we find there. We think our cause is very important to keep the
        place clean and welcoming for the animals that live there. We also
        promote the "Leave no trace" principle during our events. Come and join
        us!
      </p>

      <h3 class="text--primary">Co-organizers</h3>
      <v-list>
        <template v-for="(item, index) in currentProject.coorganizers">
          <v-list-item two-line :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ item.title }}
                <v-icon v-if="item.admin" class="pb-1" x-small
                  >mdi-star</v-icon
                ></v-list-item-title
              >
              <v-list-item-subtitle>
                {{ item.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < currentProject.coorganizers.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>
        <v-list-item two-line ripple to="app/project/organizers">
          <v-list-item-title class="text-center"
            >manage co-organizers</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="12" md="4" class="mt-8">
      <h3>Social media</h3>
      todo
      <h3>Organization steps</h3>
      todo
    </v-col>

    <v-col cols="12" md="4" class="mt-8">
      <h3>Upcoming events</h3>
      <v-list>
        <template v-for="(event, index) in upcomingEvents">
          <v-list-item :key="event.name + event.date" two-line>
            <v-list-item-action>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ formatDate(event.date) }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ event.name }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < upcomingEvents.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>

        <v-list-item two-line ripple to="app/events">
          <v-list-item-title class="text-center"
            >view all events</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <h3 class="mt-8">Similar projects</h3>
      <v-list>
        <template v-for="(project, index) in similarProjects">
          <v-list-item :key="project.name + project.author" two-line>
            <v-list-item-action>
              <v-icon>mdi-rocket-launch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ project.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ project.author }}, {{ project.created }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < upcomingEvents.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>

        <v-list-item two-line ripple to="app/matchmaking">
          <v-list-item-title class="text-center"
            >see more projects</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col align="center" cols="12">
      <h2 class="text-center">
        Hi there! It seems you have no project selected
      </h2>
      <v-img
        src="https://storage.needpix.com/rsynced_images/dance-1298175_1280.png"
        max-width="400px"
        class="mx-auto"
      />
      <p class="text-center mt-8">
        Select an existing project using the navbar, create a new one, or browse
        the Tutorials and Matchmaking without a project.
      </p>
      <v-btn class="mx-auto" color="primary" to="/app/project/create"
        >Create a new project</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),

  computed: {
    upcomingEvents() {
      return this.currentProject.events.slice(0, 3);
    },

    similarProjects() {
      return this.currentProject.similarProjects;
    },

    ...mapGetters(["currentProject", "projectSelected"])
  },

  methods: {
    formatDate(date) {
      const d = new Date(date);
      const mo = new Intl.DateTimeFormat("gb", { month: "short" }).format(d);
      const wd = new Intl.DateTimeFormat("gb", { weekday: "short" }).format(d);
      const da = d.getDate();
      const ho = d.getHours();
      const mi = ("0" + d.getMinutes()).slice(-2);

      return `${wd}. ${mo}. ${da}, ${ho}:${mi}`;
    }
  }
};
</script>

<style></style>
