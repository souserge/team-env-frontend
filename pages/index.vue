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
          <v-btn color="primary" x-large>
            Our services
          </v-btn>
          <v-btn color="primary" x-large>
            Start now!
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <!--  -->
  </div>
</template>

<script>
export default {
  layout: "landing"
};
</script>

<style>
.landing-image img {
  filter: brightness(50%);
}
</style>
