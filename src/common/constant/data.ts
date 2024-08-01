export const navLinks = [
  {
    id: 1,
    title: 'About Us',
    link: '',
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
    link: '',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'Overview',
        link: '/',
      },
      {
        id: 2,
        title: 'Plus Two',
        link: '/',
        subsublink: [
          {
            id: 1,
            title: 'Management',
            link: '/',
          },
          {
            id: 2,
            title: 'Humanities',
            link: '/',
          },
          {
            id: 3,
            title: 'Law',
            link: '/',
          },
        ],
      },
      {
        id: 3,
        title: 'School Level',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Our facilities',
    link: '/facilities',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'Science Lab',
        link: '/facilities',
      },
      {
        id: 2,
        title: 'School Canteen',
        link: '/facilities',
      },
      {
        id: 3,
        title: 'Library',
        link: '/facilities',
      },
      {
        id: 4,
        title: 'Computer Lab',
        link: '/',
      },
      {
        id: 5,
        title: 'Transportation',
        link: '/facilities',
      },
      {
        id: 6,
        title: 'School-Hostel',
        link: '/facilities',
      },
      {
        id: 7,
        title: 'Sports',
        link: '/facilities',
      },
    ],
  },
  {
    id: 4,
    title: 'Gallery',
    link: '/gallery',
    isDropDown: false,
    sublink: null,
  },
  {
    id: 5,
    title: 'News & Events',
    link: '/news',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'News & Events',
        link: '/news',
      },
      {
        id: 2,
        title: 'Notices',
        link: '/notice',
      },
      {
        id: 3,
        title: 'Downloads',
        link: '/brochure',
      },
    ],
  },
]
