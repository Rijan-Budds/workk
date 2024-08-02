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
    ],
  },
  {
    id: 3,
    title: 'Our facilities',
    link: '',
    isDropDown: true,
    sublink: [
      {
        id: 1,
        title: 'Science Lab',
        link: '/',
      },
      {
        id: 2,
        title: 'School Canteen',
        link: '/',
      },
      {
        id: 3,
        title: 'Library',
        link: '/',
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
    isDropDown: false,
    sublink: [],
  },
]
