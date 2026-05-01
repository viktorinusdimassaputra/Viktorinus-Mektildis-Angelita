import { Pool } from 'pg';

export default async function handler(req, res) {
  res.status(200).json({ service: 'Data Siswa Service', message: 'Backend untuk Data Siswa' });
}
