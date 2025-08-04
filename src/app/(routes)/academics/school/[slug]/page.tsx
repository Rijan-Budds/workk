import { NoDataFound } from '@/common/components/NoDataFound'
import School from '../_components/School'

// STATIC DATA FOR PROTOTYPE - Edit these to change content
const staticSchoolData = {
  'primary-level-one-five': {
    banner: {
      id: 1,
      title: "Primary School",
      subtitle: "Foundation Learning",
      link: "/academics/school/primary-level-one-five",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "1",
      title: "PRIMARY SCHOOL",
      articleTitle: "Building Strong Foundations",
      slug: "primary-level-one-five",
      programType: "primary",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/pri1.jpg", "/home/pri2.jpg", "/home/pri3.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'pre-school-kindergarten': {
    banner: {
      id: 5,
      title: "Pre-School Kindergarten",
      subtitle: "Early Learning Foundation",
      link: "/academics/school/pre-school-kindergarten",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "5",
      title: "PRE-SCHOOL KINDERGARTEN",
      articleTitle: "Early Childhood Development",
      slug: "pre-school-kindergarten",
      programType: "pre-school",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/kid1.jpg", "/home/kid2.jpg", "/home/kid3.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'basic-level-six-eight': {
    banner: {
      id: 6,
      title: "Basic Level (6-8)",
      subtitle: "Foundation Building",
      link: "/academics/school/basic-level-six-eight",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "6",
      title: "BASIC LEVEL (6-8)",
      articleTitle: "Building Strong Academic Foundation",
      slug: "basic-level-six-eight",
      programType: "basic-level",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/bas1.jpg", "/home/bas2.jpg", "/home/bas3.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'senior-level-nine-ten': {
    banner: {
      id: 7,
      title: "Senior Level (9-10)",
      subtitle: "Pre-Higher Secondary",
      link: "/academics/school/senior-level-nine-ten",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "7",
      title: "SENIOR LEVEL (9-10)",
      articleTitle: "Preparing for Higher Education",
      slug: "senior-level-nine-ten",
      programType: "senior-level",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/hi1.jpg", "/home/hi2.jpg", "/home/hi3.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'secondary-school': {
    banner: {
      id: 2,
      title: "Secondary School",
      subtitle: "Academic Excellence",
      link: "/school/secondary-school",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "2",
      title: "SECONDARY SCHOOL",
      articleTitle: "Preparing for Excellence",
      slug: "secondary-school",
      programType: "secondary",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/user1.jpg", "/home/user1.jpg", "/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'higher-secondary': {
    banner: {
      id: 3,
      title: "Higher Secondary",
      subtitle: "College Preparation",
      link: "/school/higher-secondary",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "3",
      title: "HIGHER SECONDARY",
      articleTitle: "Gateway to Success",
      slug: "higher-secondary",
      programType: "higher-secondary",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/user1.jpg", "/home/user1.jpg", "/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg", "image/jpeg", "image/jpeg"]
      }
    }
  },
  'kindergarten': {
    banner: {
      id: 4,
      title: "Kindergarten",
      subtitle: "Early Learning",
      link: "/school/kindergarten",
      isEnabled: true,
      type: "school",
      image: {
        key: ["/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    data: {
      id: "4",
      title: "KINDERGARTEN",
      articleTitle: "Early Childhood Development",
      slug: "kindergarten",
      programType: "kindergarten",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      `,
      image: {
        key: ["/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      }
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  // PROTOTYPE: Use static data instead of API call
  const staticData = staticSchoolData[params.slug as keyof typeof staticSchoolData]
  
  // Simulate the API response structure
  const response = staticData ? {
    banner: staticData.banner,
    data: staticData.data
  } : null

  const renderSchoolDetailUi = () => {
    if (!response?.data) {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }

    if (response) {
      return (
        <School
          bannerDetail={response.banner}
          detail={response.data}
          slug={params.slug}
        />
      )
    }
  }

  return renderSchoolDetailUi()
}

export default Page