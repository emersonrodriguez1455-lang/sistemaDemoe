import { Download, Eye, PlusCircle, PencilLine, Trash2 } from 'lucide-react'
import { AppShell } from '@/components/app-shell'
import { cn } from '@/lib/utils'

type Action = 'CREADO' | 'EDITADO' | 'ELIMINADO'

const ROWS: {
  ts: string
  hora: string
  usuario: string
  action: Action
  acta: string
}[] = [
  { ts: '30/8/2026', hora: '2:19:09 a. m.', usuario: 'Practicante', action: 'CREADO', acta: 'asdasd' },
  { ts: '30/8/2026', hora: '2:10:22 a. m.', usuario: 'Practicante', action: 'CREADO', acta: 'jose manuel (Inb)' },
  { ts: '28/8/2026', hora: '3:14:59 p. m.', usuario: 'Practicante', action: 'CREADO', acta: 'Jose Alvarado (LGX-423)' },
  { ts: '28/8/2026', hora: '10:41:02 a. m.', usuario: 'Practicante', action: 'ELIMINADO', acta: 'Jorge Reyes' },
  { ts: '28/8/2026', hora: '10:38:20 a. m.', usuario: 'Practicante', action: 'CREADO', acta: 'Jorge Reyes' },
  { ts: '27/8/2026', hora: '4:57:30 p. m.', usuario: 'Practicante', action: 'EDITADO', acta: 'Jose Fernandez' },
  { ts: '27/8/2026', hora: '4:36:16 p. m.', usuario: 'Practicante', action: 'CREADO', acta: 'Jose Reyes' },
  { ts: '27/8/2026', hora: '4:36:10 p. m.', usuario: 'Practicante', action: 'CREADO', acta: 'Jose Fernandez' },
]

const BADGE: Record<Action, { cls: string; icon: typeof PlusCircle }> = {
  CREADO: { cls: 'bg-success-container text-on-success-container', icon: PlusCircle },
  EDITADO: { cls: 'bg-warning-container text-on-warning-container', icon: PencilLine },
  ELIMINADO: { cls: 'bg-error-container text-on-error-container', icon: Trash2 },
}

function ActionBadge({ action }: { action: Action }) {
  const { cls, icon: Icon } = BADGE[action]
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide',
        cls,
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
      {action}
    </span>
  )
}

export default function AuditoriaPage() {
  return (
    <AppShell active="auditoria" title="Registro de Auditoría">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-on-surface-variant">
            Monitoreo de actividades del sistema operativo.
          </p>
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-outline-variant bg-surface px-4 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-high active:brightness-95 sm:self-auto"
          >
            <Download className="h-4 w-4" strokeWidth={2.25} />
            Exportar
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-left text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  <th className="px-5 py-3.5">Timestamp</th>
                  <th className="px-5 py-3.5">Usuario</th>
                  <th className="px-5 py-3.5">Acción</th>
                  <th className="px-5 py-3.5">Acta afectada</th>
                  <th className="px-5 py-3.5 text-right">Detalle</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-outline-variant transition-colors last:border-0 hover:bg-surface-container-low"
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="font-semibold text-on-surface">{r.ts}</div>
                      <div className="text-xs text-on-surface-variant">{r.hora}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary-container text-xs font-semibold text-on-secondary-container">
                          P
                        </span>
                        <span className="font-medium text-on-surface">{r.usuario}</span>
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <ActionBadge action={r.action} />
                    </td>
                    <td className="px-5 py-4 text-on-surface">{r.acta}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          aria-label={`Ver detalle de ${r.acta}`}
                          className="grid h-9 w-9 place-items-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          <Eye className="h-4.5 w-4.5" strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
