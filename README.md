 <h1>API de MasterPC 🚀</h1>

    <p>La API de MasterPC es una aplicación en Node.js construida para manejar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en productos tecnológicos de la tienda online MasterPC. La API está conectada a una base de datos MongoDB Atlas para almacenar y recuperar información sobre los productos.</p>

    <h2>Características Principales</h2>

    <ul>
        <li><strong>Conexión a MongoDB Atlas:</strong> La API se conecta a una base de datos MongoDB alojada en MongoDB Atlas para almacenar y gestionar datos de productos.</li>
        <li><strong>Operaciones CRUD:</strong> La API permite realizar las operaciones CRUD básicas (Crear, Leer, Actualizar, Borrar) en productos tecnológicos.</li>
        <li><strong>Manejo de Rutas, Modelos y Controladores:</strong> La aplicación sigue una estructura organizativa clara con el uso de rutas para definir endpoints, modelos para representar la estructura de datos y controladores para manejar la lógica de negocio.</li>
        <li><strong>Express y Servidor HTTP:</strong> Se utiliza Express.js para crear un servidor HTTP que escucha las solicitudes de la aplicación y maneja el enrutamiento.</li>
        <li><strong>Control de Acceso (CORS):</strong> Se ha implementado un controlador de acceso (CORS) para gestionar las políticas de seguridad del navegador y permitir el acceso solo a una fuente específica.</li>
    </ul>

    <h2>Inicio Rápido</h2>

    <ol>
        <li><strong>Instalación de Dependencias:</strong>
            <code>npm install</code>
        </li>
        <li><strong>Configuración de Variables de Entorno:</strong> Asegúrate de configurar las variables de entorno necesarias en un archivo <code>.env</code>.</li>
        <li><strong>Iniciar la Aplicación:</strong>
            <code>npm start || node app</code>
        </li>
    </ol>

    <p>La aplicación se iniciará en el puerto especificado en tus variables de entorno.</p>

    <h2>Variables de Entorno</h2>

    <ul>
        <li><strong>MONGODB_URI:</strong> URL de conexión a la base de datos MongoDB Atlas.</li>
        <li><strong>PORT:</strong> Puerto en el que se ejecutará el servidor.</li>
    </ul>

    <h2>API Endpoints</h2>

    <ul>
        <li><strong>GET     api/products:</strong> Obtiene la lista de todos los productos.</li>
        <li><strong>GET     api/products/:id:</strong> Obtiene detalles de un producto específico por ID.</li>
        <li><strong>POST    api/products:</strong> Crea un nuevo producto.</li>
        <li><strong>PUT     api/products/:id:</strong> Actualiza los detalles de un producto existente.</li>
        <li><strong>DELETE  api/products/:id:</strong> Elimina un producto específico.</li>
    </ul>