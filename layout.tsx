import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function SubpagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
