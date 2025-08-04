'use client'
import { useState } from 'react'

const staticAdmissionData = {
  'basic-level-six-eight': {
    title: 'Basic Level (Six – Eight)',
    heading: 'We consider each application with care.',
    description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
      <p>Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.</p>
    `,
  },
  'senior-level-nine-ten': {
    title: 'Senior Level (Nine – Ten)',
    heading: 'Preparing students for SEE and beyond.',
    description: `
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    `,
  },
  'primary-level-one-five': {
    title: 'Primary Level (One – Five)',
    heading: 'Nurturing young learners with care.',
    description: `
      <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    `,
  },
  'pre-school-kindergarten': {
    title: 'Pre-School (Kindergarten)',
    heading: 'Early childhood development through play.',
    description: `
      <p>Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
    `,
  },
  humanities: {
    title: 'Humanities',
    heading: 'Explore history, society, and values.',
    description: `
      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
    `,
  },
  education: {
    title: 'Education',
    heading: 'Training future educators.',
    description: `
      <p>Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.</p>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    `,
  },
  law: {
    title: 'Law',
    heading: 'Understanding justice and rights.',
    description: `
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
      <p>Donec sed odio dui. Sed posuere consectetur est at lobortis.</p>
    `,
  },
  management: {
    title: 'Management',
    heading: 'Fostering leadership and business skills.',
    description: `
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.</p>
    `,
  },
}

const AdmissionSection = () => {
  const [activeSlug, setActiveSlug] = useState('basic-level-six-eight')
  const activeData = staticAdmissionData[activeSlug as keyof typeof staticAdmissionData]

  const renderDescription = (html: string) => (
    <div
      className="text-body font-workSans font-normal text-base leading-7 space-y-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16 flex flex-col 2lg:flex-row gap-[50px] lg:gap-[80px] 2lg:gap-[56px]">
      {/* Left Column */}
      <div className="w-full 2lg:w-3/4">
        <span className="text-primary uppercase font-medium text-sm leading-5 tracking-wider">
          {activeData.title}
        </span>
        <h2 className="text-heading text-[32px] md:text-[40px] font-poppins font-semibold leading-tight mt-4">
          {activeData.heading}
        </h2>

        <div className="mt-6">{renderDescription(activeData.description)}</div>

        <h3 className="text-xl font-poppins font-semibold text-heading mt-12 mb-4">
          Admission Process
        </h3>
        <p className="text-body font-workSans text-base leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
          nisi in justo fringilla malesuada. Vivamus convallis nisl at ligula
          blandit, nec ultricies sem sagittis. Etiam nec tincidunt elit.
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="w-full 2lg:w-1/4 flex flex-col gap-4">
        {Object.entries(staticAdmissionData).map(([slug, { title }]) => (
          <div
            key={slug}
            onClick={() => setActiveSlug(slug)}
            className={`cursor-pointer px-6 py-4 rounded-xl text-sm font-medium border ${
              activeSlug === slug
                ? 'bg-orange-600 text-white border-orange-600'
                : 'bg-white text-black border-border hover:bg-gray-50'
            }`}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdmissionSection