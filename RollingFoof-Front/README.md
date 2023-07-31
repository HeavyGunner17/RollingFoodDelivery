# Proyecto FoodApp
Esta aplicacion desarrollada tiene la funcionalidad de vender comida a traves  de la app.
## FRONTEND

### Problemas identificados:
1. No se utiliza correctamente el estado y los efectos en React.
2. La función `fetchData` se llama antes de ser declarada, lo que genera un error.
3. No se manejan adecuadamente los errores durante la solicitud de datos.
4. Redundancia en la forma de renderizar el contenido condicionalmente utilizando múltiples operadores ternarios.

### Solución propuesta:
Para abordar estos problemas y mejorar el código del frontend, se propone lo siguiente:

1. Utilizar los hooks de React, como `useState` y `useEffect`, para administrar el estado y los efectos de manera adecuada.
2. Reorganizar el código para que la función `fetchData` sea declarada antes de ser llamada.
3. Implementar un manejo adecuado de errores durante las solicitudes de datos utilizando bloques `try-catch`.
4. Simplificar la forma de renderizar contenido condicionalmente utilizando operadores ternarios de manera más concisa.

## TECNOLOGÍAS UTILIZADAS:

- React: Framework de JavaScript utilizado para el desarrollo del frontend.
- Vite: Bundler utilizado para optimizar y construir la aplicación.

### Dependencias principales:
- React Router: Permite la navegación entre páginas de forma eficiente.
- Tailwind CSS: Proporciona estilos predefinidos y utilidades para el diseño de la página.
- React Icons: Ofrece una amplia variedad de iconos para mejorar la interfaz.
- Sweet Alert: Facilita la creación de modales y alertas para mejorar la experiencia del usuario.
- EmailJS: Permite enviar correos electrónicos directamente desde el frontend.

## BACKEND

El backend del proyecto utiliza las siguientes tecnologías:

- Node.js: Entorno de ejecución de JavaScript en el servidor.
- Express: Framework de Node.js para crear la API y manejar las rutas.
- MongoDB: Base de datos NoSQL utilizada para almacenar los datos del proyecto.

### Dependencias principales:
- Bcrypt: Permite el cifrado y la seguridad de las contraseñas de los usuarios.
- Cors: Habilita el acceso a la API desde diferentes dominios para la interacción con el frontend.
- Mongoose: Facilita la conexión y el modelado de la base de datos MongoDB.
- Multer: Proporciona un middleware para manejar la carga de archivos, como imágenes de productos.
- JWT (JSON Web Tokens): Utilizado para la autenticación y autorización de usuarios en la aplicación.

El backend se ha organizado utilizando una estructura de modelos, controladores y rutas para mejorar la modularidad y el mantenimiento del código.

En resumen, el proyecto FoodApp es una aplicación de venta de comida que utiliza tecnologías modernas tanto en el frontend (React, Vite) como en el backend (Node.js, Express, MongoDB). Se han utilizado diversas dependencias para mejorar la experiencia del usuario y garantizar la seguridad de la aplicación. La estructura del código se ha diseñado para facilitar el desarrollo y el despliegue del proyecto en un entorno de producción.