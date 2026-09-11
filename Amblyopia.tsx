'use client'

import { ChevronRight, CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { useLang } from '@/app/lang-context'

const t = {
  ja: {
    badge1: 'Pediatric Myopia Control',
    h2a: '小児近視抑制外来',
    subA: '埼玉県立小児医療センター・日本赤十字社医療センター・順天堂大学附属病院での小児眼科経験を持つ女性医師が、保護者目線で丁寧に寄り添います。',
    checkTitle: 'こんなサインはありませんか？',
    checks: [
      '黒板が見えにくそうにしている',
      'スマートフォン・タブレットを近づけて見る',
      '学校の視力検査でB以下になった',
      '両親（片方でも）が近視・強度近視',
      'テレビや本に極端に近づく',
      '目を細めて遠くを見ようとする',
    ],
    checkNote: '近視は一度進むと元には戻りません。早期発見・早期治療が大切です。',
    doctorBadge: '担当医師',
    doctorTitle: '3歳・5歳の子どもを育てる40代女性医師',
    doctorMsg: '「保護者の方の不安に寄り添い、お子さまのペースで丁寧に診察します。近視の進み具合や生活習慣のことも、なんでもご相談ください。」',
    txTitle: 'エビデンスに基づく近視進行抑制治療',
    cta: 'まずはご相談ください',
    treatments: [
      {
        name: 'オルソケラトロジー',
        desc: '就寝中に特殊なコンタクトレンズを装用し、角膜の形状を矯正。日中は裸眼で過ごせます。近視の進行を抑制するエビデンスが豊富。',
        badge: '保険外診療',
      },
      {
        name: '低濃度アトロピン点眼',
        desc: '毎晩1滴の点眼薬で近視の進行を抑制。副作用が少なく、子どもへの負担が小さい治療法として世界的に普及しています。',
        badge: '保険外診療',
      },
      {
        name: '眼鏡・一般的な近視矯正',
        desc: '単焦点・累進レンズ処方に加え、近視進行を抑制する特殊設計レンズもご提案。定期的な視力チェックで進行を管理します。',
        badge: '保険診療',
      },
    ],
    badge2: 'General Pediatric Eye Care',
    h2b: '弱視・斜視・一般眼科',
    subB: '視力は6〜8歳ごろに完成します。気になるサインがあれば、早めにご相談ください。',
    general: [
      {
        title: '弱視の早期発見・治療',
        desc: '3歳児健診での指摘や「目がずれている」などのサインを見逃しません。アイパッチや適切な眼鏡処方で弱視眼を鍛えます。',
      },
      {
        title: '斜視の検査・管理',
        desc: '内斜視・外斜視・上下斜視など、年齢・斜視の種類に応じた治療方針をご提案。必要に応じて連携病院への紹介も行います。',
      },
      {
        title: 'ドライアイ・アレルギー',
        desc: 'スマートフォン・ゲームによる眼精疲労、花粉症・ハウスダストによるアレルギー性結膜炎を丁寧に管理します。',
      },
    ],
  },
  en: {
    badge1: 'Pediatric Myopia Control',
    h2a: 'Myopia Control Clinic',
    subA: 'Our female director brings pediatric eye care experience from Saitama Children\'s Medical Center, Japanese Red Cross Medical Center, and Juntendo University Hospital — offering compassionate, parent-friendly consultations.',
    checkTitle: 'Does your child show any of these signs?',
    checks: [
      'Squinting to see the blackboard',
      'Holding devices very close to the face',
      'Failed school vision screening (B or below)',
      'One or both parents have myopia',
      'Sitting extremely close to the TV or books',
      'Rubbing eyes or tilting head to see clearly',
    ],
    checkNote: 'Myopia cannot be reversed once it progresses. Early detection and treatment are key.',
    doctorBadge: 'Your doctor',
    doctorTitle: 'A female ophthalmologist in her 40s, mother of two',
    doctorMsg: '"I understand the worry parents feel. I take time to examine each child gently at their own pace, and I welcome any questions about vision habits or progression."',
    txTitle: 'Evidence-based myopia control treatments',
    cta: 'Contact us for a consultation',
    treatments: [
      {
        name: 'Orthokeratology',
        desc: 'Specially designed contact lenses worn overnight to reshape the cornea. Patients enjoy clear, glasses-free vision during the day, with strong evidence for slowing myopia progression.',
        badge: 'Self-pay',
      },
      {
        name: 'Low-dose atropine eye drops',
        desc: 'One drop each evening to slow myopia progression. Minimal side effects and widely used worldwide as a child-friendly treatment.',
        badge: 'Self-pay',
      },
      {
        name: 'Glasses & standard correction',
        desc: 'Single-vision and progressive lens prescriptions, including specially designed lenses to help control progression. Regular check-ups to track changes over time.',
        badge: 'Insurance covered',
      },
    ],
    badge2: 'General Pediatric Eye Care',
    h2b: 'Amblyopia, Strabismus & General Pediatric Care',
    subB: 'Vision develops until around age 6–8. If you notice any warning signs, please come in early.',
    general: [
      {
        title: 'Early detection & treatment of amblyopia',
        desc: 'We don\'t miss subtle signs such as those flagged at the 3-year health check or a visible eye turn. Patching and proper glasses prescriptions help strengthen the weaker eye.',
      },
      {
        title: 'Strabismus assessment & management',
        desc: 'Esotropia, exotropia, vertical deviations — we tailor treatment to your child\'s age and type of strabismus, and refer to partner hospitals when surgery is needed.',
      },
      {
        title: 'Dry eye & allergic conjunctivitis',
        desc: 'We manage eye strain from screens and games, as well as seasonal and year-round allergic conjunctivitis from pollen and dust mites.',
      },
    ],
  },
}

export default function Amblyopia() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="myopia" className="py-16 md:py-24 bg-background">
      <h2 className="sr-only">小児近視抑制外来</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ===== 近視抑制外来 ===== */}
        <div className="mb-20">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
                {tx.badge1}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-3">
                {tx.h2a}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                {tx.subA}
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* チェックリスト + 医師カード */}
            <Reveal direction="left">
              <div className="space-y-5">
                <div className="bg-muted rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-foreground text-sm mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    {tx.checkTitle}
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {tx.checks.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    {tx.checkNote}
                  </p>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <span className="inline-block text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full mb-3 tracking-wide">
                    {tx.doctorBadge}
                  </span>
                  <p className="font-bold text-base mb-2 leading-snug">
                    {tx.doctorTitle}
                  </p>
                  <p className="text-sm leading-relaxed opacity-90">
                    {tx.doctorMsg}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 治療法 */}
            <Reveal direction="right" delay={100}>
              <div>
                <h3 className="font-bold text-foreground text-base mb-4">
                  {tx.txTitle}
                </h3>
                <div className="space-y-4">
                  {tx.treatments.map((tr) => (
                    <div key={tr.name} className="bg-card rounded-xl border border-border p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-bold text-foreground text-sm">{tr.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                          tr.badge === '保険外診療' || tr.badge === 'Self-pay'
                            ? 'bg-accent/20 text-accent-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {tr.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{tr.desc}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#access"
                  className="inline-flex items-center gap-1.5 text-primary text-sm font-bold mt-5 hover:underline"
                >
                  {tx.cta}
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-border mb-20" />

        {/* ===== 一般小児眼科 ===== */}
        <div>
          <Reveal direction="up">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
                {tx.badge2}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-3">
                {tx.h2b}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                {tx.subB}
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {tx.general.map((item, i) => {
              const dirs = ['left', 'up', 'right'] as const
              return (
                <Reveal key={item.title} direction={dirs[i]} delay={i * 80}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                    <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
