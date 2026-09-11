'use client'

import { useRef, useState, useCallback } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'
import { useLang } from '@/app/lang-context'

const VIDEOS = ['/hero-1.mp4', '/hero-2.mp4', '/hero-3.mp4']

const t = {
  ja: {
    badge1: '豊洲駅 徒歩2分',
    badge2: '聖路加国際病院 連携',
    h1a: '豊洲の家族の、',
    h1b: 'かかりつけ眼科へ。',
    sub: 'お子さまの目の成長が心配なとき、\n自分の目がなんとなく気になるとき。\n豊洲駅からすぐそこに、気軽に通えるお近くの眼科があります。\n日常的なお悩みから大学病院レベルの専門診療まで、患者さんに合わせた幅広い対応が可能です。',
    cta1: 'LINEで予約',
    ctaWeb: 'Web予約',
    cta2: '小児近視外来について',
  },
  en: {
    badge1: '2 min from Toyosu Sta.',
    badge2: 'St. Luke\'s Hospital Partner',
    h1a: 'Your neighborhood',
    h1b: 'eye clinic in Toyosu.',
    sub: "Whether you're worried about your child's vision\nor have a concern of your own —\nwe're right here, just steps from Toyosu Station.\nFrom everyday eye care to advanced specialist treatment, we tailor our care to every patient.",
    cta1: 'Book via LINE',
    ctaWeb: 'Book Online',
    cta2: 'About Myopia Clinic',
  },
}

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const videoRef = useRef<HTMLVideoElement>(null)
  const preloadRef = useRef<HTMLVideoElement>(null)
  const indexRef = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const switchedRef = useRef(false)

  // 残り0.3秒で次の動画をプリロード＆即切り替え
  const handleTimeUpdate = useCallback(() => {
    const v = videoRef.current
    if (!v || switchedRef.current) return
    const remaining = v.duration - v.currentTime
    if (remaining <= 0.3 && isFinite(remaining)) {
      switchedRef.current = true
      const next = (indexRef.current + 1) % VIDEOS.length
      indexRef.current = next
      setCurrentIndex(next)
      v.src = VIDEOS[next]
      v.load()
      v.play().catch(() => {})
      switchedRef.current = false
    }
  }, [])

  // timeupdate でカバーできなかった場合の保険
  const handleEnded = useCallback(() => {
    const next = (indexRef.current + 1) % VIDEOS.length
    indexRef.current = next
    setCurrentIndex(next)
    if (videoRef.current) {
      videoRef.current.src = VIDEOS[next]
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景動画 — 3本を順番にループ再生 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEOS[0]}
        preload="auto"
      />
      {/* 次の動画をバックグラウンドでプリロード */}
      <video
        ref={preloadRef}
        muted
        playsInline
        aria-hidden="true"
        className="hidden"
        src={VIDEOS[(currentIndex + 1) % VIDEOS.length]}
        preload="auto"
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-[oklch(0.24_0.05_155)]/60" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[oklch(0.24_0.05_155)]/50 to-transparent pointer-events-none" />

      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">

        {/* 上部バッジ */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {tx.badge1}
          </span>
          <span className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
            {tx.badge2}
          </span>
        </div>

        {/* キャッチコピー */}
        <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-[1.2] mb-6 text-balance drop-shadow-sm max-w-2xl">
          {tx.h1a}<br />
          <span className="text-[oklch(0.85_0.15_128)]">{tx.h1b}</span>
        </h1>

        <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-xl whitespace-pre-line">
          {tx.sub}
        </p>

        {/* CTAボタン群 */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://line.me/R/ti/p/@337ufelh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-[#05b34c] transition-colors text-sm md:text-base shadow-xl whitespace-nowrap"
          >
            {tx.cta1}
          </a>
          <a
            href="https://toyosu-eye.reserve.ne.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-white/90 transition-colors text-sm md:text-base shadow-xl whitespace-nowrap"
          >
            {tx.ctaWeb}
          </a>
          <a
            href="#myopia"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold hover:bg-white/25 transition-colors text-sm md:text-base whitespace-nowrap"
          >
            {tx.cta2}
          </a>
        </div>


      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  )
}
