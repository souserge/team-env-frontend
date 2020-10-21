<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" depressed v-bind="attrs" v-on="on">
        {{ currentProject ? currentProject.name : "Choose project" }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">
        Choose a project
      </v-card-title>

      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(project, i) in projects"
            ripple
            :class="{
              'v-list-item--active':
                currentProject && project.id === currentProject.id
            }"
            @click="selectProject(project.id)"
            :key="i"
          >
            {{ project.name }}
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          v-if="currentProject"
          color="secondary"
          text
          @click="selectProject(null)"
        >
          Unselect "{{ currentProject.name }}"
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    currentProject: {
      type: Object,
      default: null
    },
    projects: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),

  methods: {
    selectProject(projId) {
      this.dialog = false;
      this.$emit("select", projId);
    }
  }
};
</script>

<style scoped></style>
