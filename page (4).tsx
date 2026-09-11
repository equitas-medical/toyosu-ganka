import type { Metadata } from 'next'
import Image from 'next/image'
import { staffMembers } from '@/lib/staff'
import Breadcrumb from '@/components/Breadcrumb'
import CtaBanner from '@/components/CtaBanner'

export const metadata: Metadata = {
  title: 'スタッフ紹介',
  description:
    '豊洲眼科きりん医院の院長・医師紹介ページです。専門分野・経歴・メッセージをご覧いただけます。豊洲駅（ゆりかもめ2A出口）徒歩1分の眼科クリニック。',
  keywords: ['眼科 医師紹介', '院長 眼科', '豊洲 眼科 医師', 'スタッフ紹介', '豊洲眼科きりん医院'],
  alternates: { canonical: 'https://toyosueye.com/staff' },
  openGraph: {
    title: 'スタッフ紹介 | 豊洲眼科きりん医院',
    description: '豊洲眼科きりん医院の院長・医師紹介。専門分野・経歴・メッセージをご覧いただけます。',
    url: 'https://toyosueye.com/staff',
    type: 'website',
    locale: 'ja_JP',
    siteName: '豊洲眼科きりん医院',
  },
  robots: { index: true, follow: true },
}

export default function StaffPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...staffMembers.map((s) => ({
        '@type': 'Person',
        name: s.name,
        jobTitle: s.role,
        worksFor: {
          '@type': 'MedicalClinic',
          name: '豊洲眼科きりん医院',
          url: 'https://toyosueye.com',
        },
        knowsAbout: s.specialties,
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '豊洲眼科きりん医院', item: 'https://toyosueye.com/' },
          { '@type': 'ListItem', position: 2, name: 'スタッフ紹介', item: 'https://toyosueye.com/staff' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ページヘッダー */}
      <div className="bg-secondary/50 border-b border-border py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb crumbs={[{ label: 'ホーム', href: '/' }, { label: 'スタッフ紹介' }]} />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-4 mb-2">
            スタッフ紹介
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            眼科とよす医院の医師・スタッフをご紹介します。
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-14 space-y-14">
        {staffMembers.map((member) => (
          <article
            key={member.id}
            className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden"
          >
            {/* 上段：写真＋基本情報 */}
            <div className="flex flex-col md:flex-row">
              {/* 写真 */}
              <div className="md:w-64 shrink-0 bg-secondary/30 flex items-center justify-center p-8">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={member.photo}
                    alt={`${member.name} 写真`}
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
              </div>

              {/* 基本情報 */}
              <div className="flex-1 p-8">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                  {member.title && (
                    <span className="text-xs text-muted-foreground">{member.title}</span>
                  )}
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-0.5">
                  {member.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-5">{member.nameKana}</p>

                {/* 専門分野 */}
                <div className="mb-5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">専門分野</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span key={s} className="text-xs bg-secondary border border-border text-foreground px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 一言メッセージ */}
                <blockquote className="border-l-2 border-primary pl-4 text-sm text-foreground leading-relaxed italic">
                  {member.message}
                </blockquote>
              </div>
            </div>

            {/* 下段：経歴・資格 */}
            <div className="border-t border-border grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* 経歴 */}
              <div className="p-8">
                <h3 className="font-bold text-sm text-foreground mb-5">経歴</h3>
                <ol className="space-y-3">
                  {member.career.map((c, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="text-xs text-muted-foreground shrink-0 pt-0.5 w-20">{c.year}</span>
                      <span className="text-sm text-foreground leading-snug">{c.event}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 資格・所属 */}
              <div className="p-8">
                {member.qualifications.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-bold text-sm text-foreground mb-3">資格・認定</h3>
                    <ul className="space-y-1.5">
                      {member.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {member.affiliations.length > 0 && (
                  <div>
                    <h3 className="font-bold text-sm text-foreground mb-3">所属学会</h3>
                    <ul className="space-y-1.5">
                      {member.affiliations.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <CtaBanner />
    </>
  )
}
