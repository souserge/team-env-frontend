<template>

  <div>
<style>
#rounded-card {
  border-radius: 50%;
  margin-right:5px;

}
.v-input__slot  fieldset{
padding-left:8px;

}
.v-text-field__slot label {
transform-origin: top left;
}
</style>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 mb-4" v-text="title">
          </h1>

        </v-col>
      </v-row>

      <v-row align="left" justify="center">
        <v-col class="text-left" cols="3">
          <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
              >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
              v-model="dateFormatted"
              :label="startDate"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
                outlined
              v-on="on"
                ></v-text-field>
             </template>
            <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
            ></v-date-picker>
          </v-menu>

         </v-col>
      <v-col class="text-left" cols="3">
          <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
              >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
              v-model="dateFormatted"
              :label="endDate"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
                outlined
              v-on="on"
                ></v-text-field>
             </template>
            <v-date-picker
            v-model="date"
            no-title
            @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

         </v-col>



        <v-col class="text-left" cols="3">

<v-select
  clearable
  v:model="select"
 label="Select Privacy"
          :items="items"

  outlined
  small-chips
></v-select>

         </v-col>


        <v-col class="text-left" cols="3">

          <v-text-field
  outlined
            label="Search Text"
            append-icon="mdi-magnify"
          ></v-text-field>

                   </v-col>

      </v-row>

      <v-row  align="center" justify="center">
      <v-col  align="center" cols="12">
      <v-btn
  elevation="2"
  outlined
>Search</v-btn>
      </v-col>
</v-row>
<v-row  align="center">
      <v-col  align="center" cols="12">

<v-data-table
    :headers="headers"
    :items="events"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.co_organizers="{ item }">
      <v-btn
      class="mr-3"
      v-for="(value,index) in item.co_organizers"
          elevation="2"
  outlined
      >
       <v-img id="rounded-card"
            height="30"
            width="30"
            :src="value.src"
          ></v-img>

        {{ value.name }}

      </v-btn>
    </template>
 <template v-slot:item.edit="{ item }">
      <v-btn
          elevation="2"
  outlined
      >
<v-icon >
  mdi-pencil
</v-icon>
       Edit
      </v-btn>
    </template>
  </v-data-table>
</v-col>
</v-row>

<v-row>
<v-col cols="3">
  <v-btn
          elevation="2"
  outlined
      >
<v-icon >
  mdi-plus
</v-icon>
       Create
      </v-btn>
</v-col>

</v-row>
    <!--  -->
  </div>
</template>

<script>
export default {
  layout: "app",
  data(){

    return {

      headers: [
          {
            text: 'Event Name',

            value: 'name',
          },
          { text: 'Date', value: 'date' },
          { text: 'Time', value: 'time' },
          { text: 'Privacy', value: 'privacy' },
          { text: 'Co-organizers', value: 'co_organizers' },
          { text: 'Edit', value: 'edit' },
                    { text: 'Done?', value: 'done' },

        ],
        events: [
          {
            name: 'Legal meeting',
            date: "4/10/2020",
            time: "18:00",
            privacy: "Private",
            co_organizers: [
              {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"Francesco",
                }
              ,  {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"Federico"
                }] ,
            edit: '',
            done:"si",
          },

              {
            name: 'Recycling Discussion',
            date: "3/10/2020",
            time: "16:00",
            privacy: "Public",
            co_organizers: [ {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"John"
                }, {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"Pepi"
                }] ,
            edit: '',
            done:"si",
          },
           {
            name: 'Environmental Festival',
            date: "2/10/2020",
            time: "13:00",
            privacy: "Public",
            co_organizers: [ {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"John"
                }, {
                src:"https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
                name:"Ana"
                }] ,
            edit: '',
            done:"si",
          },


        ],
      select: 'Public',
      items: [
          'Public',
          'Private'
        ],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      date2: this.formatDate(new Date().toISOString().substr(0, 10)),

      menu1: false,
      menu2: false,
      title:"Your events",
      startDate: "Start Date",
      endDate: "End Date"


    };
   },
  computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

  watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date);
        this.date2 = this.formatDate(this.date);
      },

    },
  methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
};
</script>

<style>
.landing-image img {
  filter: brightness(50%);
}
</style>
