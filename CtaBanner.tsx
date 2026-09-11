'use client'

import { useLang } from '@/app/lang-context'

const t = {
  ja: {
    label: 'Reservation',
    h2: '目のことで気になることがあれば、どうぞお気軽にご相談ください。',
    sub: '小さなお子さまの近視から、白内障・網膜の手術まで。豊洲駅徒歩2分、平日昼休みにも受診していただけます。',
    cta1: 'LINEで予約',
    ctaWeb: 'Web予約',
    cta2: 'アクセスを見る',
    footer: '東京都江東区豊洲　|　豊洲駅 徒歩2分',
  },
  en: {
    label: 'Reservation',
    h2: 'Have a question about your eyes? We are here to help.',
    sub: 'From childhood myopia to cataract and retinal surgery — all in one clinic. Just a 2-minute walk from Toyosu Station.',
    cta1: 'Book via LINE',
    ctaWeb: 'Book Online',
    cta2: 'Getting here',
    footer: 'Toyosu, Koto-ku, Tokyo　|　2 min from Toyosu Station',
  },
  en: {
    label: 'LINE Reservation',
    h2: 'Have a question about your eyes? We are here to help.',
    sub: 'From childhood myopia to cataract and retinal surgery — all in one clinic. Just a 2-minute walk from Toyosu Station, with lunchtime appointments on weekdays.',
    cta1: 'Book via LINE',
    cta2: 'Getting here',
    footer: 'Toyosu, Koto-ku, Tokyo　|　2 min from Toyosu Station　|　Weekday lunchtime hours',
  },
}

export default function CtaBanner() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section className="bg-primary py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary-foreground/70 text-xs font-bold tracking-widest uppercase mb-2">
          {tx.label}
        </p>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-3 text-balance">
          {tx.h2}
        </h2>
        <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
          {tx.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://line.me/R/ti/p/@337ufelh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#06C755] text-white px-8 py-4 rounded-full font-bold hover:bg-[#05b34c] transition-colors shadow-lg text-base"
          >
            {tx.cta1}
          </a>
          <a
            href="https://toyosu-eye.reserve.ne.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors shadow-lg text-base"
          >
            {tx.ctaWeb}
          </a>
          <a
            href="#access"
            className="inline-flex items-center justify-center gap-2 bg-white/15 text-primary-foreground border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/25 transition-colors text-base"
          >
            {tx.cta2}
          </a>
        </div>
        <p className="text-primary-foreground/55 text-xs mt-6">
          {tx.footer}
        </p>
      </div>
    </section>
  )
}
