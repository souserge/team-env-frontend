<template>
  <div>
    <v-parallax
      dark
      :src="require('~/assets/images/landing-bg.jpg')"
      class='landing-image'
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 mb-4">
            We provide tools to help you in your activism.
          </h1>
          <h2 class="subheading font-weight-medium">
            Organize events, connect with other activists, learn practical skills, manage social media – all in one place!
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          align="center"
          justify="center"
        >
          <v-btn
            color='primary'
            x-large
          >
            Our services
          </v-btn>
          <v-btn
            color='primary'
            x-large
          >
            Start now!
          </v-btn>

        </v-col>

      </v-row>
    </v-parallax>
    <main>
      <h1 class="display-1 mb-4 mt-4 text-center"> What we provide </h1>

  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
                <v-img
                  src="https://picsum.photos/350/165?random"
                  width="250"
                  class="grey darken-4"
                ></v-img>
            <div>
                <v-card-title class="title">
                  Events organisation
                </v-card-title>
                <v-card-text>
                  Organize your event and manage all the stuff that you need in one platform
                </v-card-text> 
            </div>
              
            </div>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              height with contain
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="125"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              max-height
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="125"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              max-height with contain
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>




    </main>
    <!--  -->

  </div>
</template>

<script>
export default {
  layout: 'landing'
}
</script>

<style>
.landing-image img {
    filter: brightness(50%);
}
</style>
