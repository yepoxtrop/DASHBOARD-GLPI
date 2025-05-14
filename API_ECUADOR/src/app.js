import express from 'express';
import cors from 'cors';

//importacion de rutas


//Definición de rutas
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

//rutas
import techniciansRoutes from './routes/technicians.routes.js';
import zonesRoutes from './routes/zones.routes.js';
import casesRoutes from './routes/cases.routes.js';
import ticketsRoutes from './routes/tickets.routes.js';
import dataRoutes from "./routes/data.routes.js";
import totalzonesRoutes from "./routes/zonesTotal.routes.js"
import totalTechnicians from "./routes/techniciansTotal.routes.js";
import alert from "./routes/alert.routes.js";

//funcionan
app.use("/ecuador", techniciansRoutes);//cantidad de casos por tecnico
app.use("/ecuador", zonesRoutes);//cantidad de casos por zona regional
app.use("/ecuador", casesRoutes);//total de casos por mes
app.use("/ecuador", ticketsRoutes);//casos sin resolver
app.use("/ecuador", dataRoutes);
app.use("/ecuador", totalzonesRoutes);
app.use("/ecuador", totalTechnicians)
app.use("/ecuador", alert)

export default app;