import Link from 'next/link'

type Crumb = { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="パンくずリスト" className="text-xs text-muted-foreground flex items-center gap-1.5 flex-wrap">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-primary transition-colors underline underline-offset-2">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
