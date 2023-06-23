import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();

app.set("port", 4000);

// Routes

app.use("/api/categorias",categoriaRoutes);

export default app;