# Frontend de Coally

Este es el frontend de la aplicación Coally, construido con React. Proporciona una interfaz de usuario para interactuar con la API del backend.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:
   
   git clone https://github.com/ParkerPiter/task-manager-frontend

2. Navega al directorio del proyecto:

   cd tu-repositorio/frontend-coally

3. Instala las dependencias:

   npm install

## Uso
Para iniciar el servidor de desarrollo, ejecuta:

npm start

El servidor se ejecutará en http://localhost:3000.

## Estructura del Proyecto
src/
components/
Tasks.jsx: Componente para mostrar y gestionar las tareas.
TaskDetail.jsx: Componente para mostrar los detalles de una tarea.
TaskEdit.jsx: Componente para editar una tarea.
App.js: Componente principal que configura las rutas de la aplicación.
index.js: Punto de entrada de la aplicación.
## Rutas
Rutas Principales
/: Muestra la lista de tareas.
/tasks/:id: Muestra los detalles de una tarea específica.
/tasks/edit/:id: Permite editar una tarea específica.

## Estilos
Este proyecto utiliza Tailwind CSS para los estilos. Puedes personalizar los estilos en el archivo tailwind.config.js.

Contribución
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
4. Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
5. Crea un Pull Request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
