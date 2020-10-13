<template>
  <div>
    <h3 v-if="textType === 'heading'">
      <slot></slot>
    </h3>
    <span v-else-if="textType === 'span'">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    textType: {
      type: String,
      default: "span"
    }
  }
};
</script>

<style scoped></style>
