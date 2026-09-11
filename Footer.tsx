'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { useLang } from '@/app/lang-context'

const navLinksJa = [
  { label: 'ホーム', href: '/' },
  { label: '診療案内', href: '/#medical' },
  { label: '小児近視外来', href: '/#myopia' },
  { label: '手術・専門診療', href: '/#surgery' },
  { label: '医師紹介', href: '/#doctor' },
  { label: 'アクセス', href: '/#access' },
  { label: '疾患別ガイド', href: '/diseases' },
  { label: 'コラム', href: '/column' },
  { label: 'スタッフ紹介', href: '/staff' },
]

const navLinksEn = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#medical' },
  { label: 'Myopia Control', href: '/#myopia' },
  { label: 'Surgery', href: '/#surgery' },
  { label: 'Our Doctors', href: '/#doctor' },
  { label: 'Access', href: '/#access' },
  { label: 'Eye Conditions', href: '/diseases' },
  { label: 'Articles', href: '/column' },
  { label: 'Staff', href: '/staff' },
]

export default function Footer() {
  const { lang } = useLang()
  const navLinks = lang === 'ja' ? navLinksJa : navLinksEn

  return (
    <footer className="bg-[oklch(0.22_0.045_155)] text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* クリニック情報 */}
          <div>
            <div className="mb-4">
              <img
                src="/sennokikai-logo.png"
                alt="医療法人 千の樹会 SENNOKIKAI MEDICAL GROUP"
                className="h-20 w-auto mb-3 bg-white rounded-lg p-2.5"
              />
              <p className="font-serif text-lg font-bold text-white">
                {lang === 'ja' ? '眼科とよす医院' : 'Toyosu Eye Clinic'}
              </p>
              <p className="text-white/50 text-xs tracking-widest mt-1">TOYOSU EYE CLINIC</p>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                <div>
                  {lang === 'ja' ? '東京都江東区豊洲' : 'Toyosu, Koto-ku, Tokyo'}<br />
                  {lang === 'ja' ? '豊洲駅 徒歩2分' : '2 min from Toyosu Station'}
                </div>
              </div>
              <p className="text-xs text-white/40 mt-3 leading-relaxed">
                {lang === 'ja'
                  ? '大学病院レベルの専門医療を、豊洲でもっと身近に。'
                  : 'University-level specialist eye care, closer to home.'}
              </p>
            </div>
          </div>

          {/* ナビリンク */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-white/90">
              {lang === 'ja' ? 'サイトマップ' : 'Site map'}
            </h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 診療時間・連携 */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-white/90">
              {lang === 'ja' ? '診療時間' : 'Clinic hours'}
            </h3>
            <div className="text-sm text-white/60 space-y-1 mb-5">
              {lang === 'ja' ? (
                <>
                  <p>午前：10:00〜12:30</p>
                  <p>午後：13:45〜18:00</p>
                  <p className="text-xs text-white/40 pt-2">休診：日曜・祝日・水曜午後</p>
                </>
              ) : (
                <>
                  <p>AM: 10:00–12:30</p>
                  <p>PM: 13:45–18:00</p>
                  <p className="text-xs text-white/40 pt-2">Closed: Sundays, holidays, Wed PM</p>
                </>
              )}
            </div>
            <h3 className="font-bold text-xs mb-2 text-white/70 uppercase tracking-widest">
              {lang === 'ja' ? '連携医療機関' : 'Partner hospitals'}
            </h3>
            <ul className="space-y-1 text-xs text-white/45">
              {lang === 'ja' ? (
                <>
                  <li>昭和大学附属豊洲病院</li>
                  <li>聖路加国際病院</li>
                  <li>昭和医科大学江東豊洲病院</li>
                  <li>順天堂東京江東高齢者医療センター</li>
                </>
              ) : (
                <>
                  <li>Showa University Toyosu Hospital</li>
                  <li>St. Luke&apos;s International Hospital</li>
                  <li>Showa Medical University Koto Toyosu Hospital</li>
                  <li>Juntendo Tokyo Koto Geriatric Medical Center</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} {lang === 'ja' ? '眼科とよす医院' : 'Toyosu Eye Clinic'}. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            {lang === 'ja'
              ? '東京都江東区豊洲の眼科クリニック｜豊洲駅徒歩2分'
              : 'Ophthalmology clinic in Toyosu, Koto-ku, Tokyo'}
          </p>
        </div>
      </div>
    </footer>
  )
}
