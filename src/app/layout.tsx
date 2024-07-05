import { poppins, workSans } from '@/common/utils/font'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${workSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
