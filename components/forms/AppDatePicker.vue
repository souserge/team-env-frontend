<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateFormatted"
        readonly
        :label="label"
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        outlined
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker :value="value" @input="handleInput" no-title></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: new Date().toISOString().substr(0, 10)
    },
    label: {
      type: String,
      default: "Date"
    }
  },

  data(vm) {
    return {
      menu: false,
      dateFormatted: vm.formatDate(vm.value)
    };
  },

  watch: {
    value(val) {
      this.dateFormatted = this.formatDate(this.value);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },

    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    handleBlur() {
      const value = this.parseDate(this.dateFormatted);
      this.$emit("input", value);
    },

    handleInput(value) {
      this.menu = false;
      this.$emit("input", value);
    }
  }
};
</script>
