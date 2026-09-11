import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LangProvider } from '@/app/lang-context'

const CLINIC_NAME = '眼科とよす医院'
const CLINIC_URL = 'https://toyosugankai.com'
const CLINIC_TEL = '03-XXXX-XXXX'
const CLINIC_ADDRESS = '東京都江東区豊洲'

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC_URL),
  title: {
    default: `${CLINIC_NAME}｜豊洲のかかりつけ眼科・豊洲駅徒歩2分`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description:
    '豊洲の家族のためのかかりつけ眼科。お子さまの近視抑制（オルソケラトロジー・低濃度アトロピン）から大人の白内障・硝子体手術まで、日常的なお悩みから専門診療まで幅広く対応。豊洲駅徒歩2分。女性医師。英語診療対応。',
  keywords: [
    '豊洲 眼科', '豊洲 かかりつけ眼科', '豊洲 小児眼科', '豊洲 近視抑制',
    '豊洲 オルソケラトロジー', '豊洲 白内障手術', '豊洲 硝子体手術',
    '豊洲 女性医師', '豊洲 ファミリー眼科', '江東区 眼科',
    '眼科とよす医院', '豊洲駅 眼科',
  ],
  authors: [{ name: CLINIC_NAME, url: CLINIC_URL }],
  creator: CLINIC_NAME,
  publisher: CLINIC_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  alternates: { canonical: CLINIC_URL },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: CLINIC_URL,
    siteName: CLINIC_NAME,
    title: `${CLINIC_NAME}｜豊洲のかかりつけ眼科`,
    description: '豊洲の家族のためのかかりつけ眼科。お子さまの近視抑制から白内障・硝子体手術まで、患者さんに合わせた幅広い診療に対応。',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CLINIC_NAME}｜豊洲のかかりつけ眼科`,
    description: 'お子さまの目の成長が心配なとき。自分の目がなんとなく気になるとき。豊洲駅からすぐそこにあります。',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
  themeColor: '#3a7d44',
  interactiveWidget: 'resizes-content',
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Ophthalmologist',
  '@id': `${CLINIC_URL}/#clinic`,
  name: CLINIC_NAME,
  url: CLINIC_URL,
  telephone: CLINIC_TEL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: '江東区',
    addressRegion: '東京都',
    addressCountry: 'JP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.6543,
    longitude: 139.7954,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:30',
    },
  ],
  medicalSpecialty: ['Ophthalmology'],
  availableService: [
    { '@type': 'MedicalTherapy', name: '小児近視抑制外来' },
    { '@type': 'MedicalTherapy', name: 'オルソケラトロジー' },
    { '@type': 'MedicalTherapy', name: '白内障手術' },
    { '@type': 'MedicalTherapy', name: '硝子体手術' },
    { '@type': 'MedicalTherapy', name: '網膜疾患治療' },
  ],
  hasMap: 'https://maps.google.com/?q=眼科とよす医院',
  priceRange: '保険診療',
  currenciesAccepted: 'JPY',
  description: '大学病院レベルの専門医療を豊洲で。順天堂大学・東京大学出身の眼科専門医による小児近視抑制・白内障手術・硝子体手術。聖路加国際病院連携。',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
