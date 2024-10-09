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
      <title>Pawan Prakriti</title>
      <body className="overflow-x-hidden lg:overflow-y-hidden">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
