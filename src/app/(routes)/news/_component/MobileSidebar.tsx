import React from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'

export const MobileSidebar = () => {
  return (
    <div className="flex flex-col 2lg:hidden gap-y-6">
      <RecentPostUi />
      <DownloadUi />
      <SidebarAd />
    </div>
  )
}
