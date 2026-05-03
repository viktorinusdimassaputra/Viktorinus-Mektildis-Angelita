export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>Next.js siap dijalankan</h1>
      <p>Docker + Neon PostgreSQL sudah terkonfigurasi.</p>
      <p>Jalankan <code>docker compose up --build</code> lalu buka <strong>http://localhost:3000</strong>.</p>
    </main>
  )
}
