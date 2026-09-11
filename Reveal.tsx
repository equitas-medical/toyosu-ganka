'use client'

import { useInView } from '@/hooks/use-in-view'

type Direction = 'left' | 'right' | 'up'

interface RevealProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

const initial: Record<Direction, string> = {
  left:  'opacity-0 -translate-x-12',
  right: 'opacity-0 translate-x-12',
  up:    'opacity-0 translate-y-10',
}

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        inView ? 'opacity-100 translate-x-0 translate-y-0' : initial[direction],
        className,
      ].join(' ')}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
