import { inter, poppins, workSans } from '@/common/utils/font'
import './globals.css'
import { Toaster } from '@/common/components/ui/toaster'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${poppins.variable} ${inter.variable}`}
    >
      <title>Naulo Jyoti English School</title>
      <body className="overflow-x-hidden lg:overflow-y-hidden main-layout-container">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
