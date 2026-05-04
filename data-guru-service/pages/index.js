export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        
        <h1 style={styles.title}>
          🚀 Next.js Siap Dijalankan
        </h1>

        <p style={styles.subtitle}>
          Environment sudah dikonfigurasi dengan teknologi modern:
        </p>

        <div style={styles.stack}>
          <span style={styles.badge}>🐳 Docker</span>
          <span style={styles.badge}>🗄️ PostgreSQL</span>
          <span style={styles.badge}>⚡ Next.js</span>
        </div>

        <div style={styles.box}>
          <p style={{ marginBottom: "0.5rem" }}>
            Jalankan perintah berikut:
          </p>

          <code style={styles.code}>
            docker compose up --build
          </code>

          <p style={{ marginTop: "0.8rem" }}>
            lalu buka:
          </p>

          <strong style={styles.link}>
            http://localhost:3000
          </strong>
        </div>

        <button style={styles.button}>
          Mulai Sekarang
        </button>

      </div>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
    fontFamily: "system-ui, sans-serif",
    padding: "2rem",
  },

  container: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "480px",
    width: "100%",
  },

  title: {
    fontSize: "1.9rem",
    marginBottom: "0.7rem",
  },

  subtitle: {
    color: "#555",
    marginBottom: "1.2rem",
  },

  stack: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },

  badge: {
    background: "#e0f2fe",
    color: "#0369a1",
    padding: "0.4rem 0.8rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
  },

  box: {
    background: "#f8fafc",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },

  code: {
    display: "block",
    background: "#0f172a",
    color: "#22c55e",
    padding: "0.5rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },

  link: {
    color: "#2563eb",
  },

  button: {
    background: "linear-gradient(135deg, #2563eb, #7c3aed)",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.4rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};