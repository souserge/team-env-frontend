<template>
  <div>
    <v-parallax src="/media/images/landing-bg.jpg" class="landing-image">
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
          <v-btn color="primary" to="/app" x-large>
            Start now!
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
    <main>
      <h1 id="our-services" class="display-1 mb-4 mt-4 text-center">
        What we provide
      </h1>

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
              <AppInfoCard
                class="flex d-flex flex-column"
                :title="item.title"
                :imageurl="item.imageurl"
              >
                {{ item.text }}
              </AppInfoCard>
            </v-col>
          </v-row>
        </v-fade-transition>
      </v-container>
      <h1 id="past-events" class="display-1 mb-4 mt-4 text-center">
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
          <AppEventCard
            class="flex d-flex flex-column"
            :title="item.title"
            :imageurl="item.imageurl"
            >{{ item.text }}</AppEventCard
          >
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
        imageurl:
          "https://snappygoat.com/b/b0978475a04612c5026aad3471aa65feedd17f01"
      },

      {
        title: "Manage documents",
        text:
          "Find all the documents needed to organize your event ready to download",
        imageurl:
          "https://cdn.pixabay.com/photo/2016/03/31/20/04/cluttered-1295494__340.png"
      },
      {
        title: "Matchmaking",
        text:
          "Are you new in organizing a social event? Find help for your event by an expert activist Are you an expert? Give help to organize an impactive event for the environment",
        imageurl:
          "https://cdn.pixabay.com/photo/2020/02/27/04/46/alien-4883391__340.png"
      },
      {
        title: "Tutorials",
        text:
          "Follow the process from expert activist or watch the videos to improve your skill for your events",
        imageurl:
          "https://cdn.pixabay.com/photo/2016/09/27/05/35/letter-1697604_1280.png"
      }
    ],

    events: [
      {
        title: "Clean day in Orsay",
        text: "Let's make our parks clean again!",
        imageurl:
          "https://wilderness-society.org/wp-content/uploads/2019/03/Forest-Fire-Treuebrietzen-Brandenburg-22403.jpg"
      },
      {
        title: "Recycling: tips and tricks",
        text: "Series of workshops on how to recycle your trash properly",
        imageurl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREJTXxQKwFakcLJqjbtgddD4XSDdrJXxDn0A&usqp=CAU"
      },
      {
        title: "Earth Day!",
        text: "There is no PLANet B!",
        imageurl:
          "https://live.staticflickr.com/7824/47484255882_b77b08f9be_b.jpg"
      }
    ]
  }),

  methods: {
    goTo(target) {
      goTo(target, {
        duration: 600,
        offset: 80,
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
