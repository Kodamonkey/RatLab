# RatLab - Sitio Web del Grupo de Radio Transientes PUC

Este repositorio contiene el código fuente del sitio web de RatLab, el Grupo de Investigación de Radio Transientes de la Pontificia Universidad Católica de Chile. El sitio está construido con [Astro](https://astro.build/) y estilizado con [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Estructura del Proyecto

El proyecto sigue la estructura estándar de Astro, con algunas adiciones específicas:

```text
/
├── public/                   # Archivos estáticos (imágenes, favicon, etc.)
│   ├── images/
│   │   ├── miembros/         # Imágenes de los miembros del equipo
│   │   └── banner-transient.jpg # Imagen para el componente Hero
│   └── favicon.svg
├── src/
│   ├── assets/               # Otros assets como SVGs
│   ├── components/           # Componentes reutilizables de Astro (.astro)
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── MemberCard.astro
│   │   └── PublicationCard.astro
│   ├── data/                 # Archivos de datos (ej. team.json, aunque actualmente vacío)
│   │   └── team.json
│   ├── layouts/              # Layouts base para las páginas
│   │   └── DefaultLayout.astro
│   ├── pages/                # Páginas del sitio (.astro)
│   │   ├── index.astro       (Página de Inicio)
│   │   ├── about.astro       (Sobre Nosotros)
│   │   ├── research.astro    (Investigación)
│   │   ├── members.astro     (Miembros)
│   │   ├── publications.astro(Publicaciones)
│   │   └── contact.astro     (Contacto)
│   └── styles/               # Estilos globales y variables CSS
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml        # Workflow de GitHub Actions para despliegue en GitHub Pages
├── astro.config.mjs          # Configuración principal de Astro
├── tailwind.config.cjs       # Configuración de Tailwind CSS
├── package.json              # Dependencias y scripts del proyecto
└── tsconfig.json             # Configuración de TypeScript para Astro
```

Para más detalles sobre la estructura de proyectos Astro, consulta la [documentación oficial](https://docs.astro.build/es/core-concepts/project-structure/).

## 🛠️ Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS, actualmente v18 según el workflow de despliegue). `npm` viene incluido con Node.js.

## ⚙️ Instalación

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/RatLab.git # Reemplaza con tu URL de repositorio
    cd RatLab
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                                                    |
| :------------------ | :------------------------------------------------------------------------ |
| `npm run dev`       | Inicia el servidor de desarrollo local en `http://localhost:4321/RatLab/` |
| `npm run build`     | Compila el sitio para producción en la carpeta `./dist/`                  |
| `npm run preview`   | Previsualiza la compilación de producción localmente                      |
| `npm run astro ...` | Ejecuta comandos de la CLI de Astro como `astro add`, `astro check`       |

**Nota importante sobre `base`:**
Originalmente el proyecto estaba configurado con `base: '/RatLab/'` en
[`astro.config.mjs`](astro.config.mjs) para ser publicado en un subdirectorio de
GitHub Pages. Si lo despliegas en Netlify (o en la raíz de cualquier servidor)
debes cambiar la opción a `base: '/'`; de lo contrario los estilos e imágenes no
se cargarán correctamente.

- En desarrollo con `base: '/RatLab/'` el sitio se sirve desde
  `http://localhost:4321/RatLab/`.
- En producción (por ejemplo GitHub Pages) el sitio estará disponible en
  `https://<tu-usuario>.github.io/RatLab/`.
  Los enlaces internos en los componentes (como en
  [`src/components/Navbar.astro`](src/components/Navbar.astro)) utilizan
  `import.meta.env.BASE_URL` para construir las rutas correctamente.

## 🚀 Despliegue

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages cada vez que se hace un `push` a la rama `main`. Esto se gestiona a través del workflow definido en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## ✨ Características Principales

- **Astro**: Framework moderno para construir sitios web rápidos y optimizados.
- **Tailwind CSS**: Framework CSS utility-first para un diseño rápido y personalizable.
- **Componentes Reutilizables**: Estructura modular con componentes para la barra de navegación, pie de página, tarjetas de miembros, etc.
- **Despliegue Automatizado**: Integración con GitHub Actions para despliegue continuo en GitHub Pages.
- **Configuración de `base`**: Preparado para ser servido desde un subdirectorio (`/RatLab/`).

## 🤝 Contribuir

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1.  Haz un Fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5.  Abre un Pull Request.

---
