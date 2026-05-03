import { Pool } from 'pg';

export default async function handler(req, res) {
  res.status(200).json({ service: 'Absensi Service', message: 'Backend untuk Absensi' });
}
