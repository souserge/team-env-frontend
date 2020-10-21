<template>
  <v-container style="max-width: 500px">
    <v-text-field
      v-model="newTask"
      label="What are you working on?"
      solo
      @keydown.enter="createTask"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="createTask">
            mdi-plus-circle
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <v-row class="mb-1" align="center">
      <strong class="mx-4 grey--text text--darken-1">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4"> Completed: {{ completedTasks }} </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        color="primary"
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.id}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                readonly
                @click="toggleTask(task)"
                :color="(task.done && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.done && 'grey--text') || 'primary--text'"
                    class="ml-4"
                  >
                    {{ task.text }}
                  </div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-hover v-slot="{ hover }">
              <div style="width: 24px; height: 24px;">
                <v-scroll-x-transition>
                  <v-icon v-if="task.done && !hover" color="primary">
                    mdi-check
                  </v-icon>
                  <v-icon
                    v-else-if="hover"
                    @click="deleteTask(task)"
                    color="red"
                  >
                    mdi-delete
                  </v-icon>
                </v-scroll-x-transition>
              </div>
            </v-hover>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    newTask: null
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    createTask() {
      this.$emit("createTask", {
        done: false,
        text: this.newTask
      });
      this.newTask = null;
    },

    toggleTask(task) {
      this.$emit("toggleTask", task);
    },

    deleteTask(task) {
      this.$emit("deleteTask", task);
    }
  }
};
</script>

<style>
.v-hidden {
  visibility: hidden;
}
</style>
