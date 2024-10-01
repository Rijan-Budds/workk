import { ReactNode } from 'react'
import { NavSection } from './_components/NavSection'
import Footer from '@/common/components/Molecules/Footer/Footer'
import { ISettingsResponseData } from '../(routes)/contact/_interface/Contact'
import { UseServerFetch } from '@/common/hook/useServerFetch'

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const settingsData: ISettingsResponseData | undefined = await UseServerFetch(
    '/api/v1/settings'
  )

  return (
    <div className="h-screen overflow-y-scroll">
      <NavSection settings={settingsData} />
      {children}
      <Footer settings={settingsData} />
    </div>
  )
}
