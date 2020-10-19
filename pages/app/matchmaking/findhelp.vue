<template>
  <div>
      <v-row align="center" justify="center">
          <h2 class="mb-4">
            Find volunteers to help you with your activism!
          </h2>
      </v-row>
     
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-select
          :items="items"
          label="Select project you need to help with"
        ></v-select>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        md="4"

      >
        <Checkbox>
        </Checkbox>
      
     </v-col>
      <v-col
        class="d-flex justify-center"
        cols="12"
        md="4"
        
      >
        <v-btn color="primary" to="/app/matchmaking/findhelp" x-medium>
            Search        
        </v-btn>
     </v-col>
    </v-row>
    <v-row>
      <v-btn color="primary" @click='show = adv' x-medium>
            Go to advanced search        
        </v-btn>
    </v-row>
  </v-container>
  <v-container fluid id="adv">
  <MatchmakingAdvancedSearch>
  </MatchmakingAdvancedSearch>
  </v-container>
  </div>
</template>

<script>
export default {
    data(){
    return {
      items: ["Legal meeting", "Recycling Discussion", "Environmental festival"]
    }
}
}
</script>

<style>

</style>