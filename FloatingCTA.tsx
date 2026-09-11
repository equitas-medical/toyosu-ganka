'use client'

import { useState, useEffect } from 'react'
import { useLang } from '@/app/lang-context'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const { lang } = useLang()

  const lineLabel = lang === 'ja' ? 'LINE予約' : 'LINE'
  const webLabel = lang === 'ja' ? 'Web予約' : 'Book Online'

  const LINE_URL = 'https://line.me/R/ti/p/@337ufelh'
  const WEB_URL = 'https://toyosu-eye.reserve.ne.jp/'

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:right-6 md:left-auto"
      role="complementary"
      aria-label={lang === 'ja' ? '予約' : 'Booking'}
    >
      {/* モバイル：フルワイドバー（2分割） */}
      <div className="md:hidden flex w-full shadow-2xl">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#06C755] text-white py-4 font-bold text-base active:opacity-90"
        >
          {lineLabel}
        </a>
        <a
          href={WEB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold text-base active:opacity-90"
        >
          {webLabel}
        </a>
      </div>

      {/* デスクトップ：右下カード（縦2ボタン） */}
      <div className="hidden md:flex flex-col gap-2">
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3.5 rounded-2xl shadow-2xl font-bold text-sm hover:bg-[#05b34c] transition-colors"
        >
          {lineLabel}
        </a>
        <a
          href={WEB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-2xl shadow-2xl font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          {webLabel}
        </a>
      </div>
    </div>
  )
}
