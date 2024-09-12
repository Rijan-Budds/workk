export const navLinks = [
  {
    id: 1,
    title: 'About Us',
    sublink: [
      {
        id: 1,
        title: 'Introduction',
        link: '/about',
      },
      {
        id: 2,
        title: 'Teams',
        link: '/teams',
      },
      {
        id: 3,
        title: 'Our Success',
        link: '/testimonials',
      },
    ],
    isDropDown: true,
  },
  {
    id: 2,
    title: 'Academics',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'Overview',
        link: '/academics',
      },
      {
        id: 2,
        title: 'Plus Two',
        link: '',
        subsublink: [
          {
            id: 1,
            title: 'Management',
            link: '/academics/plustwo/management',
          },
          {
            id: 2,
            title: 'Humanities',
            link: '/academics/plustwo/humanities',
          },
          {
            id: 3,
            title: 'Law',
            link: '/academics/plustwo/law',
          },
        ],
      },
      {
        id: 3,
        title: 'School Level',
        link: '',
        subsublink: [
          {
            id: 1,
            title: 'Pre-School (Kindergarden)',
            link: '/academics/school/preschool',
          },
          {
            id: 2,
            title: 'Primary Level (One - Five)',
            link: '/academics/school/primary',
          },
          {
            id: 3,
            title: 'Basic Level (Six - Eight)',
            link: '/academics/school/basic',
          },
          {
            id: 4,
            title: 'Senior Level (Nine - Ten)',
            link: '/academics/school/Senior',
          },
        ],
      },
      {
        id: 4,
        title: 'Admission',
        link: '/admission',
      },
    ],
  },
  {
    id: 3,
    title: 'Our facilities',
    link: '',
    isDropDown: true,
    sublink: [
      {
        id: 0,
        title: 'Overview',
        link: '/facilities',
      },

      {
        id: 1,
        title: 'Science Lab',
        link: '/facilities/science',
      },
      {
        id: 2,
        title: 'School Canteen',
        link: '/facilities/canteen',
      },
      {
        id: 3,
        title: 'Library',
        link: '/facilities/library',
      },
      {
        id: 4,
        title: 'Computer Lab',
        link: '/facilities/computer',
      },
      {
        id: 5,
        title: 'Transportation',
        link: '/facilities/transportation',
      },
      {
        id: 6,
        title: 'School-Hostel',
        link: '/facilities/hostel',
      },
      {
        id: 7,
        title: 'Sports',
        link: '/facilities/sports',
      },
    ],
  },
  {
    id: 4,
    title: 'Gallery',
    link: '/gallery',
    isDropDown: false,
    sublink: [],
  },
  {
    id: 5,
    title: 'News & Events',
    link: '/news',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'News & Notices',
        link: '/news',
      },
      {
        id: 2,
        title: 'Events',
        link: '/events',
      },
      {
        id: 3,
        title: 'Downloads',
        link: '/brochure',
      },
    ],
  },
]
