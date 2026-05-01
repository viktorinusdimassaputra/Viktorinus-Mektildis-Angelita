import { Pool } from 'pg';

export default async function handler(req, res) {
  res.status(200).json({ service: 'User Service', message: 'Backend untuk User' });
}
