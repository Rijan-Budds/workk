import { NoDataFound } from '@/common/components/NoDataFound'
import AcademicDetail from '../_components/AcademicDetail'

// STATIC DATA FOR PROTOTYPE - Edit these to change content
const STATIC_ACADEMIC_DATA = {
  law: {
    banner: {
      id: 1,
      title: "Law",
      subtitle: "Plus Two",
      link: "/academics/plustwo/law",
      isEnabled: true,
      type: "academic",
      image: {
        key: "/home/naulo.jpg"
      }
    },
    data: {
      id: 1,
      title: "LAW",
      articleTitle: "Empowering Tomorrow's Legal Minds",
      slug: "law",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt nisi in nulla sagittis, a suscipit nunc tristique.</p>
        <p>Curabitur posuere, lacus at suscipit blandit, magna elit ullamcorper augue, ac laoreet tellus nibh nec lacus.</p>
      `
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
        key: "/home/naulo.jpg"
      }
    },
    data: {
      id: 2,
      title: "MANAGEMENT",
      articleTitle: "We consider each application with care.",
      slug: "management",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus.</p>
        <p>Donec fringilla, lacus nec viverra faucibus, nisi libero vulputate sapien, et ultrices sapien mauris id libero.</p>
      `
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
        key: "/home/naulo.jpg"
      }
    },
    data: {
      id: 3,
      title: "HUMANITIES",
      articleTitle: "Exploring Human Culture and Society",
      slug: "humanities",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tincidunt ipsum. Maecenas nec gravida risus.</p>
        <p>Suspendisse potenti. Vivamus ac feugiat risus, nec tincidunt purus. Fusce tempor velit at mauris fermentum rhoncus.</p>
      `
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
        key: "/home/naulo.jpg"
      }
    },
    data: {
      id: 4,
      title: "EDUCATION",
      articleTitle: "Shaping Future Educators",
      slug: "education",
      programType: "plustwo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec leo non orci suscipit pulvinar vel vel odio.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dictum sapien sit amet sodales faucibus.</p>
      `
    }
  }
}


const Page = async ({ params }: { params: { slug: string } }) => {
  // PROTOTYPE: Use static data instead of API call
  const staticData = STATIC_ACADEMIC_DATA[params.slug as keyof typeof STATIC_ACADEMIC_DATA]
  
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