import { FileText, Eye, Pencil, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const base =
  'grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-transparent text-on-surface-variant transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'

/** Always-visible row actions (never hover-gated) with comfortable touch targets. */
export function RowActions() {
  return (
    <div className="flex items-center justify-end gap-1">
      <button
        type="button"
        aria-label="Generar documento"
        className={cn(base, 'hover:bg-surface-container-high hover:text-on-surface')}
      >
        <FileText className="h-4.5 w-4.5" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Ver detalle"
        className={cn(base, 'hover:bg-surface-container-high hover:text-on-surface')}
      >
        <Eye className="h-4.5 w-4.5" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Editar"
        className={cn(base, 'hover:bg-primary-container hover:text-on-primary-container')}
      >
        <Pencil className="h-4.5 w-4.5" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Eliminar"
        className={cn(base, 'hover:bg-error-container hover:text-on-error-container')}
      >
        <Trash2 className="h-4.5 w-4.5" strokeWidth={2} />
      </button>
    </div>
  )
}
