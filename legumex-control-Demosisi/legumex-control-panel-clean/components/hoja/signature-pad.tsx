'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const TABS = ['Dibujar', 'Subir imagen', 'Registro histórico'] as const

export function SignaturePad({
  role,
  subtitle,
}: {
  role: string
  subtitle: string
}) {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Dibujar')

  return (
    <div className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-3">
      <div className="mb-3 flex flex-wrap items-center gap-1 rounded-lg bg-surface-container p-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            aria-pressed={tab === t}
            className={cn(
              'flex-1 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors',
              tab === t
                ? 'bg-primary text-on-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface',
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid aspect-[5/2] w-full place-items-center rounded-lg border border-dashed border-outline bg-surface">
        <span className="px-4 text-center text-xs text-on-surface-variant">
          {tab === 'Dibujar'
            ? 'Dibuje la firma aquí'
            : tab === 'Subir imagen'
              ? 'Seleccione un archivo de imagen'
              : 'Sin registro histórico disponible'}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <button
          type="button"
          className="rounded-md px-2 py-1 text-xs font-medium text-on-surface-variant underline-offset-2 transition-colors hover:text-error hover:underline"
        >
          Borrar trazo
        </button>
        <button
          type="button"
          className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs font-semibold text-on-surface transition-colors hover:bg-surface-container-highest active:brightness-95"
        >
          Confirmar firma
        </button>
      </div>

      <div className="mt-3 border-t border-outline-variant pt-2.5 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-on-surface">{role}</p>
        <p className="text-[11px] text-on-surface-variant">{subtitle}</p>
      </div>
    </div>
  )
}
