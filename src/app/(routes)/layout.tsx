import Footer from '@/common/components/Molecules/Footer/Footer'
import { ScrollToTopUi } from '@/common/components/Molecules/ScrollToTop'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { ReactNode } from 'react'
import { NavSection } from '../(home)/_components/NavSection'
import { ISettingsResponseData } from './contact/_interface/Contact'

export default async function RouteLayout({
  children,
}: {
  children: ReactNode
}) {
  const settingsData: ISettingsResponseData | undefined = await UseServerFetch(
    '/api/v1/settings'
  )

  return (
    <div className="h-screen overflow-y-scroll route-layout-container">
      <NavSection settings={settingsData} />
      {children}
      <ScrollToTopUi layout=".route-layout-container" />
      <Footer settings={settingsData} />
    </div>
  )
}
