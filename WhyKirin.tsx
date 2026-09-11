'use client'

import Reveal from '@/components/Reveal'
import { useLang } from '@/app/lang-context'

const t = {
  ja: {
    sectionBadge: 'Surgery',
    h2: '手術・専門診療',
    sub: '東京大学卒・米国留学経験を持つ佐藤医師が、聖路加国際病院の最新設備を活用した高度な眼科手術に対応します。',
    cataractBadge: '白内障手術',
    cataractH3: '豊富な網膜硝子体手術経験を持つ白内障・眼科専門家',
    cataractDesc: '大手眼科クリニックチェーンで多数の白内障手術を担当してきた佐藤医師が対応。単焦点・多焦点眼内レンズの選択から術後管理まで、丁寧にサポートします。',
    cataractPoints: [
      '聖路加国際病院の最新設備を使用した手術も可能',
      '単焦点・多焦点眼内レンズに対応',
      '術前検査から術後フォローアップまで一貫対応',
    ],
    vitreoBadge: '硝子体手術・網膜疾患',
    vitreoH3: '米国デューク大学仕込みの硝子体手術で難症例にも対応',
    vitreoDesc: '網膜剥離・黄斑上膜・黄斑円孔・硝子体出血・増殖糖尿病網膜症など、網膜・硝子体疾患の手術経験が豊富な副院長が対応します。',
    vitreoPoints: [
      '網膜剥離・黄斑疾患の緊急対応',
      '糖尿病網膜症・加齢黄斑変性の治療',
      '必要に応じて聖路加国際病院での手術も',
    ],
    partnerLabel: '手術連携先',
    partnerName: '聖路加国際病院',
    partnerDesc: '佐藤医師が現在も執刀医として在籍。当院受診後、希望に応じて聖路加国際病院での手術をご案内します。',
    partnerCta: '手術についてご相談',
  },
  en: {
    sectionBadge: 'Surgery',
    h2: 'Surgery & Specialist Care',
    sub: 'Dr. Sato — a graduate of the University of Tokyo with a vitreoretinal fellowship at Duke Eye Center, USA — performs advanced ophthalmic surgery at St. Luke\'s International Hospital.',
    cataractBadge: 'Cataract surgery',
    cataractH3: 'Experienced cataract & eye surgeon',
    cataractDesc: 'Dr. Sato has performed a large volume of cataract surgeries at major ophthalmology groups. From lens selection to post-op care, we support you every step of the way.',
    cataractPoints: [
      'Surgery available at St. Luke\'s International Hospital',
      'Both monofocal and multifocal IOLs available',
      'Pre-operative assessment through post-operative follow-up',
    ],
    vitreoBadge: 'Vitreoretinal surgery',
    vitreoH3: 'Duke-trained vitreoretinal expertise for complex cases',
    vitreoDesc: 'Retinal detachment, epiretinal membrane, macular hole, vitreous hemorrhage, proliferative diabetic retinopathy — our Deputy Director handles even the most challenging retinal and vitreous conditions.',
    vitreoPoints: [
      'Urgent management of retinal detachment & macular disease',
      'Treatment for diabetic retinopathy & age-related macular degeneration',
      'Surgery at St. Luke\'s International Hospital when needed',
    ],
    partnerLabel: 'Surgical partner',
    partnerName: "St. Luke's International Hospital",
    partnerDesc: 'Dr. Sato continues to operate as a surgeon at St. Luke\'s. After your consultation with us, we can arrange surgery there if needed.',
    partnerCta: 'Ask about surgery',
  },
}

export default function WhyKirin() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="surgery" className="py-16 md:py-24 bg-[oklch(0.26_0.05_155)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase border border-white/20">
              {tx.sectionBadge}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white text-balance mb-3">
              {tx.h2}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
              {tx.sub}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 白内障 */}
          <Reveal direction="left">
            <div className="bg-white/5 rounded-2xl border border-white/10 p-7 h-full">
              <span className="inline-block text-[11px] font-bold bg-primary/30 text-[oklch(0.86_0.15_128)] px-3 py-1 rounded-full mb-4 tracking-wide">
                {tx.cataractBadge}
              </span>
              <h3 className="font-bold text-white text-lg mb-3 leading-snug">
                {tx.cataractH3}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {tx.cataractDesc}
              </p>
              <div className="space-y-2">
                {tx.cataractPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.14_138)] shrink-0 mt-1.5" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 硝子体 */}
          <Reveal direction="right" delay={80}>
            <div className="bg-white/5 rounded-2xl border border-white/10 p-7 h-full">
              <span className="inline-block text-[11px] font-bold bg-primary/30 text-[oklch(0.86_0.15_128)] px-3 py-1 rounded-full mb-4 tracking-wide">
                {tx.vitreoBadge}
              </span>
              <h3 className="font-bold text-white text-lg mb-3 leading-snug">
                {tx.vitreoH3}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                {tx.vitreoDesc}
              </p>
              <div className="space-y-2">
                {tx.vitreoPoints.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.14_138)] shrink-0 mt-1.5" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 連携バナー */}
        <Reveal direction="up" delay={160}>
          <div className="mt-8 bg-white/5 border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-white/50 mb-1 uppercase tracking-widest font-bold">{tx.partnerLabel}</p>
              <p className="font-bold text-white text-lg">{tx.partnerName}</p>
              <p className="text-white/65 text-sm mt-1">{tx.partnerDesc}</p>
            </div>
            <a
              href="#access"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              {tx.partnerCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
