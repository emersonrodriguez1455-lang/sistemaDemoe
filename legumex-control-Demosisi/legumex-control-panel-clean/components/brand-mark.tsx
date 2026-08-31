import { Factory } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid place-items-center rounded-lg bg-primary text-on-primary shadow-sm',
        className,
      )}
    >
      <Factory className="h-1/2 w-1/2" strokeWidth={2} aria-hidden="true" />
    </div>
  )
}
