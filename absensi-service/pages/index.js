export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>
          🚀 Next.js Environment Ready
        </h1>

        <p style={styles.subtitle}>
          Project kamu sudah siap dengan stack modern:
        </p>

        <div style={styles.badges}>
          <span style={styles.badge}>Docker</span>
          <span style={styles.badge}>Neon PostgreSQL</span>
          <span style={styles.badge}>Next.js</span>
        </div>

        <div style={styles.commandBox}>
          <p style={{ marginBottom: "0.5rem" }}>
            Jalankan perintah:
          </p>
          <code style={styles.code}>
            docker compose up --build
          </code>
          <p style={{ marginTop: "0.7rem" }}>
            lalu buka:
          </p>
          <strong style={{ color: "#00e0ff" }}>
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
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui, sans-serif",
    background: "linear-gradient(135deg, #1e3c72, #2a5298, #6a11cb)",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(40px)",
    opacity: 0.3,
  },

  card: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "2.5rem",
    width: "100%",
    maxWidth: "520px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "0.8rem",
  },

  subtitle: {
    color: "#d1d5db",
    marginBottom: "1.5rem",
  },

  badges: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },

  badge: {
    background: "rgba(255,255,255,0.15)",
    padding: "0.4rem 0.8rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
  },

  commandBox: {
    background: "rgba(0,0,0,0.3)",
    padding: "1rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
  },

  code: {
    display: "block",
    background: "#000",
    color: "#00ffcc",
    padding: "0.5rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },

  button: {
    background: "linear-gradient(135deg, #00e0ff, #7c3aed)",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "10px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};