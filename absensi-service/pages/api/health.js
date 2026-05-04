import { Pool } from 'pg';

let pool;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      max: 5, // batasi koneksi
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 5000,
    });
  }
  return pool;
}

export default async function handler(req, res) {
  try {
    const pool = getPool();

    const result = await pool.query('SELECT NOW() as current_time');

    const dbTime = new Date(result.rows[0].current_time).toString();

    res.status(200).json({
      ok: true,
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: {
        ok: true,
        message: `Tersambung ke Neon. Server time: ${dbTime}`,
      },
    });

  } catch (error) {
    console.error("DB ERROR:", error);

    res.status(500).json({
      ok: false,
      status: "error",
      database: {
        ok: false,
        message: "Gagal tersambung ke Neon.",
        error: error.message,
      },
    });
  }
}