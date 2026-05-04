export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>

        <div style={styles.icon}>🚀</div>

        <h1 style={styles.title}>
          Next.js Siap Digunakan
        </h1>

        <p style={styles.subtitle}>
          Environment kamu sudah terkonfigurasi dengan stack modern
        </p>

        <div style={styles.stack}>
          <span style={styles.badge}>Docker</span>
          <span style={styles.badge}>Neon PostgreSQL</span>
          <span style={styles.badge}>Next.js</span>
        </div>

        <div style={styles.box}>
          <p style={{ marginBottom: "0.5rem" }}>
            Jalankan:
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
          🚀 Mulai Development
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
    fontFamily: "system-ui, sans-serif",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    padding: "2rem",
  },

  card: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "20px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
  },

  icon: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },

  subtitle: {
    color: "#6b7280",
    marginBottom: "1.5rem",
  },

  stack: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },

  badge: {
    background: "#eef2ff",
    color: "#4f46e5",
    padding: "0.4rem 0.9rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
    fontWeight: "500",
  },

  box: {
    background: "#f1f5f9",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },

  code: {
    display: "block",
    background: "#0f172a",
    color: "#22c55e",
    padding: "0.6rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },

  link: {
    color: "#2563eb",
  },

  button: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#fff",
    border: "none",
    padding: "0.8rem 1.6rem",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};