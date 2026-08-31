import { Search, Download, PackageOpen } from 'lucide-react'
import { AppShell } from '@/components/app-shell'
import { RowActions } from '@/components/table/row-actions'

const ROWS = [
  { producto: 'Original', nombre: 'Jose Reyes', fecha: '23/10/2024' },
  { producto: 'Original', nombre: 'Jose Fernandez', fecha: '23/10/2024' },
  { producto: 'LGX-423', nombre: 'Jose Alvarado', fecha: '23/10/2024' },
  { producto: 'Inb', nombre: 'jose manuel', fecha: '23/10/2024' },
  { producto: 'Original', nombre: 'asdasd', fecha: '23/10/2024' },
]

export default function HistorialPage() {
  return (
    <AppShell active="historial" title="Historial de Actas">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-on-surface-variant">
            Equipos y accesorios devueltos, por responsable y fecha.
          </p>
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-outline-variant bg-surface px-4 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-high active:brightness-95 sm:self-auto"
          >
            <Download className="h-4 w-4" strokeWidth={2.25} />
            Exportar
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-on-surface-variant"
            strokeWidth={2}
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Buscar por responsable, departamento, puesto, planta, marca, serie, nombre del equipo..."
            aria-label="Buscar actas"
            className="h-12 w-full rounded-xl border border-outline-variant bg-surface-container-lowest pl-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/80 shadow-sm transition-colors hover:border-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-left text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  <th className="px-5 py-3.5">Producto</th>
                  <th className="px-5 py-3.5">Nombre</th>
                  <th className="px-5 py-3.5">Fecha</th>
                  <th className="px-5 py-3.5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-outline-variant transition-colors last:border-0 hover:bg-surface-container-low"
                  >
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-2 font-medium text-on-surface">
                        <PackageOpen
                          className="h-4 w-4 text-on-surface-variant"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        {r.producto}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-on-surface">{r.nombre}</td>
                    <td className="px-5 py-4 text-on-surface-variant">{r.fecha}</td>
                    <td className="px-5 py-4">
                      <RowActions />
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
