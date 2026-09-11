import type { Metadata } from 'next'
import Link from 'next/link'
import { diseases } from '@/lib/diseases'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: '疾患別ガイド',
  description:
    '白内障・緑内障・ドライアイ・弱視・飛蚊症など、豊洲眼科きりん医院が扱う主な目の疾患を症状・原因・治療法ごとに詳しく解説しています。',
  keywords: ['眼科', '目の病気', '白内障', '緑内障', 'ドライアイ', '弱視', '豊洲 眼科', '豊洲眼科きりん医院'],
  alternates: { canonical: 'https://toyosueye.com/diseases' },
  openGraph: {
    title: '疾患別ガイド | 豊洲眼科きりん医院',
    description: '白内障・緑内障・ドライアイなど、よくある目の疾患を詳しく解説します。',
    url: 'https://toyosueye.com/diseases',
    type: 'website',
    locale: 'ja_JP',
    siteName: '豊洲眼科きりん医院',
  },
  robots: { index: true, follow: true },
}

const categoryColors: Record<string, string> = {
  '手術': 'bg-primary/10 text-primary',
  '要定期検査': 'bg-amber-100 text-amber-700',
  '生活習慣': 'bg-emerald-100 text-emerald-700',
  'アレルギー': 'bg-purple-100 text-purple-700',
  '小児眼科': 'bg-pink-100 text-pink-700',
  '要精密検査': 'bg-red-100 text-red-700',
  '屈折異常': 'bg-blue-100 text-blue-700',
  '感染症・炎症': 'bg-orange-100 text-orange-700',
}

export default function DiseasesPage() {
  return (
    <>
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: '豊洲眼科きりん医院', item: 'https://toyosueye.com/' },
              { '@type': 'ListItem', position: 2, name: '疾患別ガイド', item: 'https://toyosueye.com/diseases' },
            ],
          }),
        }}
      />

      {/* ヘッダー */}
      <div className="bg-secondary/50 border-b border-border py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'ホーム', href: '/' }, { label: '疾患別ガイド' }]} />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-2">
            疾患別ガイド
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            白内障・緑内障・ドライアイなど、眼科とよす医院で対応している主な目の疾患について、症状・原因・治療法をわかりやすく解説しています。
          </p>
        </div>
      </div>

      {/* 疾患カード一覧 */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diseases.map((disease) => (
            <Link
              key={disease.slug}
              href={`/diseases/${disease.slug}`}
              className="group bg-card rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[disease.category] ?? 'bg-muted text-muted-foreground'}`}
                >
                  {disease.category}
                </span>
              </div>
              <h2 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {disease.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{disease.shortDesc}</p>
              <div className="mt-5 text-primary text-sm font-medium flex items-center gap-1">
                詳しく見る <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
