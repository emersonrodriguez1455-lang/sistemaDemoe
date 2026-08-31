# Legumex Control Panel

Panel de control para gestión de Legumex - Sistema de hojas, auditoría e historial.

## 🚀 Tecnologías

- **Framework**: Next.js 16.3.3
- **React**: 19
- **Estilos**: Tailwind CSS 4.3.3
- **UI Components**: shadcn, Base UI
- **Lenguaje**: TypeScript
- **Package Manager**: pnpm

## 📋 Requisitos Previos

- Node.js >= 18.17.0
- pnpm (recomendado) o npm

## 🛠️ Instalación Local

### 1. Clonar o descargar el proyecto

```bash
unzip legumex-control-panel.zip
cd legumex-control-panel
```

### 2. Instalar dependencias

```bash
pnpm install
# o si usas npm
npm install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env.local
# Edita .env.local con tus valores
```

### 4. Ejecutar en desarrollo

```bash
pnpm dev
# o
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🔨 Build para Producción

```bash
pnpm build
pnpm start
```

## 📦 Despliegue en Render

### Opción 1: Conectar repositorio Git

1. Sube el proyecto a GitHub, GitLab o Gitea
2. Ve a [render.com](https://render.com)
3. Crea un nuevo "Web Service"
4. Conecta tu repositorio
5. Configura:
   - **Runtime**: Node 18+
   - **Build Command**: `pnpm install --prod && pnpm build`
   - **Start Command**: `pnpm start`
   - **Environment**: Production

### Opción 2: Deploy Manual

1. Ve a [render.com](https://render.com)
2. Crea un nuevo "Web Service"
3. Sube el archivo ZIP del proyecto
4. Configura los comandos como se describe arriba

### Variables de Entorno en Render

En el panel de Render, agrega las variables desde `.env.example`:

```
NEXT_PUBLIC_APP_NAME=Legumex Control Panel
NEXT_PUBLIC_APP_VERSION=1.0.0
```

## 📁 Estructura del Proyecto

```
legumex-control-panel/
├── app/                    # Rutas y páginas (Next.js App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── login/             # Página de login
│   ├── auditoria/         # Módulo de auditoría
│   ├── historial/         # Módulo de historial
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/                # Componentes UI (shadcn)
│   ├── hoja/              # Componentes de hojas
│   ├── table/             # Componentes de tablas
│   └── app-shell.tsx      # Shell principal de la app
├── lib/                   # Utilidades y funciones
│   └── utils.ts
├── public/                # Archivos estáticos
├── package.json           # Dependencias
├── tsconfig.json          # Configuración TypeScript
├── next.config.mjs        # Configuración Next.js
├── tailwind.config.js     # Configuración Tailwind
├── postcss.config.mjs     # Configuración PostCSS
└── .env.example          # Variables de entorno ejemplo
```

## 🎨 Características Principales

- ✅ Dashboard interactivo
- ✅ Sistema de login
- ✅ Gestión de hojas (formularios)
- ✅ Módulo de auditoría
- ✅ Historial de cambios
- ✅ Componentes UI moderno (shadcn)
- ✅ Responsive design
- ✅ Animaciones con Tailwind

## 📝 Scripts Disponibles

- `pnpm dev` - Inicia servidor de desarrollo
- `pnpm build` - Compila para producción
- `pnpm start` - Inicia servidor de producción
- `pnpm lint` - Ejecuta linter

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Puerto 3000 en uso
```bash
pnpm dev -p 3001  # Usar puerto 3001
```

### TypeScript errors
Los errores de TypeScript se ignoran en build (ver `next.config.mjs`). Para desarrollar, usa:
```bash
pnpm build  # Para ver todos los errores
```

## 📧 Contacto y Soporte

Para reportar issues o sugerencias, contacta al equipo de desarrollo.

## 📄 Licencia

Proyecto privado de Legumex.

---

**Última actualización**: Agosto 2024
**Versión**: 1.0.0
