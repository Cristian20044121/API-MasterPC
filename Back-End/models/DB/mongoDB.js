import config from "../../config.js";
import mongoose from 'mongoose';

// Definir el esquema del producto
const productSchema = new mongoose.Schema({
    price: Number
});

// Crear el modelo basado en el esquema
const Product = mongoose.model('Product', productSchema);

class DBMongoDB {
    static READY_STATE_DISCONNECTED = 0;
    static READY_STATE_CONNECTED = 1;
    static READY_STATE_CONNECTING = 2;
    static READY_STATE_DISCONNECTING = 3;

    static async connectDB() {
        try {
            // Verificar si ya estamos conectados
            if (mongoose.connection.readyState === DBMongoDB.READY_STATE_CONNECTED) {
                console.log('La conexión ya está establecida.');
                await this.updatePrices(); // Actualizar precios si ya está conectado
                return true;
            }

            // Establecer conexión si no está conectada
            await mongoose.connect(config.MONGODB_CONNECTION_STR, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: config.MONGODB_TIMEOUT
            });

            console.log('Conexión con la base de datos establecida correctamente.');
            await this.updatePrices(); // Actualizar precios después de conectarse
            return true;
        } catch (error) {
            console.error(`Error al intentar establecer la conexión con MongoDB. Detalle: ${error.message}`);
            return false;
        }
    }

    // Método para actualizar precios de productos
    static async updatePrices() {
        try {
            const products = await Product.find(); // Obtener todos los productos

            for (const product of products) {
                // Verificar si el precio es un número entero
                if (typeof product.price === 'number' && Number.isInteger(product.price)) {
                    // Convertir el precio a "double" con dos decimales
                    let correctedPrice = parseFloat(product.price.toFixed(2));

                    // Actualizar el documento si es necesario
                    if (product.price !== correctedPrice) {
                        await Product.updateOne(
                            { _id: product._id },
                            { $set: { price: correctedPrice } }
                        );
                        console.log(`Producto con ID ${product._id} actualizado a ${correctedPrice}`);
                    }
                }
            }
        } catch (error) {
            console.error(`Error al actualizar precios: ${error.message}`);
        }
    }

    // Manejo de eventos de conexión
    static handleConnectionEvents() {
        mongoose.connection.on('connected', () => {
            console.log('Conectado a MongoDB.');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Desconectado de MongoDB.');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`Error en la conexión a MongoDB: ${err}`);
        });

        mongoose.connection.on('reconnected', () => {
            console.log('Reconectado a MongoDB.');
        });
    }
}

export default DBMongoDB;
