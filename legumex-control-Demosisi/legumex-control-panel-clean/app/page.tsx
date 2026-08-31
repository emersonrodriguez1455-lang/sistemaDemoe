import { AppShell } from '@/components/app-shell'
import { HojaForm } from '@/components/hoja/hoja-form'

export default function Page() {
  return (
    <AppShell active="hoja" title="Formulario de Retorno">
      <HojaForm />
    </AppShell>
  )
}
