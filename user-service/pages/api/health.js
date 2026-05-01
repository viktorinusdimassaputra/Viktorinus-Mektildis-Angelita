import { Pool } from 'pg';

export default async function handler(req, res) {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time');
    client.release();

    // Format output disamakan PERSIS dengan punya dosen
    const dbTime = new Date(result.rows[0].current_time).toString();
    
    res.status(200).json({
      ok: true,
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: {
        ok: true,
        message: `Tersambung ke Neon. Server time: ${dbTime}`
      }
    });
    
  } catch (error) {
    res.status(500).json({ 
      ok: false,
      status: "error",
      database: {
        ok: false,
        message: "Gagal tersambung ke Neon.",
        error: error.message
      }
    });
  }
}