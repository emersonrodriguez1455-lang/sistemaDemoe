# 🚀 Guía de Setup Rápido

## Para Render.com

### Paso 1: Preparar el proyecto

```bash
# Clonar o descargar el ZIP
unzip legumex-control-panel.zip
cd legumex-control-panel
```

### Paso 2: Subir a GitHub (recomendado)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/legumex-control-panel.git
git branch -M main
git push -u origin main
```

### Paso 3: Deploy en Render

1. **Acceder a Render**
   - Ve a https://render.com
   - Inicia sesión o crea una cuenta

2. **Crear nuevo servicio**
   - Click en "New" → "Web Service"
   - Conecta tu repositorio de GitHub

3. **Configurar el servicio**
   - **Name**: `legumex-control-panel`
   - **Environment**: `Node`
   - **Build Command**: `pnpm install --prod && pnpm build`
   - **Start Command**: `pnpm start`
   - **Plan**: Elige según tu necesidad (Free, Starter, etc)

4. **Variables de Entorno**
   - Click en "Environment"
   - Agrega las variables:
     ```
     NODE_ENV=production
     NEXT_PUBLIC_APP_NAME=Legumex Control Panel
     NEXT_PUBLIC_APP_VERSION=1.0.0
     ```

5. **Deploy**
   - Click en "Create Web Service"
   - Espera a que termine el build (~3-5 minutos)

### Paso 4: Verificar

Tu aplicación estará disponible en:
```
https://legumex-control-panel.onrender.com
```

---

## Desarrollo Local

### Instalación

```bash
# Instalar dependencias
pnpm install

# O si no tienes pnpm instalado
npm install -g pnpm
pnpm install
```

### Ejecutar

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Producción
pnpm start
```

---

## 📊 Troubleshooting

### Error: "pnpm: command not found"
```bash
npm install -g pnpm
```

### Error: "Node version not compatible"
- Verifica que tengas Node 18.17.0 o superior
- Usa `node --version` para verificar

### Build falla en Render
1. Verifica que pnpm-lock.yaml esté en el repositorio
2. Limpia el build cache en Render
3. Revisa los logs de build

### Aplicación lenta en Render (Plan Free)
- El plan Free tiene limitaciones
- Considera upgradear a Starter o Professional

---

## 📚 Recursos Útiles

- [Documentación Render](https://render.com/docs)
- [Documentación Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

**¿Necesitas ayuda?** Revisa el README.md principal
