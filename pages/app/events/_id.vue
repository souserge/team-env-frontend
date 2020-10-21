<template>
  <div v-if="event === undefined">
    <v-row justify="center">
      <h2>Ooops, no such event found</h2>
      <v-btn class="ml-6" to="/app/events">Go back</v-btn>
    </v-row>
  </div>
  <div
    v-else
    v-anime="{
      translateX: [
        { value: -250, duration: 0, delay: 0 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      easing: 'easeInCubic'
    }"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 mb-4" v-text="event.name"></h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn color=" lighten-2" text @click="show = !show">
          information Summary
        </v-btn>

        <v-spacer></v-spacer>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-col>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p>
              <strong>When? </strong> on {{ event.date }}, at {{ event.time }}
            </p>
            <p><strong>Where?</strong> {{ event.address }}</p>
            <p>
              {{ event.description }}
            </p>
            <p>
              It is a {{ event.isPublic ? "publicly" : "privately" }} held event
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn
          color=" lighten-2"
          text
          @click="showCoOrganize = !showCoOrganize"
        >
          List of co-organizers
        </v-btn>

        <v-spacer></v-spacer>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn icon @click="showCoOrganize = !showCoOrganize">
          <v-icon>{{
            showCoOrganize ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-col>
      <v-expand-transition>
        <div style="width: 100%;" v-show="showCoOrganize">
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12">
              <v-list>
                <template v-for="(item, index) in event.coorganizers">
                  <v-list-item two-line :key="item.title">
                    <v-list-item-avatar>
                      <v-img :src="item.imageurl"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }} </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.shortDescription }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="index < event.coorganizers.length - 1"
                    :key="index"
                    :inset="true"
                  ></v-divider>
                </template>
              </v-list>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn color=" lighten-2" text @click="showTutorial = !showTutorial">
          Tutorial for your event
        </v-btn>

        <v-spacer></v-spacer>
      </v-col>

      <v-col class="text-right" cols="4">
        <v-btn icon @click="showTutorial = !showTutorial">
          <v-icon>{{
            showTutorial ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-col>
      <v-expand-transition>
        <div v-show="showTutorial">
          <v-divider></v-divider>

          <v-card-text>
            Ciaoo
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn color=" lighten-2" text @click="showPaper = !showPaper"
          >Download useful papers for your event
        </v-btn>

        <v-spacer></v-spacer>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn icon @click="showPaper = !showPaper">
          <v-icon>{{
            showPaper ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-col>
      <v-expand-transition>
        <div v-show="showPaper">
          <v-divider></v-divider>

          <v-card-text>
            Ciaoo
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn color=" lighten-2" text @click="showSocial = !showSocial">
          Share with the social media
        </v-btn>

        <v-spacer></v-spacer>
      </v-col>
      <v-col class="text-right" cols="4">
        <v-btn icon @click="showSocial = !showSocial">
          <v-icon>{{
            showSocial ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-col>
      <v-expand-transition>
        <div v-show="showSocial">
          <v-divider></v-divider>

          <v-card-text>
            Ciaoo
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h2 class="display-1 mb-4">Need more help or information?</h2>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-left" cols="4">
        <v-btn elevation="2" outlined x-large>
          <v-icon>
            mdi-human-greeting-proximity
          </v-icon>
          <p class="pt-3 pl-3">
            Try matchmaking <br />
            <span class="text-caption">find people to help you</span>
          </p>
        </v-btn>
      </v-col>

      <v-col class="text-left" cols="4">
        <v-btn elevation="2" outlined x-large>
          <v-icon>
            mdi-cast-education
          </v-icon>
          <p class="pt-3 pl-3">
            Look our Tutorials <br />
            <span class="text-caption">Improve your skills</span>
          </p>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head: {
    title: "Event info"
  },

  middleware: "projectChosen",

  data() {
    return {
      startDate: null,
      endDate: null,
      show: false,
      showSocial: false,
      showCoOrganize: false,
      showPaper: false,
      showTutorial: false
    };
  },

  computed: {
    ...mapState(["currentProject"]),

    eventId() {
      return parseInt(this.$route.params.id);
    },

    event() {
      return this.currentProject.events.find(ev => ev.id === this.eventId);
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
