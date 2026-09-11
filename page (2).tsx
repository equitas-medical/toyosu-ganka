import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { diseases, getDiseaseBySlug, getRelatedDiseases } from '@/lib/diseases'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBanner from '@/components/CtaBanner'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const disease = getDiseaseBySlug(slug)
  if (!disease) return {}
  return {
    title: `${disease.title}の症状・原因・治療｜豊洲（江東区）の眼科`,
    description: `${disease.shortDesc} 豊洲眼科きりん医院（豊洲駅徒歩1分）では${disease.title}の診療を行っています。`,
    keywords: [...disease.keywords, '豊洲眼科きりん医院', '豊洲 眼科'],
    alternates: { canonical: `https://toyosueye.com/diseases/${slug}` },
    openGraph: {
      title: `${disease.title}の症状・原因・治療 | 豊洲眼科きりん医院`,
      description: disease.shortDesc,
      url: `https://toyosueye.com/diseases/${slug}`,
      type: 'article',
      locale: 'ja_JP',
      siteName: '豊洲眼科きりん医院',
    },
    robots: { index: true, follow: true },
  }
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params
  const disease = getDiseaseBySlug(slug)
  if (!disease) notFound()

  const related = getRelatedDiseases(disease.relatedSlugs)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalCondition',
        name: disease.title,
        description: disease.shortDesc,
        signOrSymptom: disease.symptoms.map((s) => ({ '@type': 'MedicalSymptom', name: s })),
        possibleTreatment: disease.treatments.map((t) => ({ '@type': 'MedicalTherapy', name: t })),
        relevantSpecialty: 'Ophthalmology',
      },
      {
        '@type': 'FAQPage',
        mainEntity: disease.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '豊洲眼科きりん医院', item: 'https://toyosueye.com/' },
          { '@type': 'ListItem', position: 2, name: '疾患別ガイド', item: 'https://toyosueye.com/diseases' },
          { '@type': 'ListItem', position: 3, name: disease.title, item: `https://toyosueye.com/diseases/${slug}` },
        ],
      },
      {
        '@type': 'MedicalWebPage',
        about: { '@type': 'MedicalCondition', name: disease.title },
        author: { '@type': 'Organization', name: '豊洲眼科きりん医院', url: 'https://toyosueye.com' },
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ページヘッダー */}
      <div className="bg-secondary/50 border-b border-border py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            crumbs={[
              { label: 'ホーム', href: '/' },
              { label: '疾患別ガイド', href: '/diseases' },
              { label: disease.title },
            ]}
          />
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {disease.category}
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">
            {disease.title}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">{disease.shortDesc}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">

        {/* 症状 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
            主な症状
          </h2>
          <ul className="space-y-2">
            {disease.symptoms.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* 原因 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
            主な原因
          </h2>
          <ul className="space-y-2">
            {disease.causes.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 治療法 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
            治療法
          </h2>
          <ol className="space-y-3">
            {disease.treatments.map((t, i) => (
              <li key={t} className="flex items-start gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed pt-1">{t}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* よくある質問 */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
            よくある質問
          </h2>
          <div className="space-y-4">
            {disease.faq.map((item) => (
              <div key={item.q} className="bg-secondary/50 rounded-2xl p-5">
                <p className="font-bold text-sm text-foreground mb-2">Q. {item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連疾患 */}
        {related.length > 0 && (
          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-5 pb-3 border-b border-border">
              関連する疾患
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/diseases/${r.slug}`}
                  className="group bg-card rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                    {r.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{r.shortDesc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 一覧に戻る */}
        <div className="pt-4">
          <Link href="/diseases" className="text-sm text-primary hover:underline">
            &larr; 疾患別ガイドに戻る
          </Link>
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
