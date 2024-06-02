import express from 'express';
import cors from 'cors'; // Importa el paquete cors
import personRoutes from './routes/personRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import sequelize from './config/database';

const app = express();

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Personas',
      version: '1.0.0',
      description: 'Una API para gestionar personas',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia esto según la URL de tu servidor
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Asegúrate de que la ruta sea correcta
};

const specs = swaggerJsdoc(options);

// Monta Swagger en tu aplicación Express
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Aplica el middleware de CORS después de configurar Swagger y antes de tus rutas
app.use(cors());

app.use(express.json());
app.use('/api', personRoutes);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Base de datos sincronizada');
    const port = process.env.PORT || 3001; // Cambia a 3001
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('No se pudo sincronizar la base de datos:', error);
  }
};

startServer();

export default app;
