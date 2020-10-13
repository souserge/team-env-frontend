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
      <v-row>
        <v-col align="center" justify="center">
          <v-btn color="primary" x-large @click="goTo('#our-services')">
            Our services
          </v-btn>
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
            <v-col cols="6">
              <InfoCard
                title="Event organisation"
                imageurl="https://picsum.photos/350/165?random"
              >
                Organize your event and manage all the stuff that you need in
                one platform
              </InfoCard>
            </v-col>

            <v-col cols="6">
              <InfoCard
                title="Manage documents"
                imageurl="https://picsum.photos/350/165?random"
              >
                Find all the documents needed to organize your event ready to
                download
              </InfoCard>
            </v-col>

            <v-col cols="6">
              <InfoCard
                title="Matchmaking"
                imageurl="https://picsum.photos/350/165?random"
              >
                Are you new in organizing a social event? Find help for your
                event by an expert activist Are you an expert? Give help to
                organize an impactive event for the environment
              </InfoCard>
            </v-col>

            <v-col cols="6">
              <InfoCard
                title="Tutorials"
                imageurl="https://picsum.photos/350/165?random"
              >
                Follow the process from expert activist or watch the videos to
                improve your skill for your events
              </InfoCard>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>
      <h1 id="our-services" class="display-1 mb-4 mt-4 text-center">
        And that's what our users organize
      </h1>

      <v-row>
        <v-col cols="4">
          <EventCard title="Clean day in Orsay">
            Let's make our parks clean again!
          </EventCard>
        </v-col>

        <v-col cols="4">
          <EventCard title="Recycling: tips and tricks">
            Series of workshops on how to recycle your trash properly
          </EventCard>
        </v-col>

        <v-col cols="4">
          <EventCard title="Earth Day!">
            There is no PLANet B!
          </EventCard>
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
