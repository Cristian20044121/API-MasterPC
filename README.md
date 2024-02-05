# API de MasterPC 🚀

La API de MasterPC es una aplicación en Node.js construida para manejar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en productos tecnológicos de la tienda online MasterPC. La API está conectada a una base de datos MongoDB Atlas para almacenar y recuperar información sobre los productos.

## Características Principales

- **Conexión a MongoDB Atlas:** La API se conecta a una base de datos MongoDB alojada en MongoDB Atlas para almacenar y gestionar datos de productos.
- **Operaciones CRUD:** La API permite realizar las operaciones CRUD básicas (Crear, Leer, Actualizar, Borrar) en productos tecnológicos.
- **Manejo de Rutas, Modelos y Controladores:** La aplicación sigue una estructura organizativa clara con el uso de rutas para definir endpoints, modelos para representar la estructura de datos y controladores para manejar la lógica de negocio.
- **Express y Servidor HTTP:** Se utiliza Express.js para crear un servidor HTTP que escucha las solicitudes de la aplicación y maneja el enrutamiento.
- **Control de Acceso (CORS):** Se ha implementado un controlador de acceso (CORS) para gestionar las políticas de seguridad del navegador y permitir el acceso solo a una fuente específica.

## Inicio Rápido

1. **Instalación de Dependencias:** `npm install`
2. **Configuración de Variables de Entorno:** Asegúrate de configurar las variables de entorno necesarias en un archivo `.env`.
3. **Iniciar la Aplicación:** `npm start`

La aplicación se iniciará en el puerto especificado en tus variables de entorno.

## Variables de Entorno

- **MONGODB_URI:** URL de conexión a la base de datos MongoDB Atlas.
- **PORT:** Puerto en el que se ejecutará el servidor.

  
## Estructura 

```
└── 📁API-masterPC
    └── 📁Back-End
        └── .gitignore
        └── 📁api
            └── products.js
        └── app.js
        └── config.js
        └── 📁controllers
            └── products.js
        └── 📁models
            └── 📁DB
                └── mongoDB.js
            └── products-mongodb.js
            └── products.js
        └── package-lock.json
        └── package.json
        └── 📁Routers
            └── products.js
    └── README.md
```

## API Endpoints

- **GET     api/products:** Obtiene la lista de todos los productos.
- **GET     api/products/:id:** Obtiene detalles de un producto específico por ID.
- **POST    api/products:** Crea un nuevo producto.
- **PUT     api/products/:id:** Actualiza los detalles de un producto existente.
- **DELETE  api/products/:id:** Elimina un producto específico.
