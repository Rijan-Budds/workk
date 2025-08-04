import { NoDataFound } from '@/common/components/NoDataFound'
import AcademicDetail from '../_components/AcademicDetail'


const staticAcademicData = {
  law: {
    banner: {
      id: 1,
      title: "Law",
      subtitle: "Plus Two",
      link: "/academics/plustwo/law",
      isEnabled: true,
      type: "academic",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    data: {
      id: "1",
      title: "LAW",
      articleTitle: "Empowering Tomorrow's Legal Minds",
      slug: "law",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Curabitur posuere, lacus at suscipit blandit.</p>
      `,
      image: {
        key: ["/home/user1.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      }
    }
  },
  management: {
    banner: {
      id: 2,
      title: "Management",
      subtitle: "Plus Two",
      link: "/academics/plustwo/management",
      isEnabled: true,
      type: "academic",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    data: {
      id: "2",
      title: "MANAGEMENT",
      articleTitle: "We consider each application with care.",
      slug: "management",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
        <p>Donec fringilla, lacus nec viverra faucibus, nisi libero vulputate sapien.</p>
      `,
      image: {
        key: ["/home/user2.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      }
    }
  },
  humanities: {
    banner: {
      id: 3,
      title: "Humanities",
      subtitle: "Plus Two",
      link: "/academics/plustwo/humanities",
      isEnabled: true,
      type: "academic",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    data: {
      id: "3",
      title: "HUMANITIES",
      articleTitle: "Exploring Human Culture and Society",
      slug: "humanities",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vivamus ac feugiat risus, nec tincidunt purus.</p>
      `,
      image: {
        key: ["/home/user3.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      }
    }
  },
  education: {
    banner: {
      id: 4,
      title: "Education",
      subtitle: "Plus Two",
      link: "/academics/plustwo/education",
      isEnabled: true,
      type: "academic",
      image: {
        key: ["/home/naulo.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    data: {
      id: "4",
      title: "EDUCATION",
      articleTitle: "Shaping Future Educators",
      slug: "education",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Duis dictum sapien sit amet sodales faucibus.</p>
      `,
      image: {
        key: ["/home/user4.jpg"],
        bucket: [""],
        mimeType: ["image/jpeg"]
      }
    }
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  // PROTOTYPE: Use static data instead of API call
  const staticData = staticAcademicData[params.slug as keyof typeof staticAcademicData]

  // Simulate the API response structure
  const response = staticData ? {
    banner: staticData.banner,
    data: staticData.data
  } : null

  const renderAcademicsDetailUi = () => {
    if (!response?.data) {
      return (
        <div className="h-screen flex justify-center items-center">
          <NoDataFound title="No detail found" />
        </div>
      )
    }

    if (response) {
      return (
        <AcademicDetail
          bannerDetail={response.banner}
          detail={response.data}
          slug={params.slug}
        />
      )
    }
  }

  return renderAcademicsDetailUi()
}

export default Page