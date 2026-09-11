'use client'

import Reveal from '@/components/Reveal'
import { useLang } from '@/app/lang-context'

const doctorsJa = [
  {
    role: '院長',
    name: '（医師名）',
    university: '卒業',
    career: [
      '埼玉県立小児医療センター 勤務',
      '日本赤十字社医療センター 勤務',
    ],
    specialties: ['眼科専門医', '小児眼科', '近視抑制外来', '日本眼科学会会員'],
    message: '小児眼科治療経験豊富な女性眼科専門医による診療。5歳、3歳の子供を持つ母親の視点からお子様の眼に関するお悩みに寄り添った診察をいたします。',
    highlight: 'primary' as const,
  },
  {
    role: '医師',
    name: '佐藤 尚人',
    university: '東京大学医学部 卒業',
    career: [
      'JR東京総合病院 レジデント',
      '東京大学医学部付属病院 眼科学教室',
      'さいたま赤十字病院 眼科',
      '公立昭和病院 眼科 医長',
      '米国デューク大学アイセンター留学（網膜硝子体外科）',
    ],
    specialties: ['眼科専門医', '網膜硝子体', '硝子体手術', '白内障手術'],
    message: '東京大学眼科学教室での研鑽を経て、公立昭和病院では医長として網膜・硝子体疾患の診療をリードしてきました。米国デューク大学アイセンターでの留学経験も活かし、最先端の術式と丁寧な患者ケアを両立した診療を目指しています。',
    highlight: 'navy' as const,
  },
]

const doctorsEn = [
  {
    role: 'Director',
    name: '(Name)',
    university: '',
    career: [
      'Saitama Children\'s Medical Center',
      'Japanese Red Cross Medical Center',
    ],
    specialties: ['Board-certified ophthalmologist', 'Pediatric eye care', 'Myopia control', 'Japan Ophthalmological Society'],
    message: 'As a female ophthalmologist with extensive experience in pediatric eye care — and as a mother of children aged 3 and 5 — I understand firsthand the worries parents have about their children\'s eyes. I am here to listen and provide caring, tailored support for every family.',
    highlight: 'primary' as const,
  },
  {
    role: 'Physician',
    name: 'Naoto Sato',
    university: 'University of Tokyo, Faculty of Medicine',
    career: [
      'Resident, JR Tokyo General Hospital',
      'Department of Ophthalmology, University of Tokyo Hospital',
      'Saitama Red Cross Hospital, Ophthalmology',
      'Chief of Ophthalmology, Koritsu Showa Hospital',
      'Fellowship in Vitreoretinal Surgery, Duke Eye Center, USA',
    ],
    specialties: ['Board-certified ophthalmologist', 'Vitreoretinal surgery', 'Cataract surgery', 'Retinal diseases'],
    message: 'After training at the University of Tokyo\'s ophthalmology department and leading the retinal and vitreous unit at Koritsu Showa Hospital, I completed a vitreoretinal fellowship at Duke Eye Center in the United States. I am committed to combining cutting-edge surgical technique with thoughtful, patient-centred care.',
    highlight: 'navy' as const,
  },
]

const hospitalLinksJa = [
  { name: '昭和大学附属豊洲病院', note: '毎週火曜午後 岩渕教授が診療担当' },
  { name: '聖路加国際病院', note: '佐藤医師が手術執刀医として在籍' },
  { name: '昭和医科大学江東豊洲病院', note: '地域の基幹病院として緊密に連携' },
  { name: '順天堂東京江東高齢者医療センター', note: '江東区の高齢者医療を連携支援' },
]

const hospitalLinksEn = [
  { name: 'Showa University Toyosu Hospital', note: 'Prof. Iwabuchi sees patients every Tuesday afternoon' },
  { name: "St. Luke's International Hospital", note: 'Dr. Sato serves as attending surgeon' },
  { name: 'Showa Medical University Koto Toyosu Hospital', note: 'Key regional hospital partner' },
  { name: 'Juntendo Tokyo Koto Geriatric Medical Center', note: 'Supporting elderly care in Koto Ward' },
]

export default function Greeting() {
  const { lang } = useLang()
  const doctors = lang === 'ja' ? doctorsJa : doctorsEn
  const hospitalLinks = lang === 'ja' ? hospitalLinksJa : hospitalLinksEn

  return (
    <section id="doctor" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
              Our Doctors
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
              {lang === 'ja' ? '医師紹介' : 'Meet Our Doctors'}
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              {lang === 'ja'
                ? '大学病院で研鑽を積んだ眼科専門医が、豊洲で丁寧な診療をお届けします。'
                : 'University-trained ophthalmologists bringing specialist care to the Toyosu community.'}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doc, i) => (
            <Reveal key={doc.role} direction={i === 0 ? 'left' : 'right'} delay={i * 100}>
              <article className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-full flex flex-col">
                {/* ヘッダー */}
                <div className={`px-6 py-5 flex items-end justify-between gap-3 ${
                  doc.highlight === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-[oklch(0.34_0.06_155)] text-white'
                }`}>
                  <div>
                    <div className="text-xs opacity-75 font-medium mb-0.5">{doc.role}</div>
                    <div className="font-serif font-bold text-xl leading-tight">{doc.name}</div>
                  </div>
                  <div className="text-xs opacity-70 text-right leading-snug shrink-0">
                    {doc.university}
                  </div>
                </div>

                {/* 本文 */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                      {lang === 'ja' ? '経歴' : 'Career'}
                    </h3>
                    <ul className="space-y-1.5">
                      {doc.career.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted rounded-xl p-4 mb-5 flex-1">
                    <p className="text-sm text-foreground leading-relaxed">
                      &ldquo;{doc.message}&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-secondary text-secondary-foreground px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 連携体制 */}
        <Reveal direction="up" delay={200}>
          <div className="mt-12 bg-secondary/60 rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="font-bold text-foreground text-base mb-5 text-center">
              {lang === 'ja' ? '大学病院・基幹病院との連携体制' : 'Hospital partnerships'}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hospitalLinks.map((h) => (
                <div key={h.name} className="bg-card rounded-xl border border-border p-4 text-center">
                  <div className="font-bold text-sm text-foreground mb-1 leading-snug">{h.name}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{h.note}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
