<template>
  <v-row class="mt-4">
    <v-col cols="12" md="4">
      <h2 class="text-center mb-2">"{{ project.name }}" project</h2>

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
          <v-list-item-title class="text-center"
            >manage co-organizers</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-col>

    <v-col cols="12" md="4" class="mt-8">
      <h3>Social media</h3>
      todo
      <h3>Organization steps</h3>
      todo
    </v-col>

    <v-col cols="12" md="4" class="mt-8">
      <h3>Upcoming events</h3>
      <v-list>
        <template v-for="(event, index) in upcomingEvents">
          <v-list-item :key="event.name + event.date" two-line>
            <v-list-item-action>
              <v-icon>mdi-calendar</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ formatDate(event.date) }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ event.name }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < upcomingEvents.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>

        <v-list-item two-line ripple to="app/events">
          <v-list-item-title class="text-center"
            >view all events</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <h3 class="mt-8">Similar projects</h3>
      <v-list>
        <template v-for="(project, index) in similarProjects">
          <v-list-item :key="project.name + project.author" two-line>
            <v-list-item-action>
              <v-icon>mdi-rocket-launch</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ project.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ project.author }}, {{ project.created }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider
            v-if="index < upcomingEvents.length - 1"
            :key="index"
            :inset="true"
          ></v-divider>
        </template>

        <v-list-item two-line ripple to="app/matchmaking">
          <v-list-item-title class="text-center"
            >see more projects</v-list-item-title
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
      ],

      events: [
        {
          name: "Org. meeting",
          date: "2020-10-07 12:00:00"
        },
        {
          name: "Cleaning day",
          date: "2020-10-10 10:00:00"
        },
        {
          name: "Reflection / media",
          date: "2020-10-11 11:00:00"
        }
      ],

      similarProjects: [
        {
          name: "Nettoyons Orsay",
          author: "Toine Mannuel",
          created: "7d ago"
        },
        {
          name: "Recycling awareness",
          author: "Antonio Jobim",
          created: "2d ago"
        }
      ]
    }
  }),

  computed: {
    upcomingEvents() {
      return this.project.events.slice(0, 3);
    },

    similarProjects() {
      return this.project.similarProjects;
    }
  },

  methods: {
    formatDate(date) {
      const d = new Date(date);
      const mo = new Intl.DateTimeFormat("gb", { month: "short" }).format(d);
      const wd = new Intl.DateTimeFormat("gb", { weekday: "short" }).format(d);
      const da = d.getDate();
      const ho = d.getHours();
      const mi = ("0" + d.getMinutes()).slice(-2);

      return `${wd}. ${mo}. ${da}, ${ho}:${mi}`;
    }
  }
};
</script>

<style></style>
