'use client'

import Reveal from '@/components/Reveal'
import { useLang } from '@/app/lang-context'

const medicalJa = [
  { title: '白内障手術', desc: '聖路加国際病院の最新設備での手術も可能。網膜硝子体手術の術式経験を持つ佐藤医師が対応。', highlight: true },
  { title: '硝子体手術', desc: '網膜剥離・黄斑疾患・硝子体出血など。豊富な手術経験を持つ専門医が対応します。', highlight: true },
  { title: '小児近視抑制', desc: 'オルソケラトロジー・低濃度アトロピン点眼によるエビデンスベースの近視進行抑制治療。', highlight: true },
  { title: '硝子体注射', desc: '抗VEGF薬による黄斑疾患・糖尿病黄斑浮腫の治療を行います。', highlight: true },
  { title: '緑内障', desc: '点眼治療から手術まで、病期に応じた緑内障治療を行います。' },
  { title: '網膜疾患', desc: '加齢黄斑変性・糖尿病網膜症・網膜静脈閉塞症などに対応します。' },
  { title: '弱視・斜視', desc: '小児の弱視・斜視の検査と治療。早期発見・早期介入を重視。' },
  { title: 'ドライアイ', desc: '涙液の量・質の検査から、点眼治療・生活指導まで丁寧に対応。' },
  { title: 'アレルギー性結膜炎', desc: '花粉症・ハウスダストによる眼のアレルギーを管理・治療します。' },
  { title: '一般眼科', desc: '結膜炎・霰粒腫・麦粒腫など、日常の目の症状にも幅広く対応。' },
]

const medicalEn = [
  { title: 'Cataract surgery', desc: 'Surgery available at St. Luke\'s International Hospital, performed by Dr. Sato.', highlight: true },
  { title: 'Vitreoretinal surgery', desc: 'Retinal detachment, macular disease, vitreous hemorrhage, and more — handled by our experienced specialist.', highlight: true },
  { title: 'Pediatric myopia control', desc: 'Evidence-based orthokeratology and low-dose atropine to slow myopia progression in children.', highlight: true },
  { title: 'Intravitreal injections', desc: 'Anti-VEGF therapy for macular disease and diabetic macular edema.', highlight: true },
  { title: 'Glaucoma', desc: 'From eye drops to surgery — treatment tailored to the stage of your condition.' },
  { title: 'Retinal diseases', desc: 'Age-related macular degeneration, diabetic retinopathy, retinal vein occlusion, and more.' },
  { title: 'Amblyopia & strabismus', desc: 'Testing and treatment for children. Early detection and early intervention are our priorities.' },
  { title: 'Dry eye', desc: 'Tear quantity and quality testing, eye drops, and lifestyle guidance.' },
  { title: 'Allergic conjunctivitis', desc: 'Management of ocular allergies from pollen, dust mites, and other triggers.' },
  { title: 'General ophthalmology', desc: 'Conjunctivitis, chalazion, stye, and everyday eye conditions.' },
]

export default function Medical() {
  const { lang } = useLang()
  const medicalItems = lang === 'ja' ? medicalJa : medicalEn

  return (
    <section id="medical" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
              Medical Services
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-3">
              {lang === 'ja' ? '診療内容' : 'Our Services'}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              {lang === 'ja'
                ? '一般眼科から高度専門手術まで幅広く対応。手術が必要な場合は聖路加国際病院での執刀も可能です。'
                : 'From routine eye care to complex surgery. When surgery is needed, our Deputy Director can operate at St. Luke\'s International Hospital.'}
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {medicalItems.map((item, i) => (
            <Reveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 50}>
              <div
                className={`rounded-xl p-5 border transition-all duration-300 h-full ${
                  item.highlight
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-card border-border shadow-sm hover:shadow-md hover:border-primary/30'
                }`}
              >
                <h3 className={`font-bold text-sm mb-1.5 ${item.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {item.title}
                  {item.highlight && (
                    <span className="ml-2 text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold align-middle">
                      {lang === 'ja' ? '重点診療' : 'Focus'}
                    </span>
                  )}
                </h3>
                <p className={`text-xs leading-relaxed ${item.highlight ? 'text-primary-foreground/85' : 'text-muted-foreground'}`}>
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {lang === 'ja'
              ? '※手術希望の患者さまは、聖路加国際病院の最新設備での診療・執刀が可能です（佐藤医師が執刀）。'
              : '* Patients requiring surgery may be treated at St. Luke\'s International Hospital, where Dr. Sato serves as a surgeon.'}
          </p>
          <a
            href="#access"
            className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
          >
            {lang === 'ja' ? '診療についてお問い合わせ' : 'Enquire about our services'} &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
