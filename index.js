import express from 'express'; // importar libreria
import 'dotenv/config'; // cargar variables de entorno
import cors from 'cors';

import rutausuario from "./src/modules/usuario/usuario.routes.js";
import rutaproducto from "./src/modules/producto/producto.routes.js";

// creamos una instancia de la libreria express en la constante app
const app = express(); // metodo constructor de la libreria
const PORT = process.env.PORT || 4100; // puerto donde desplegaremos el server

// Middlewares
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded desde express
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

// ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// rutas para los endpoints
app.use("/api", rutausuario);
app.use("/api", rutaproducto);

app.listen(PORT, () => {
  console.log(`Server iniciado en puerto ${PORT}`);
});