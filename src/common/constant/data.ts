export const navLinks = [
  {
    id: 1,
    title: 'About Us',
    link: '/about',
    sublink: [
      {
        id: 1,
        title: 'Introduction',
        link: '/introduction',
      },
      {
        id: 2,
        title: 'Teams',
        link: '/teams',
      },
      {
        id: 3,
        title: 'Our Success',
        link: '/success',
      },
    ],
    isDropDown: true,
  },
  {
    id: 2,
    title: 'Academics',
    link: '/',
    isDropDown: true,
    sublink: null,
  },
  {
    id: 3,
    title: 'Admission',
    link: '/',
    isDropDown: true,
    sublink: null,
  },
  {
    id: 4,
    title: 'Gallery',
    link: '/',
    isDropDown: false,
    sublink: null,
  },
  {
    id: 5,
    title: 'News & Events',
    link: '/',
    isDropDown: false,
    sublink: null,
  },
]
