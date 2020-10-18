<template>
  <v-row>
    <v-col cols="4">
      <h2 class="text-center mb-2 mt-4">"{{ project.name }}" project</h2>

      <v-img class="mb-4" :src="project.bannerImg" />

      <p class="mb-6">
        We meet every week on Saturday in Parc Nord Les Ulis and clean the trash
        that we find there. We think our cause is very important to keep the
        place clean and welcoming for the animals that live there. We also
        promote the "Leave no trace" principle during our events. Come and join
        us!
      </p>

      <h3 class="text--primary">Co-organizers</h3>
      <v-list>
        <template v-for="(item, index) in project.coorganizers">
          <v-list-item two-line :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ item.title }}
                <v-icon v-if="item.admin" class="pb-1" x-small
                  >mdi-star</v-icon
                ></v-list-item-title
              >
              <v-list-item-subtitle>
                {{ item.subtitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < project.coorganizers.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>
        <v-list-item two-line ripple to="app/manage/organizers">
          <v-spacer />
          <v-list-item-title class="text-center"
            >manage co-organizers</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    project: {
      name: "Clean the district",
      bannerImg:
        "https://wilderness-society.org/wp-content/uploads/2019/03/Forest-Fire-Treuebrietzen-Brandenburg-22403.jpg",

      coorganizers: [
        {
          avatar:
            "https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png",
          title: "Paulina",
          subtitle: "Manages resources and crowdfunding, graphic designer",
          admin: true
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEtD-9q9Lu2ueYBwGALDni9mUZDY2PC-otEw&usqp=CAU",
          title: "Francesco",
          subtitle: "Manages social media, photographer",
          admin: true
        },
        {
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcZ66nh8KOULNtAGKMU0Q_j2M6mgSi5TZnMg&usqp=CAU",
          title: "Serge",
          subtitle: "Volunteer",
          admin: false
        }
      ]
    }
  })
};
</script>

<style></style>
