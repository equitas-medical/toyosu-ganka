'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/app/lang-context'

const navItemsJa = [
  { label: '診療案内', href: '/#medical' },
  { label: '小児近視外来', href: '/#myopia' },
  { label: '手術・専門診療', href: '/#surgery' },
  { label: '医師紹介', href: '/#doctor' },
  { label: 'アクセス', href: '/#access' },
]

const navItemsEn = [
  { label: 'Services', href: '/#medical' },
  { label: 'Myopia Control', href: '/#myopia' },
  { label: 'Surgery', href: '/#surgery' },
  { label: 'Our Doctors', href: '/#doctor' },
  { label: 'Access', href: '/#access' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLang()

  const navItems = lang === 'ja' ? navItemsJa : navItemsEn
  const lineLabel = lang === 'ja' ? 'LINE予約' : 'LINE'
  const webLabel = lang === 'ja' ? 'Web予約' : 'Book Online'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* クリニック名 */}
          <a href="/" className="flex items-center gap-2.5 shrink-0 min-h-0">
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-base font-bold tracking-wide transition-colors ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {lang === 'ja' ? '眼科とよす医院' : 'Toyosu Eye Clinic'}
              </span>
              <span
                className={`text-[10px] tracking-widest mt-0.5 transition-colors ${
                  scrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}
              >
                TOYOSU EYE CLINIC
              </span>
            </div>
          </a>

          {/* デスクトップナビ */}
          <nav className="hidden lg:flex items-center gap-1" aria-label={lang === 'ja' ? 'メインナビゲーション' : 'Main navigation'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-foreground hover:text-primary hover:bg-secondary'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右側：言語切替 + 予約ボタン */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* JP / EN トグル */}
            <div
              className={`flex items-center rounded-full border text-xs font-bold overflow-hidden transition-colors ${
                scrolled ? 'border-border' : 'border-white/30'
              }`}
              role="group"
              aria-label="Language selector"
            >
              <button
                onClick={() => setLang('ja')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'ja'
                    ? 'bg-primary text-primary-foreground'
                    : scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-pressed={lang === 'ja'}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <a
              href="https://line.me/R/ti/p/@337ufelh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#06C755] text-white px-4 py-2.5 rounded-full text-sm font-bold hover:bg-[#05b34c] transition-colors shadow-sm whitespace-nowrap"
            >
              {lineLabel}
            </a>
            <a
              href="https://toyosu-eye.reserve.ne.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm whitespace-nowrap"
            >
              {webLabel}
            </a>
          </div>

          {/* モバイル右側：言語切替 + ハンバーガー */}
          <div className="lg:hidden flex items-center gap-2">
            <div
              className={`flex items-center rounded-full border text-xs font-bold overflow-hidden transition-colors ${
                scrolled ? 'border-border' : 'border-white/30'
              }`}
              role="group"
              aria-label="Language selector"
            >
              <button
                onClick={() => setLang('ja')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'ja'
                    ? 'bg-primary text-primary-foreground'
                    : scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-pressed={lang === 'ja'}
              >
                JP
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 transition-colors ${
                  lang === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? (lang === 'ja' ? 'メニューを閉じる' : 'Close menu') : (lang === 'ja' ? 'メニューを開く' : 'Open menu')}
              aria-expanded={isOpen}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label={lang === 'ja' ? 'モバイルナビゲーション' : 'Mobile navigation'}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
            <a
              href="https://line.me/R/ti/p/@337ufelh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#06C755] text-white py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-[#05b34c] transition-colors"
            >
              {lineLabel}
            </a>
            <a
              href="https://toyosu-eye.reserve.ne.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-primary text-primary-foreground py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-colors"
            >
              {webLabel}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
