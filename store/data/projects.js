export default [
  {
    name: 'Clean day in Orsay',
    id: 'clean-day-orsay',
    bannerImg:
      'https://wilderness-society.org/wp-content/uploads/2019/03/Forest-Fire-Treuebrietzen-Brandenburg-22403.jpg',

    coorganizers: [
      {
        avatar:
          'https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png',
        title: 'Paulina',
        subtitle: 'Manages resources and crowdfunding, graphic designer',
        admin: true
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEtD-9q9Lu2ueYBwGALDni9mUZDY2PC-otEw&usqp=CAU',
        title: 'Francesco',
        subtitle: 'Manages social media, photographer',
        admin: true
      },
      {
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcZ66nh8KOULNtAGKMU0Q_j2M6mgSi5TZnMg&usqp=CAU',
        title: 'Serge',
        subtitle: 'Volunteer',
        admin: false
      }
    ],

    events: [
      {
        id: 1,
        name: 'Legal meeting',
        date: '2020-10-24',
        time: '18:00',
        privacy: 'Private',
        coorganizers: [
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEtD-9q9Lu2ueYBwGALDni9mUZDY2PC-otEw&usqp=CAU',
            name: 'Francesco'
          },
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcZ66nh8KOULNtAGKMU0Q_j2M6mgSi5TZnMg&usqp=CAU',
            name: 'Serge'
          }
        ],
        edit: '',
        done: false
      },

      {
        id: 2,
        name: 'Recycling Discussion',
        date: '2020-10-02',
        time: '16:00',
        privacy: 'Public',
        coorganizers: [
          {
            src:
              'https://cineuropa.org/imgCache/2020/09/06/1599392796214_0620x0435_27x0x1001x702_1599392845653.jpg',
            name: 'John'
          },
          {
            src:
              'https://womenrockproject.com/wp-content/uploads/2020/01/Screen-Shot-2020-01-27-at-10.19.29-AM.png',
            name: 'Paulina'
          }
        ],
        edit: '',
        done: true
      },
      {
        id: 3,
        name: 'Environmental Festival',
        date: '2020-10-03',
        time: '13:00',
        privacy: 'Public',
        coorganizers: [
          {
            src:
              'https://cineuropa.org/imgCache/2020/09/06/1599392796214_0620x0435_27x0x1001x702_1599392845653.jpg',
            name: 'John'
          },
          {
            src:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj5c50-PiIoaYes9cwYkA6CNDDC21fUG7uEQ&usqp=CAU',
            name: 'Ana'
          }
        ],
        edit: '',
        done: true
      }
    ],

    similarProjects: [
      {
        name: 'Nettoyons Orsay',
        author: 'Toine Mannuel',
        created: '7d ago'
      },
      {
        name: 'Recycling awareness',
        author: 'Antonio Jobim',
        created: '2d ago'
      }
    ],

    organizationTodo: [
      {
        id: '492e7c19-76c0-406d-a73f-8fa7520288e7',
        created: 123231312,
        done: true,
        text: 'Set up Facebook page'
      },
      {
        id: '179b4a32-fdb0-4caf-8c36-86381d4801b8',
        created: 123231312,
        done: true,
        text: 'Set up Instagram page'
      },
      {
        id: 'ffbaa43c-bdd7-4c16-b302-954e6d4e5a4c',
        created: 123231312,
        done: true,
        text: 'Set up events'
      },
      {
        id: '08553545-da7d-4f57-a670-cb0394c7bab7',
        created: 123231312,
        done: false,
        text: 'Find photographers'
      },
      {
        id: '323b5045-e75b-4c19-a52e-15d1c10ce926',
        created: 123231312,
        done: false,
        text: 'Request approval from municipality'
      }
    ]
  }
]
