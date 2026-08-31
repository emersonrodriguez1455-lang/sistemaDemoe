import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">
      {/* Subtle branded background treatment — a quiet ink grid, no gradients/blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--outline-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--outline-variant) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 42%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 42%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative w-full max-w-[26rem]">
        {/* Brand */}
        <div className="mb-8 flex flex-col items-center text-center">
          <BrandMark className="h-16 w-16 rounded-2xl" />
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-on-surface">
            LEGUMEX
          </h1>
          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-on-surface-variant">
            <span>Control Operativo</span>
            <span className="h-1 w-1 rounded-full bg-outline" aria-hidden="true" />
            <span>Administración Industrial</span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm sm:p-8">
          {/* Accent hairline at top of card for a touch of intention */}
          <div className="mx-auto mb-7 h-1 w-12 rounded-full bg-primary" aria-hidden="true" />

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="user" className="text-sm font-semibold text-on-surface">
                Usuario
              </label>
              <input
                id="user"
                name="user"
                type="text"
                autoComplete="username"
                defaultValue="Practicante"
                placeholder="Tu usuario"
                className="h-12 rounded-lg border border-outline-variant bg-surface px-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 transition-colors hover:border-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-semibold text-on-surface">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                defaultValue="passwordvalue00"
                placeholder="••••••••••"
                className="h-12 rounded-lg border border-outline-variant bg-surface px-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 transition-colors hover:border-outline focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <Link
              href="/"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-on-primary shadow-sm transition-all hover:brightness-110 active:brightness-95 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-surface-container-lowest"
            >
              Iniciar Sesión
            </Link>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-on-surface-variant">
          Acceso restringido a personal autorizado de LEGUMEX.
        </p>
      </div>
    </main>
  )
}
