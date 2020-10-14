<template>
  <div>
    <v-parallax
      dark
      :src="require('~/assets/images/landing-bg.jpg')"
      class="landing-image"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4">
            We provide tools to help you in your activism.
          </h1>
          <h2 class="subheading font-weight-medium">
            Organize events, connect with other activists, learn practical
            skills, manage social media – all in one place!
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="right" cols="6">
          <v-btn color="primary" x-large @click="goTo('#our-services')">
            Our services
          </v-btn>
        </v-col>
        <v-col align="left" cols="6">
          <v-btn color="primary" x-large>
            Start now!
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <main>
      <h1 class="display-1 mb-4 mt-4 text-center">What we provide</h1>

      <v-container class="fill-height" fluid style="min-height: 434px">
        <v-fade-transition mode="out-in">
          <v-row>
            <v-col
              class="d-flex flex-column"
              cols="12"
              md="6"
              v-for="(item, i) in infos"
              :key="i"
            >
              <InfoCard
                class="flex d-flex flex-column"
                :title="item.title"
                :imageurl="item.imageurl"
              >
                {{ item.text }}
              </InfoCard>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>
      <h1 id="our-services" class="display-1 mb-4 mt-4 text-center">
        And that's what our users organize
      </h1>

      <v-row>
        <v-col
          class="d-flex flex-column"
          cols="12"
          md="6"
          lg="4"
          v-for="(item, i) in events"
          :key="i"
        >
          <EventCard class="flex d-flex flex-column" :title="item.title">{{
            item.text
          }}</EventCard>
        </v-col>
      </v-row>
    </main>
    <!--  -->
  </div>
</template>

<script>
import goTo from "vuetify/es5/services/goto";

export default {
  layout: "landing",

  data: () => ({
    infos: [
      {
        title: "Event organisation",
        text:
          "Organize your event and manage all the stuff that you need in one platform",
        imageurl: "https://picsum.photos/350/165?random"
      },

      {
        title: "Manage documents",
        text:
          "Find all the documents needed to organize your event ready to download",
        imageurl: "https://picsum.photos/350/165?random"
      },
      {
        title: "Matchmaking",
        text:
          "Are you new in organizing a social event? Find help for your event by an expert activist Are you an expert? Give help to organize an impactive event for the environment",
        imageurl: "https://picsum.photos/350/165?random"
      },
      {
        title: "Tutorials",
        text:
          "Follow the process from expert activist or watch the videos to improve your skill for your events",
        imageurl: "https://picsum.photos/350/165?random"
      }
    ],

    events: [
      {
        title: "Clean day in Orsay",
        text: "Let's make our parks clean again!",
        imageurl: "https://picsum.photos/350/165?random"
      },
      {
        title: "Recycling: tips and tricks",
        text: "Series of workshops on how to recycle your trash properly",
        imageurl: "https://picsum.photos/350/165?random"
      },
      {
        title: "Earth Day!",
        text: "There is no PLANet B!",
        imageurl: "https://picsum.photos/350/165?random"
      }
    ]
  }),

  methods: {
    goTo(target) {
      goTo(target, {
        duration: 600,
        offset: -3,
        easing: "easeInOutCubic"
      });
    }
  }
};
</script>

<style>
.landing-image img {
  filter: brightness(50%);
}
</style>
