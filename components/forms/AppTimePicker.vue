<template>
  <v-dialog ref="dialog" v-model="modal2" persistent width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        outlined
        v-model="value"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker v-if="modal2" v-model="time" full-width>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal2 = false">
        Cancel
      </v-btn>
      <v-btn text color="primary" @click="handleInput">
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Date"
    }
  },

  data() {
    return {
      time: "",
      modal2: false
    };
  },

  methods: {
    handleInput() {
      this.modal2 = false;
      this.$emit("input", this.time);
    }
  }
};
</script>
