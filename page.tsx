import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { columns, getColumnBySlug } from '@/lib/columns'
import { getDiseaseBySlug } from '@/lib/diseases'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBanner from '@/components/CtaBanner'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return columns.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const col = getColumnBySlug(slug)
  if (!col) return {}
  return {
    title: col.title,
    description: col.excerpt,
    keywords: [...col.keywords, '豊洲眼科きりん医院', '豊洲 眼科'],
    alternates: { canonical: `https://toyosueye.com/column/${slug}` },
    openGraph: {
      title: `${col.title} | 豊洲眼科きりん医院`,
      description: col.excerpt,
      url: `https://toyosueye.com/column/${slug}`,
      type: 'article',
      publishedTime: col.publishedAt,
      locale: 'ja_JP',
      siteName: '豊洲眼科きりん医院',
    },
    robots: { index: true, follow: true },
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params
  const col = getColumnBySlug(slug)
  if (!col) notFound()

  const relatedDiseases = col.relatedDiseaseSlugs
    .map((s) => getDiseaseBySlug(s))
    .filter(Boolean)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: col.title,
        description: col.excerpt,
        datePublished: col.publishedAt,
        author: {
          '@type': 'Organization',
          name: '豊洲眼科きりん医院',
          url: 'https://toyosueye.com',
        },
        publisher: {
          '@type': 'Organization',
          name: '豊洲眼科きりん医院',
          url: 'https://toyosueye.com',
        },
        mainEntityOfPage: `https://toyosueye.com/column/${slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '豊洲眼科きりん医院', item: 'https://toyosueye.com/' },
          { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://toyosueye.com/column' },
          { '@type': 'ListItem', position: 3, name: col.title, item: `https://toyosueye.com/column/${slug}` },
        ],
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
              { label: 'コラム', href: '/column' },
              { label: col.title },
            ]}
          />
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {col.category}
            </span>
            <span className="text-xs text-muted-foreground">{col.readingTime}分で読める</span>
            <time className="text-xs text-muted-foreground" dateTime={col.publishedAt}>
              {formatDate(col.publishedAt)}
            </time>
          </div>
          <h1 className="font-serif text-xl md:text-2xl font-bold text-foreground mt-4 leading-snug">
            {col.title}
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mt-3">{col.excerpt}</p>
        </div>
      </div>

      {/* 本文 */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        {col.content.map((section, i) => (
          <section key={i}>
            <h2 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
              {section.heading}
            </h2>
            <p className="text-sm text-foreground leading-[1.9]">{section.body}</p>
          </section>
        ))}

        {/* 免責事項 */}
        <div className="bg-muted rounded-2xl p-5 text-xs text-muted-foreground leading-relaxed">
          本コラムは一般的な情報提供を目的としており、医療上のアドバイスではありません。症状がある場合は必ず医師の診察を受けてください。
        </div>

        {/* 関連疾患リンク */}
        {relatedDiseases.length > 0 && (
          <section>
            <h2 className="font-serif text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">
              関連する疾患ガイド
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedDiseases.map((d) => d && (
                <Link
                  key={d.slug}
                  href={`/diseases/${d.slug}`}
                  className="group bg-card rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                    {d.title}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{d.shortDesc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="pt-2">
          <Link href="/column" className="text-sm text-primary hover:underline">
            &larr; コラム一覧に戻る
          </Link>
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
