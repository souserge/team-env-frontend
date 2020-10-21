<template>
  <div>
    <v-alert outlined type="success" text :value="alert">
      The message was sent!
    </v-alert>
    <v-row>
      <v-col cols="12">
        <v-card
          class="d-flex justify-space-between py-8 mr-15 ml-15"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <div>
            <v-avatar> <v-img :src="imageurl"></v-img> </v-avatar>
          </div>
          <div>
            <h3>{{ name }}</h3>
            <p>{{ text }}</p>
          </div>
          <v-btn
            color="deep-purple lighten-2"
            to="/app/matchmaking/findhelp"
            text
          >
            Go back
          </v-btn>
        </v-card>

        <v-container fluid class="px-30">
          <v-textarea
            name="input-7-1"
            filled
            :label="label"
            auto-grow
            :value="value"
          ></v-textarea>
        </v-container>
        <v-row justify="end" class="px-12">
          <v-btn class="mr-2" color="error" to="/app/matchmaking/findhelp">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="alert = !alert">
            Send
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    text: {
      type: String
    },
    imageurl: {
      type: String
    }
  },
  data() {
    return {
      alert: false
    };
  }
};
</script>

<style></style>
