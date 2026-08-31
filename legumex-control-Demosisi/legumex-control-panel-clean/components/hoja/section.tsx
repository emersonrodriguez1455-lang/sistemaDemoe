import type { LucideIcon } from 'lucide-react'

export function FormSection({
  icon: Icon,
  title,
  action,
  children,
}: {
  icon: LucideIcon
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
      <header className="flex items-center justify-between gap-3 border-b border-outline-variant bg-surface-container-low px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={2.25} aria-hidden="true" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-on-surface">
            {title}
          </h2>
        </div>
        {action}
      </header>
      <div className="p-5">{children}</div>
    </section>
  )
}
