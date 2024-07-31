import React from 'react'
import { DownloadUi, RecentPostUi } from './DownloadUi'
import { SidebarAd } from './SidebarAd'

export const StickySidebar = () => {
  return (
    <div className="max-h-[1015px]  w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <RecentPostUi />
      <DownloadUi />
      <SidebarAd />
    </div>
  )
}
