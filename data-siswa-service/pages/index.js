export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>

        <h1 style={styles.title}>
          🚀 Next.js Siap Digunakan
        </h1>

        <p style={styles.desc}>
          Lingkungan development kamu sudah siap dengan:
        </p>

        <div style={styles.tags}>
          <span style={styles.tag}>Docker</span>
          <span style={styles.tag}>PostgreSQL</span>
          <span style={styles.tag}>Next.js</span>
        </div>

        <div style={styles.commandBox}>
          <p>Jalankan perintah berikut:</p>

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
    fontFamily: "system-ui, sans-serif",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "2rem",
  },

  card: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "18px",
    maxWidth: "480px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },

  desc: {
    color: "#555",
    marginBottom: "1.2rem",
  },

  tags: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    marginBottom: "1.5rem",
  },

  tag: {
    background: "#eef2ff",
    color: "#4338ca",
    padding: "0.4rem 0.8rem",
    borderRadius: "999px",
    fontSize: "0.8rem",
    fontWeight: "500",
  },

  commandBox: {
    background: "#f8fafc",
    padding: "1rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
  },

  code: {
    display: "block",
    background: "#0f172a",
    color: "#22c55e",
    padding: "0.6rem",
    borderRadius: "6px",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },

  link: {
    color: "#2563eb",
  },

  button: {
    background: "linear-gradient(135deg, #4f46e5, #9333ea)",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};