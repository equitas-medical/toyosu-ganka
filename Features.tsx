'use client'

import Reveal from '@/components/Reveal'
import { GraduationCap, Building2, Clock, Globe } from 'lucide-react'
import { useLang } from '@/app/lang-context'

const featuresJa = [
  {
    icon: GraduationCap,
    label: '女性医師',
    title: '小児眼科経験豊富な女性眼科専門医',
    description:
      '院長は小児眼科・近視抑制の豊富な経験を持つ女性眼科専門医。5歳・3歳の子どもを持つ母親の視点から、保護者の方の不安に寄り添った診察を行います。',
  },
  {
    icon: Building2,
    label: '病院連携',
    title: '昭和大学・聖路加と密接に連携',
    description:
      '昭和大学附属豊洲病院・聖路加国際病院・昭和医科大学江東豊洲病院などと連携。毎週火曜午後は昭和大学 岩渕教授が診療を担当し、高度医療への迅速な紹介体制を構築。',
  },
  {
    icon: Clock,
    label: '受診しやすい',
    title: '平日昼休み・仕事帰りに通いやすい立地',
    description:
      '豊洲駅徒歩2分。平日午前は12:30まで、午後は13:45〜18:00まで診療。お昼休みの受診にも対応しています。',
  },
  {
    icon: Globe,
    label: '幅広い対応',
    title: '日常のお悩みから専門診療まで',
    description:
      '結膜炎などの一般眼科から、小児近視抑制・白内障・硝子体手術まで幅広く対応。患者さまのニーズに合わせた診療プランをご提案します。',
  },
]

const featuresEn = [
  {
    icon: GraduationCap,
    label: 'Female specialist',
    title: 'Experienced female ophthalmologist',
    description:
      'Our Director is a board-certified female ophthalmologist with extensive experience in pediatric eye care. As a mother of two young children, she brings a unique empathy to every consultation.',
  },
  {
    icon: Building2,
    label: 'Hospital network',
    title: 'Close ties with Showa University & St. Luke\'s',
    description:
      'We partner with Showa University Toyosu Hospital, St. Luke\'s International Hospital, and Showa Medical University Koto Toyosu Hospital. Prof. Iwabuchi (Showa University) sees patients every Tuesday afternoon.',
  },
  {
    icon: Clock,
    label: 'Convenient hours',
    title: 'Easy to visit on your lunch break or after work',
    description:
      'Just a 2-minute walk from Toyosu Station. Morning appointments until 12:30, afternoon from 13:45 to 18:00 — easy to fit around your schedule.',
  },
  {
    icon: Globe,
    label: 'Wide range',
    title: 'From everyday care to specialist treatment',
    description:
      'We handle everything from routine eye concerns to pediatric myopia control, cataract and vitreous surgery. Care tailored to every patient\'s individual needs.',
  },
]

export default function Features() {
  const { lang } = useLang()
  const features = lang === 'ja' ? featuresJa : featuresEn

  return (
    <section id="clinic" className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h2 className="sr-only">眼科とよす医院の特徴</h2>
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
              Features
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance">
              {lang === 'ja' ? '眼科とよす医院が選ばれる理由' : 'Why Choose Toyosu Eye Clinic'}
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              {lang === 'ja'
                ? '大学病院出身の専門医と充実した病院連携で、地域の皆さまの目を守ります。'
                : 'University-trained specialists and a strong hospital network — protecting the eyes of our community.'}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const dirs = ['left', 'up', 'up', 'right'] as const
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} direction={dirs[i]} delay={i * 80}>
                <article className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                    <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-1">{feature.label}</span>
                  <h3 className="font-bold text-foreground text-sm mb-2 leading-snug">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed flex-1">{feature.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
