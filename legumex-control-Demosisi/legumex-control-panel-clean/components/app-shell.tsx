'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FileInput,
  ClipboardList,
  ShieldCheck,
  LogOut,
  Menu,
  X,
  UserRound,
} from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { cn } from '@/lib/utils'

type NavKey = 'hoja' | 'historial' | 'auditoria'

const NAV: { key: NavKey; label: string; href: string; icon: typeof FileInput }[] = [
  { key: 'hoja', label: 'Hoja de Devolución', href: '/', icon: FileInput },
  { key: 'historial', label: 'Historial de Actas', href: '/historial', icon: ClipboardList },
  { key: 'auditoria', label: 'Auditoría', href: '/auditoria', icon: ShieldCheck },
]

function NavList({
  active,
  onNavigate,
}: {
  active: NavKey
  onNavigate?: () => void
}) {
  return (
    <nav className="flex flex-col gap-1" aria-label="Navegación principal">
      {NAV.map(({ key, label, href, icon: Icon }) => {
        const isActive = key === active
        return (
          <Link
            key={key}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              'min-h-11', // comfortable touch target
              isActive
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface',
            )}
          >
            <Icon
              className={cn(
                'h-5 w-5 shrink-0',
                isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface',
              )}
              strokeWidth={2}
            />
            <span className="truncate">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function BrandBlock() {
  return (
    <div className="flex items-center gap-3">
      <BrandMark className="h-10 w-10" />
      <div className="min-w-0">
        <p className="font-display text-base font-bold leading-tight text-on-surface">
          Control Operativo
        </p>
        <p className="text-xs font-medium leading-tight text-on-surface-variant">
          Administración
        </p>
      </div>
    </div>
  )
}

function UserFooter() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 rounded-lg px-2 py-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary-container text-sm font-semibold text-on-secondary-container">
          P
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-on-surface">Practicante</p>
          <p className="truncate text-xs text-on-surface-variant">Administrador</p>
        </div>
      </div>
      <Link
        href="/login"
        className="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-on-surface-variant transition-colors hover:bg-error-container hover:text-on-error-container"
      >
        <LogOut className="h-5 w-5" strokeWidth={2} />
        Cerrar Sesión
      </Link>
    </div>
  )
}

export function AppShell({
  active,
  title,
  children,
}: {
  active: NavKey
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-outline-variant bg-surface-container-lowest md:flex">
        <div className="flex h-20 items-center border-b border-outline-variant px-6">
          <BrandBlock />
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <NavList active={active} />
        </div>
        <div className="border-t border-outline-variant p-4">
          <UserFooter />
        </div>
      </aside>

      {/* ---------- Mobile header ---------- */}
      <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-outline-variant bg-surface-container-lowest px-4 md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high active:bg-surface-container-highest"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
        <div className="flex items-center gap-2.5">
          <BrandMark className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-on-surface">
            LEGUMEX
          </span>
        </div>
        <button
          type="button"
          aria-label="Perfil"
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:bg-surface-container-high active:bg-surface-container-highest"
        >
          <UserRound className="h-5 w-5" strokeWidth={2} />
        </button>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        {/* scrim */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-on-surface/40 transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />
        {/* panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={cn(
            'absolute inset-y-0 left-0 flex w-[86%] max-w-80 flex-col bg-surface-container-lowest shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex h-20 items-center justify-between border-b border-outline-variant pl-6 pr-4">
            <BrandBlock />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-on-surface-variant transition-colors hover:bg-surface-container-high active:bg-surface-container-highest"
            >
              <X className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <NavList active={active} onNavigate={() => setOpen(false)} />
          </div>
          <div className="border-t border-outline-variant p-4">
            <UserFooter />
          </div>
        </div>
      </div>

      {/* ---------- Content ---------- */}
      <div className="flex min-h-screen flex-col md:pl-72">
        <main className="flex-1">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-6 md:px-8 md:py-10">
            <h1 className="mb-6 font-display text-2xl font-bold tracking-tight text-on-surface md:mb-8 md:text-[1.75rem]">
              {title}
            </h1>
            {children}
          </div>
        </main>
        <footer className="border-t border-outline-variant bg-surface-container-lowest">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-on-surface-variant sm:flex-row md:px-8">
            <p>© LEGUMEX · Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-on-surface">Soporte Técnico</a>
              <a href="#" className="transition-colors hover:text-on-surface">Manual de Usuario</a>
              <a href="#" className="transition-colors hover:text-on-surface">Privacidad</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
