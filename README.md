# Deployxa Next.js Starter

Production-ready Next.js template optimized for AI-assisted development and Deployxa Cloud.

---

## Why This Template?

This template represents the official Deployxa Cloud engineering standards for Next.js applications. It is designed to run perfectly out of the box and has been structured for optimal performance, security, and developer productivity when using AI coding assistants.

Compatible with major AI tools:
* Cursor
* Claude Code
* OpenCode
* GitHub Copilot
* Windsurf
* VS Code AI

---

## Features

* 🤖 AI-Agent Ready (Cursor, Claude Code, OpenCode, GitHub Copilot)
* 🚀 One-Click Deployxa Deployment
* 🐳 Production Dockerfile Included
* ⚡ Optimized Build Performance
* 🔒 Security Best Practices
* ❤️ Health Check Endpoint
* 📈 Cloud-Native Architecture
* 🌍 Ready for Custom Domains
* 🔄 CI/CD Ready
* 📦 Zero-Configuration Deployment

---

## Included

* **Dockerfile**: Advanced multi-stage Next.js standalone container.
* **docker-compose.yml**: Configured with Next.js web application, PostgreSQL database, and Redis cache with health checks.
* **Health Checks**: Root health check `/health` returning `{"status":"ok"}`.
* **Logging**: Environment level production logging configs.
* **Security**: Multi-stage non-root container permissions, security-hardened Alpine build.
* **CI Actions**: Preconfigured pipeline checking linting, compiling code, running tests, and validating Docker.

---

## Requirements

- Node.js 20+
- Docker & Docker Compose (optional for containerized run)

---

## Installation

Clone the template and set up configurations:

```bash
cp .env.example .env
npm install
```

---

## Local Development

Start the development server:

```bash
npm run dev
```

---

## Docker

Run the entire application environment with Docker Compose:

```bash
docker compose up --build
```

---

## Deploy to Deployxa

Deploy instantly via CLI:

```bash
deployxa deploy
```

For more documentation, visit the [Deployxa Documentation](https://docs.deployxa.com).

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NODE_ENV` | Mode of the application (development/production) | `production` |
| `PORT` | Listening port for the application | `3000` |
| `NEXT_PUBLIC_APP_URL` | Application root web URL | `http://localhost:3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/deployxa?schema=public` |
| `REDIS_URL` | Redis cache connection string | `redis://localhost:6379` |
| `LOG_LEVEL` | Level of logging output (debug/info/error) | `info` |

---

## Project Structure

```text
.github/
    workflows/
        ci.yml      # CI/CD Validation
docker/             # Configuration files
src/
    app/
        health/
            route.ts # Health Check Route
public/             # Static Assets
config/             # Configuration Settings
scripts/            # Operations Utilities
docs/               # Architectural Guides
tests/              # Automation Checks
.env.example        # Environment Template
Dockerfile          # Multi-stage Container
docker-compose.yml  # Multi-container Setup
```

---

## Health Endpoint

Exposes a JSON payload at `/health`:

```json
{
  "status": "ok"
}
```

---

## Production Optimizations

- **Standalone Output**: Compiled with `next.config.js` output set to `standalone`, copying only required node modules to the final runner stage.
- **Caching**: Multi-stage dependency building uses docker caching mechanisms.
- **Docker Base**: Uses lightweight alpine image.
- **Container Security**: Executes under dedicated `nextjs` user.

---

## AI Development

Optimized specifically for agents:
- `AGENTS.md` - Context guide.
- `CLAUDE.md` - Command guide.
- `COPILOT.md` - Editor rules.

---

## CI/CD

Validates syntax compiling, execution check, testing logic, and constructs docker build cache on pull requests.

---

## Troubleshooting

- **Redis connection failures**: Verify that `REDIS_URL` points correctly.
- **Database issues**: Wait for postgres healthy check status.

---

## License

MIT
