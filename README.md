# SociaX

SociaX es una plataforma de redes sociales diseñada para conectar a las personas. Este proyecto está construido con [Next.js](https://nextjs.org) y utiliza tecnologías modernas como Tailwind CSS, Clerk para la autenticación, y Prisma para la gestión de la base de datos.

## Características

- Autenticación de usuarios con Clerk.
- Publicación de posts con soporte para imágenes.
- Sistema de comentarios y likes.
- Temas claros y oscuros con `next-themes`.
- Diseño responsivo con Tailwind CSS.
- Notificaciones en tiempo real.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Una base de datos compatible con Prisma (por ejemplo, PostgreSQL).

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd sociax
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
   NEXT_PUBLIC_CLERK_FRONTEND_API=<tu_clerk_frontend_api>
   CLERK_API_KEY=<tu_clerk_api_key>
   UPLOADTHING_SECRET=<tu_uploadthing_secret>
   UPLOADTHING_APP_ID=<tu_uploadthing_app_id>
   ```

4. Configura la base de datos con Prisma:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   # o
   yarn dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del proyecto

El proyecto sigue la estructura estándar de Next.js con algunas carpetas adicionales:

- `src/app`: Contiene las páginas y la configuración global de la aplicación.
- `src/components`: Componentes reutilizables como `Navbar`, `Sidebar`, etc.
- `src/actions`: Funciones para manejar la lógica del servidor.
- `src/lib`: Utilidades y configuraciones como Prisma y UploadThing.
- `prisma/schema.prisma`: Esquema de la base de datos.

## Tecnologías utilizadas

- **Next.js**: Framework de React para aplicaciones web modernas.
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo.
- **Clerk**: Autenticación y gestión de usuarios.
- **Prisma**: ORM para la base de datos.
- **React Hot Toast**: Notificaciones.
- **UploadThing**: Gestión de cargas de archivos.
- **shadcn/ui**: Componentes de interfaz de usuario preconstruidos y personalizables.

## Despliegue

El proyecto puede ser desplegado fácilmente en [Vercel](https://vercel.com/):

1. Conecta tu repositorio a Vercel.
2. Configura las variables de entorno en el panel de Vercel.
3. Haz clic en "Deploy".

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una idea para mejorar el proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
