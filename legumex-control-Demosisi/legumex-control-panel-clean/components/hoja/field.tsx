import { cn } from '@/lib/utils'

export function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string
  htmlFor?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-on-surface">
        {label}
      </label>
      {children}
    </div>
  )
}

const inputBase =
  'h-11 w-full rounded-lg border border-outline-variant bg-surface px-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/70 transition-colors hover:border-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 disabled:cursor-not-allowed disabled:bg-surface-container disabled:text-on-surface-variant'

export function TextField(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props
  return <input {...rest} className={cn(inputBase, className)} />
}

export function SelectField(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, children, ...rest } = props
  return (
    <select {...rest} className={cn(inputBase, 'appearance-none pr-9', className)}>
      {children}
    </select>
  )
}
