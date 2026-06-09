# CI/CD Microservice Starter

A production-ready Node.js + TypeScript REST API with automated testing and continuous deployment via GitHub Actions and Railway.

## Tech Stack

- **Runtime:** Node.js 20
- **Language:** TypeScript 6
- **Framework:** Express 5
- **Testing:** Jest + Supertest
- **Containerization:** Docker (multi-stage build)
- **CI/CD:** GitHub Actions
- **Hosting:** Railway

## Features

- REST API with `/health` and `/users` endpoints
- Fully typed with TypeScript strict mode
- Automated tests that run on every push
- Dockerized with a lightweight multi-stage build
- Zero-downtime deploys — broken code never reaches production

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/blluesweater/cicd-microservice-starter.git
cd cicd-microservice-starter
npm install
```

### Run in development

```bash
npm run dev
```

The server starts at `http://localhost:3000`. Nodemon watches for file changes and restarts automatically.

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Returns server health status |
| GET | `/users` | Returns all users |
| GET | `/users/:id` | Returns a user by ID |

### Example responses

**GET /health**
```json
{ "status": "ok" }
```

**GET /users**
```json
[
  { "id": 1, "name": "Amrouni", "email": "amrouni@email.com" },
  { "id": 2, "name": "Yasser", "email": "yasser@email.com" }
]
```

**GET /users/999**
```json
{ "message": "User not found" }
```

## Docker

### Build the image

```bash
docker build -t cicd-microservice-starter .
```

### Run the container

```bash
docker run -p 3000:3000 cicd-microservice-starter
```

The API will be available at `http://localhost:3000`.

## CI/CD Pipeline

Every push to `main` triggers the following pipeline automatically:

```
git push origin main
        ↓
GitHub Actions
        ↓
Install dependencies → Run tests → Build TypeScript → Deploy to Railway
        ↓                  ↓
   all pass ✅         any fail ❌
        ↓                  ↓
  Live on Railway 🚀   Pipeline stops,
                       nothing deployed
```

The pipeline is defined in [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Project Structure

```
├── src/
│   ├── server.ts           # Entry point
│   ├── app.ts              # Express app setup
│   ├── routes/
│   │   └── users.ts        # /users endpoint
│   └── __tests__/
│       ├── health.test.ts  # Tests for /health
│       └── users.test.ts   # Tests for /users
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions pipeline
├── Dockerfile              # Multi-stage Docker build
├── tsconfig.json           # TypeScript configuration
└── jest.config.js          # Jest configuration
```

## License

ISC
