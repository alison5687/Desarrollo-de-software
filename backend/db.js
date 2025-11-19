// db.js: función connectDB que intenta usar mongoose si está instalado.
// Si no quieres usar MongoDB, reemplaza el contenido con el cliente que necesites.
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);