import { PORT, DATABASE_NAME } from "./config.js"; //variable de entorno puerto
import app from "./app.js";
import { conexion } from "./database/authentication.js";

async function inicio() {
  try {
    await conexion;
    app.listen(PORT || 3000, () => {
      console.log(`El servidor esta activo en ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

inicio();
