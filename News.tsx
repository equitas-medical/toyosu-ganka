import { Bell, ChevronRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

// 実際のサイトには「只今、お知らせはありません」とのみ表示
const newsItems: { date: string; title: string }[] = []

export default function News() {
  return (
    <section id="info" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal direction="up">
        <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              <h2 className="font-bold text-foreground text-lg">お知らせ</h2>
            </div>
            <a
              href="#info"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
            >
              一覧を見る
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {newsItems.length === 0 ? (
            <p className="text-muted-foreground text-sm py-6 text-center">只今、お知らせはありません。</p>
          ) : (
            <ul className="divide-y divide-border">
              {newsItems.map((item) => (
                <li key={item.date} className="py-3 flex items-center gap-4">
                  <time className="text-xs text-muted-foreground shrink-0">{item.date}</time>
                  <a href="#info" className="text-sm text-foreground hover:text-primary transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
