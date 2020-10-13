<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          This is a test
        </v-card-title>
        <v-card-text>
          <text-box textType="heading">This is a heading</text-box>
          <text-box textType="span">This is a span</text-box>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
          <v-btn color="secondary">
            Secondary
          </v-btn>
          <v-btn color="accent">
            Accent
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TextBox from "~/components/TextBox.vue";

export default {
  layout: "app",
  components: {
    TextBox
  }
};
</script>
