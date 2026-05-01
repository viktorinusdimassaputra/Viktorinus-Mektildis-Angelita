# Docker Setup for Next.js

This repository uses Docker Compose for local Next.js development with Neon PostgreSQL.

## Files

- `.env`: contains `DATABASE_URL` for Neon PostgreSQL.
- `docker-compose.yml`: defines the `app` service and maps port `3000`.
- `Dockerfile`: builds a Next.js container image and starts the app in development mode.
- `.dockerignore`: excludes build artifacts and local files from the image.

## Requirements

- `package.json` with Next.js scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

## Usage

1. Install Next.js dependencies locally if belum ada:

```sh
npm install next react react-dom
```

2. Start the container:

```sh
docker compose up --build
```

3. Open `http://localhost:3000`.

## Notes

- `DATABASE_URL` tersedia di dalam container dari `.env`.
- Jika kamu ingin menjalankan mode produksi, ganti `command` di `docker-compose.yml` menjadi `npm run start`.
