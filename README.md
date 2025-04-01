# Shock Wave Repair Shop

Bienvenido al repositorio de **Shock Wave Repair Shop**. Este proyecto es una aplicación web construida con **React, Vite, TypeScript, Tailwind CSS y shadcn-ui**.

## Tecnologías utilizadas

- **Vite** - Para el entorno de desarrollo rápido.
- **React** - Biblioteca para la construcción de interfaces de usuario.
- **TypeScript** - Tipado estático para mejorar la calidad del código.
- **Tailwind CSS** - Framework de utilidades para estilos modernos.
- **shadcn-ui** - Componentes UI accesibles y personalizables.

## Instalación y configuración

Para ejecutar el proyecto en local, sigue estos pasos:

### **Requisitos previos**
- Tener instalado **Node.js** y **npm** (se recomienda usar `nvm` para gestionar versiones de Node).

### **Pasos para ejecutar el proyecto**

```sh
# 1. Clonar el repositorio
 git clone https://github.com/ailinbaudin/shock-wave-repair-shop.git

# 2. Entrar en la carpeta del proyecto
 cd shock-wave-repair-shop

# 3. Instalar dependencias
 npm install

# 4. Iniciar el servidor de desarrollo
 npm run dev
```

La aplicación se ejecutará en `http://localhost:5173/` por defecto.

## Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en **GitHub Pages**. Para generar y subir la última versión a producción, usa:

```sh
npm run build
npm run deploy
```

La aplicación estará disponible en:

```
https://ailinbaudin.github.io/shock-wave-repair-shop/
```

Si es necesario, revisa el archivo `vite.config.ts` y asegúrate de que la base esté configurada correctamente:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/shock-wave-repair-shop/',
});
```

## Contribuciones

Si deseas contribuir a este proyecto:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama con tu funcionalidad (`git checkout -b feature-nueva`).
3. Realiza cambios y haz un **commit** (`git commit -m "Descripción del cambio"`).
4. Envía un **pull request**.

¡Gracias por tu colaboración!

## Licencia

Este proyecto se encuentra bajo la licencia **MIT**.