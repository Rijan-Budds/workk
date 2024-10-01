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
          {
            id: 4,
            title: 'Education',
            link: '/academics/plustwo/education',
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
            title: 'Pre-School (Kindergarten)',
            link: '/academics/school/pre-school-kindergarden',
          },
          {
            id: 2,
            title: 'Primary Level (One - Five)',
            link: '/academics/school/primary-level-one-five',
          },
          {
            id: 3,
            title: 'Basic Level (Six - Eight)',
            link: '/academics/school/basic-levl-six-eight',
          },
          {
            id: 4,
            title: 'Senior Level (Nine - Ten)',
            link: '/academics/school/senior-level-nine-ten',
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

export const staticFooterLinksData = [
  {
    title: 'Quick Links',
    content: [
      { text: 'Introduction', url: '/' },
      { text: 'Our Success', url: '/testimonials' },
      { text: 'Our Team', url: '/teams' },
      { text: 'Gallery', url: '/gallery' },
      { text: 'Admission', url: '/admission' },
      { text: 'Contact', url: '/contact' },
    ],
  },
  {
    title: 'Plus Two',
    content: [
      { text: 'Management', url: 'academics/plustwo/management' },
      { text: 'Humanities', url: 'academics/plustwo/humanities' },
      { text: 'Education', url: '/academics/plustwo/education' },
      { text: 'Law', url: '/academics/plustwo/law' },
    ],
  },
  {
    title: 'Important Links',
    content: [
      {
        text: 'Tribhuvan University',
        url: 'https://tu.edu.np/',
      },
      { text: 'National Examinations Board', url: 'https://neb.gov.np' },
      {
        text: 'Ministry of Education',
        url: 'https://moest.gov.np/',
      },
      {
        text: 'Office of the Controller of Examinations',
        url: 'https://www.see.gov.np/',
      },
      {
        text: 'District Education Office, Kathmandu',
        url: 'https://deo.kathmandu.gov.np',
      },
    ],
  },
]
