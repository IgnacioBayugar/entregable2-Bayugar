import express from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import handlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import viewsRouter from "./routes/views.router.js";
import { errorHandler } from "./utils/errors.js";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middlewares GLOBALS (ANTES DE RUTAS)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Error handler
app.use(errorHandler);

// 404
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found"
  });
});

export default app;
