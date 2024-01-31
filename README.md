<h1>API de MasterPC</h1> <br>
La API de MasterPC es una aplicación en Node.js construida para manejar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en productos tecnológicos de la tienda online MasterPC. La API está conectada a una base de datos MongoDB Atlas para almacenar y recuperar información sobre los productos.

Características Principales
Conexión a MongoDB Atlas: La API se conecta a una base de datos MongoDB alojada en MongoDB Atlas para almacenar y gestionar datos de productos.

Operaciones CRUD: La API permite realizar las operaciones CRUD básicas (Crear, Leer, Actualizar, Borrar) en productos tecnológicos.

Manejo de Rutas, Modelos y Controladores: La aplicación sigue una estructura organizativa clara con el uso de rutas para definir endpoints, modelos para representar la estructura de datos y controladores para manejar la lógica de negocio.

Express y Servidor HTTP: Se utiliza Express.js para crear un servidor HTTP que escucha las solicitudes de la aplicación y maneja el enrutamiento.

Control de Acceso (CORS): Se ha implementado un controlador de acceso (CORS) para gestionar las políticas de seguridad del navegador y permitir el acceso solo a una fuente específica.



Inicio Rápido
- npm install
- npm start || node app
