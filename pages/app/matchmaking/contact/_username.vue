<template>
  <div v-if="user === undefined">
    <v-row justify="center">
      <h2>Oops! no user found with username {{ username }}, try again!</h2>
    </v-row>
  </div>
  <MatchmakingContactForm
    v-else
    :name="user.name"
    :text="text"
    :imageurl="user.imageurl"
    :label="user.label"
  >
  </MatchmakingContactForm>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(["volunteers"]),

    username() {
      return this.$route.params.username;
    },

    user() {
      return this.volunteers.find(vol => vol.username === this.username);
    },

    text() {
      return this.user.keywords.join(", ");
    }
  }
};
</script>

<style></style>
