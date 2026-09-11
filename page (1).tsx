import type { Metadata } from 'next'
import Link from 'next/link'
import { columns } from '@/lib/columns'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: '目の健康コラム',
  description:
    'ドライアイ・近視・緑内障・子どもの目の健康など、眼科医が書く目の健康に関するコラムを掲載しています。豊洲眼科きりん医院（豊洲駅徒歩1分）。',
  keywords: ['目の健康', '眼科コラム', 'ドライアイ 対策', '近視 予防', '豊洲 眼科', '豊洲眼科きりん医院'],
  alternates: { canonical: 'https://toyosueye.com/column' },
  openGraph: {
    title: '目の健康コラム | 豊洲眼科きりん医院',
    description: '眼科医が書く目の健康に関するコラム。ドライアイ・近視・子どもの目など。',
    url: 'https://toyosueye.com/column',
    type: 'website',
    locale: 'ja_JP',
    siteName: '豊洲眼科きりん医院',
  },
  robots: { index: true, follow: true },
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

const categoryColors: Record<string, string> = {
  '生活習慣': 'bg-emerald-100 text-emerald-700',
  '小児眼科': 'bg-pink-100 text-pink-700',
  '疾患解説': 'bg-primary/10 text-primary',
  '手術・治療': 'bg-amber-100 text-amber-700',
}

export default function ColumnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: '豊洲眼科きりん医院', item: 'https://toyosueye.com/' },
              { '@type': 'ListItem', position: 2, name: 'コラム', item: 'https://toyosueye.com/column' },
            ],
          }),
        }}
      />

      <div className="bg-secondary/50 border-b border-border py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'ホーム', href: '/' }, { label: 'コラム' }]} />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-2">
            目の健康コラム
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            日常生活で役立つ目の健康情報や、疾患についてのやさしい解説を掲載しています。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((col) => (
            <Link
              key={col.slug}
              href={`/column/${col.slug}`}
              className="group bg-card rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[col.category] ?? 'bg-muted text-muted-foreground'}`}
                  >
                    {col.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{col.readingTime}分で読める</span>
                </div>
                <h2 className="font-serif font-bold text-base text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-3">
                  {col.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                  {col.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-muted-foreground" dateTime={col.publishedAt}>
                    {formatDate(col.publishedAt)}
                  </time>
                  <span className="text-primary text-sm font-medium">
                    読む &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
