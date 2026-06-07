import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const hasConnectionString = Boolean(process.env.DATABASE_URL);
const hasDiscreteConfig = Boolean(process.env.DB_HOST && process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASSWORD);
const shouldUseSsl = process.env.DB_SSL === "true";
const ssl = shouldUseSsl
  ? { rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false" }
  : false;

let pool = null;

if (hasConnectionString || hasDiscreteConfig) {
  const config = hasConnectionString
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl
      }
    : {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5435,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl
      };

  pool = new Pool(config);
}
console.log(`Database pool initialized: ${pool ? "Yes" : "No"}`);
export function getDbPool() {
  return pool;
}

export function isDatabaseConfigured() {
  return Boolean(pool);
}
