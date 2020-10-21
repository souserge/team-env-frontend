<template>
  <MatchmakingContactForm :name="name" :text="text" :imageurl="imageurl" :label="label" :alert="alert">
  </MatchmakingContactForm>
</template>

<script>
export default {
    data() {
    return {
      alert: false,
      name: "Lucy",
      text: "Social Media Specialist, Local activist",
      imageurl: "/media/images/lucy.jpg",
      label: "Mesage to Lucy",
      value: ""
    }
}
}
</script>

<style>

</style>