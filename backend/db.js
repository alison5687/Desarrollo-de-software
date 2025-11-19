// db.js: función connectDB que intenta usar mongoose si está instalado.
// Si no quieres usar MongoDB, reemplaza el contenido con el cliente que necesites.
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
const connectDB = async () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.log('No DATABASE_URL configurado. Se omitirá la conexión a la BD.');
    return;
  }

  try {
    let mongoose;
    try {
      mongoose = require('mongoose');
    } catch (err) {
      console.log('Mongoose no está instalado. Instala mongoose si quieres conectar a MongoDB.');
      return;
    }

    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error al conectar a la BD:', err);
    // Dependiendo del caso, podrías no cerrar el proceso aquí.
    process.exit(1);
  }
};

module.exports = { connectDB };
