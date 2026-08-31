'use client'

import { useState } from 'react'
import {
  UserRound,
  MonitorSmartphone,
  PackageCheck,
  ClipboardEdit,
  PenLine,
  Plus,
  X,
} from 'lucide-react'
import { FormSection } from './section'
import { Field, TextField, SelectField } from './field'
import { SignaturePad } from './signature-pad'
import { cn } from '@/lib/utils'

const ACCESSORIES = [
  'Monitor', 'Mouse', 'UPS', 'Laptop', 'Cargador',
  'Teclado', 'Impresora', 'Disco Externo', 'Otro', 'Celular',
]

function Radio({
  name,
  label,
  defaultChecked,
}: {
  name: string
  label: string
  defaultChecked?: boolean
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1 text-sm text-on-surface">
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        className="h-4.5 w-4.5 accent-[var(--primary)]"
      />
      {label}
    </label>
  )
}

export function HojaForm() {
  const [format, setFormat] = useState<'1' | '2'>('2')
  const [checked, setChecked] = useState<string[]>([])

  function toggle(name: string) {
    setChecked((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Document header */}
      <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
        <div className="h-1.5 w-full bg-primary" aria-hidden="true" />
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:justify-between md:p-6">
          <div className="flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary-container text-on-primary-container">
              <MonitorSmartphone className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-display text-xl font-extrabold leading-tight tracking-tight text-on-surface md:text-2xl">
                Hoja de Devolución de Equipo
              </h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Departamento de Tecnologías de la Información
              </p>
            </div>
          </div>
          <dl className="grid shrink-0 grid-cols-[auto_auto] gap-x-4 gap-y-1.5 text-sm sm:text-right">
            <dt className="text-on-surface-variant">Código:</dt>
            <dd className="font-semibold text-on-surface">DEV-EQ-01</dd>
            <dt className="text-on-surface-variant">Fecha emisión:</dt>
            <dd className="font-semibold text-on-surface">Enero 2025</dd>
            <dt className="text-on-surface-variant">Vigencia:</dt>
            <dd className="font-semibold text-on-surface">Enero 2026</dd>
          </dl>
        </div>
      </div>

      {/* Datos del usuario */}
      <FormSection icon={UserRound} title="Datos del Usuario">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Fecha de Devolución" htmlFor="fecha">
            <TextField id="fecha" type="date" defaultValue="2024-10-24" />
          </Field>
          <Field label="Responsable que Entrega" htmlFor="responsable" className="sm:col-span-1 lg:col-span-2">
            <TextField id="responsable" placeholder="Nombre completo" />
          </Field>
          <Field label="Departamento" htmlFor="departamento">
            <TextField id="departamento" placeholder="Área o departamento" />
          </Field>
          <Field label="Puesto" htmlFor="puesto">
            <TextField id="puesto" placeholder="Cargo actual" />
          </Field>
          <Field label="Recibí de" htmlFor="recibi">
            <TextField id="recibi" defaultValue="AGROINDUSTRIA LEGUMEX, S.A." />
          </Field>
        </div>
        <div className="mt-4">
          <p className="mb-1 text-sm font-semibold text-on-surface">Planta / Ubicación</p>
          <div className="flex flex-wrap gap-6">
            <Radio name="planta" label="Tejar" defaultChecked />
            <Radio name="planta" label="Parramos" />
          </div>
        </div>
      </FormSection>

      {/* Formato del acta toggle */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-on-surface">Formato del acta:</span>
        <div className="inline-flex rounded-lg border border-outline-variant bg-surface-container p-1">
          {(['1', '2'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFormat(f)}
              aria-pressed={format === f}
              className={cn(
                'rounded-md px-3.5 py-1.5 text-sm font-semibold transition-colors',
                format === f
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface',
              )}
            >
              {f} página{f === '2' ? 's' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* Descripción de equipo */}
      <FormSection icon={MonitorSmartphone} title="Descripción de Equipo">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
          <div>
            <p className="mb-1 text-sm font-semibold text-on-surface">Tipo de Equipo</p>
            <Radio name="tipo" label="Laptop" defaultChecked />
            <Radio name="tipo" label="Escritorio" />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-on-surface">Estado</p>
            <Radio name="estado" label="Nuevo" defaultChecked />
            <Radio name="estado" label="Usado" />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold text-on-surface">Marca</p>
            <Radio name="marca" label="Original" defaultChecked />
            <Radio name="marca" label="CLON" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Field label="Modelo" htmlFor="modelo">
            <TextField id="modelo" placeholder="Ej. Latitude 5420" />
          </Field>
          <Field label="Número de Serie (S/N)" htmlFor="serie">
            <TextField id="serie" placeholder="ALFANUMERICO" />
          </Field>
          <Field label="Nombre del Equipo" htmlFor="nombre-equipo">
            <TextField id="nombre-equipo" placeholder="LGMX-NB-001" />
          </Field>
          <Field label="Procesador" htmlFor="cpu">
            <TextField id="cpu" placeholder="Ej. Intel Core i5 11th Gen" />
          </Field>
          <Field label="Memoria RAM" htmlFor="ram">
            <SelectField id="ram" defaultValue="16 GB">
              <option>4 GB</option>
              <option>8 GB</option>
              <option>16 GB</option>
              <option>32 GB</option>
            </SelectField>
          </Field>
          <Field label="Almacenamiento (Disco)" htmlFor="disco">
            <div className="flex gap-2">
              <SelectField id="disco" defaultValue="SSD" className="w-28">
                <option>SSD</option>
                <option>HDD</option>
                <option>NVMe</option>
              </SelectField>
              <TextField placeholder="Capacidad (Ej. 512GB)" />
            </div>
          </Field>
        </div>
      </FormSection>

      {/* Accesorios */}
      <FormSection
        icon={PackageCheck}
        title="Accesorios Devueltos"
        action={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-outline-variant bg-surface px-3 py-1.5 text-xs font-semibold text-on-surface transition-colors hover:bg-surface-container-high active:brightness-95"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Agregar Fila
          </button>
        }
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Verificación rápida
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
          {ACCESSORIES.map((a) => {
            const active = checked.includes(a)
            return (
              <label
                key={a}
                className="flex cursor-pointer items-center gap-2 text-sm text-on-surface"
              >
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle(a)}
                  className="h-4.5 w-4.5 rounded accent-[var(--primary)]"
                />
                {a}
              </label>
            )
          })}
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-outline-variant text-left text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                <th className="py-2.5 pr-3 font-bold">No.</th>
                <th className="py-2.5 pr-3 font-bold">Artículo</th>
                <th className="py-2.5 pr-3 font-bold">Marca</th>
                <th className="py-2.5 pr-3 font-bold">Modelo</th>
                <th className="py-2.5 pr-3 font-bold">No. Serie</th>
                <th className="py-2.5 pr-3 font-bold">Estado</th>
                <th className="py-2.5 font-bold" />
              </tr>
            </thead>
            <tbody>
              {checked.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-on-surface-variant">
                    Marca un accesorio arriba o usa “Agregar Fila” para empezar.
                  </td>
                </tr>
              ) : (
                checked.map((a, i) => (
                  <tr key={a} className="border-b border-outline-variant last:border-0">
                    <td className="py-2 pr-3 text-on-surface-variant">{i + 1}</td>
                    <td className="py-2 pr-3 font-medium text-on-surface">{a}</td>
                    <td className="py-2 pr-3"><TextField className="h-9" placeholder="—" /></td>
                    <td className="py-2 pr-3"><TextField className="h-9" placeholder="—" /></td>
                    <td className="py-2 pr-3"><TextField className="h-9" placeholder="—" /></td>
                    <td className="py-2 pr-3"><TextField className="h-9" placeholder="—" /></td>
                    <td className="py-2">
                      <button
                        type="button"
                        onClick={() => toggle(a)}
                        aria-label={`Quitar ${a}`}
                        className="grid h-9 w-9 place-items-center rounded-lg text-on-surface-variant transition-colors hover:bg-error-container hover:text-on-error-container"
                      >
                        <X className="h-4 w-4" strokeWidth={2.25} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </FormSection>

      {/* Observaciones */}
      <FormSection icon={ClipboardEdit} title="Observaciones Generales">
        <textarea
          rows={4}
          placeholder="Anote cualquier daño estético, fallas reportadas no resueltas, o información relevante sobre el equipo devuelto..."
          className="w-full resize-y rounded-lg border border-outline-variant bg-surface px-3.5 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/70 transition-colors hover:border-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
        />
      </FormSection>

      {/* Firmas */}
      <FormSection icon={PenLine} title="Firmas">
        <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
          Por este medio se hace constar que el día{' '}
          <span className="font-semibold text-on-surface">__</span> del mes{' '}
          <span className="font-semibold text-on-surface">__</span> del año{' '}
          <span className="font-semibold text-on-surface">____</span>, hago constar que
          entrego todo el equipo descrito arriba.
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <SignaturePad role="Nombre y Firma de Quien Entrega" subtitle="(Usuario Final)" />
          <SignaturePad role="Nombre y Firma de Quien Recibe" subtitle="(Soporte TI)" />
        </div>
      </FormSection>

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-outline-variant pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-outline-variant bg-surface px-5 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-high active:brightness-95"
        >
          Cancelar
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-on-primary shadow-sm transition-all hover:brightness-110 active:brightness-95"
        >
          <PackageCheck className="h-4 w-4" strokeWidth={2.25} />
          Finalizar Devolución
        </button>
      </div>
    </div>
  )
}
