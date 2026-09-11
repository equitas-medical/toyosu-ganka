'use client'

import { MapPin, Clock, Train, AlertCircle } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { useLang } from '@/app/lang-context'

const scheduleJa = [
  { time: '午前 10:00〜12:30', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '○', sun: '休' },
  { time: '午後 13:45〜18:00', mon: '○', tue: '昭和', wed: '休', thu: '○', fri: '○', sat: '休', sun: '休' },
]

const scheduleEn = [
  { time: 'AM  10:00–12:30', mon: '○', tue: '○', wed: '○', thu: '○', fri: '○', sat: '○', sun: 'Closed' },
  { time: 'PM  13:45–18:00', mon: '○', tue: 'Showa', wed: 'Closed', thu: '○', fri: '○', sat: 'Closed', sun: 'Closed' },
]

const daysJa = ['月', '火', '水', '木', '金', '土', '日']
const daysEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const t = {
  ja: {
    badge: 'Access & Hours',
    h2: '診療時間・アクセス',
    sub: '豊洲駅から徒歩2分。平日のお昼休みや仕事帰りにもご来院いただけます。',
    hoursTitle: '診療時間',
    note1: '休診日：日曜・祝日・水曜午後',
    note2: '火曜午後：昭和大学附属豊洲病院 岩渕教授が担当',
    note3: '午前は12:30まで診療 ― お昼休みの受診も可能です',
    mapTitle: '眼科とよす医院',
    mapAddr: '東京都江東区豊洲',
    accessTitle: '交通アクセス',
    access1: 'ゆりかもめ「豊洲駅」より徒歩約2分',
    access2: '東京メトロ有楽町線「豊洲駅」より徒歩約2分',
    mapLabel: '眼科とよす医院の地図（Google Maps）',
  },
  en: {
    badge: 'Access & Hours',
    h2: 'Hours & Access',
    sub: '2-minute walk from Toyosu Station. Easy to visit on your lunch break or after work.',
    hoursTitle: 'Clinic hours',
    note1: 'Closed: Sundays, public holidays, Wednesday afternoons',
    note2: 'Tuesday PM: Prof. Iwabuchi (Showa University) on duty',
    note3: 'Morning appointments until 12:30 — convenient for lunchtime visits',
    mapTitle: 'Toyosu Eye Clinic',
    mapAddr: 'Toyosu, Koto-ku, Tokyo',
    accessTitle: 'Getting here',
    access1: 'Yurikamome Line "Toyosu" Station — approx. 2 min on foot',
    access2: 'Tokyo Metro Yurakucho Line "Toyosu" Station — approx. 2 min on foot',
    mapLabel: 'Map to Toyosu Eye Clinic (Google Maps)',
  },
}

export default function ClinicInfo() {
  const { lang } = useLang()
  const tx = t[lang]
  const schedule = lang === 'ja' ? scheduleJa : scheduleEn
  const days = lang === 'ja' ? daysJa : daysEn

  return (
    <section id="access" className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
              {tx.badge}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
              {tx.h2}
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto leading-relaxed">
              {tx.sub}
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 診療時間カード */}
          <Reveal direction="left">
            <div className="bg-card rounded-2xl border border-border shadow-sm p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                <h3 className="font-bold text-foreground text-lg">{tx.hoursTitle}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm" aria-label={tx.hoursTitle}>
                  <thead>
                    <tr>
                      <th className="text-left py-2 pr-3 text-muted-foreground font-medium text-xs w-28 whitespace-nowrap" scope="col">
                        {lang === 'ja' ? '時間帯' : 'Time'}
                      </th>
                      {days.map((day) => (
                        <th
                          key={day}
                          scope="col"
                          className={`text-center py-2 px-1 font-bold text-xs ${
                            day === '日' || day === 'Sun' ? 'text-destructive' : day === '土' || day === 'Sat' ? 'text-primary' : 'text-foreground'
                          }`}
                        >
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row) => (
                      <tr key={row.time} className="border-t border-border">
                        <td className="py-3 pr-3 text-xs text-muted-foreground font-medium whitespace-nowrap">
                          {row.time}
                        </td>
                        {[row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun].map((cell, idx) => (
                          <td key={idx} className="text-center py-3 px-1">
                            {cell === '休' || cell === 'Closed' ? (
                              <span className="text-muted-foreground text-xs">―</span>
                            ) : cell === '昭和' || cell === 'Showa' ? (
                              <span className="text-[10px] text-primary font-bold leading-tight">
                                {lang === 'ja' ? <>昭和<br />大</> : 'Showa'}
                              </span>
                            ) : (
                              <span className="text-primary text-sm font-bold">●</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 space-y-2 pt-4 border-t border-border">
                {[
                  { text: tx.note1, highlight: false },
                  { text: tx.note2, highlight: false },
                  { text: tx.note3, highlight: true },
                ].map(({ text, highlight }) => (
                  <div key={text} className={`flex items-start gap-2 text-xs ${highlight ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                    <AlertCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* アクセス */}
          <Reveal direction="right" delay={80}>
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex-1">
                <a
                  href="https://share.google/MN9YvDfrMRJoK3Y2Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-56 bg-muted rounded-t-2xl overflow-hidden relative group"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5123456789!2d139.8!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5pil5pil5Y2X5bqc5aSn5a2m!5e0!3m2!1sja!2sjp!4v0000000000"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={tx.mapLabel}
                    aria-label={tx.mapLabel}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                      {lang === 'ja' ? 'Google Mapsで見る' : 'View on Google Maps'}
                    </span>
                  </div>
                </a>
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-foreground text-sm">{tx.mapTitle}</div>
                      <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{tx.mapAddr}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Train className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h3 className="font-bold text-foreground text-base">{tx.accessTitle}</h3>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xs shrink-0 mt-0.5">●</span>
                    {tx.access1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xs shrink-0 mt-0.5">●</span>
                    {tx.access2}
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
